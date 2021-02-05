//we need to work with some data so get some data
const testData = [
  {name : 'Abhishek Chaturvedi' , avatar_url :
  "https://avatars.githubusercontent.com/u/65394375?s=460&u=cce6e8acc7755da83df585bf5992b46880a0b627&v=4" , company : "Zluri"},
  {name : 'Marcel Ramos' , avatar_url :
  "https://avatars.githubusercontent.com/u/4392950?s=460&u=6a9b1723bbdd95b3a137902f063a1fcdbc1e9033&v=4" , company : "Waldron Lab"}
];


// another thing is we need a cardlist, lets make it a function instead of a class just for good tutorial and then make corresponding change in App class
//Note that we have spread the object content and passed in the card component inside cardlist
// Insted of hardcoding use dynamic map method to map each element of object array to spred out the attributes
// <Card {...testData[0]}/>
// <Card {...testData[1]}/> 
// Avoid Hardcoding like this 
const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card {...profile}/>)}
  </div>
  
);


//Cards Class
//Note - this.props refers to the props of class Card
//Note each time we use a class component react internally creates an instance and the this refers to that instance(this instance is kept in memory and not on browser). each time we get a different instance to work with and hence 'this' from first card is different that 'this' from second card
class Card extends React.Component{
  render(){
    const profile = this.props;
    return(
      <div className = "github-profile">
        <img src = {profile.avatar_url} />
        <div className = "info">
          <div className = "Name">{profile.name}</div>
          <div className = "Company">{profile.company}</div>
        </div>
      </div>
    );
  }
}
  
//Lets work on taking i/p from the user 
//To take i/p from user define eventhandler in react UI
class Form extends React.Component{
  //to use reacts special ref method use createref , but this is not used insted we used state to catch every character as it is typed,it is used with onChange
  //username_ip = React.createRef();
  //Now after we are able to take i/p we are ready to communicate with github API using fetch call, in this case a library called - 'axios' can be used instead
  state = {userName : ''};
  handleSubmit = async (event) => {
    // without prevent Default , the page refreshes each time submit is done 
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    //axios.get return a promise
    this.props.onSubmit(resp.data);
  };
  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <input 
          type = "text" 
          value = {this.state.userName}
          onChange = {event => this.setState({userName : event.target.value})}
          placeholder = "Github Username" 
          required 
          />
        <button>Add card</button>
      </form>
    );
  }
}


// Github Cards App 
// previously - <Card /> insted of <CardList />
class App extends React.Component{
  state = {
    profiles : testData,
  };
  addNewProfile = (profileData) => {
    //add new profile to the list, setState is used to change state of a react class component(takes in obj or func)
    this.setState(prevState => ({
      profiles : [...prevState.profiles , profileData],
    }));
  };
  render(){
    return(
      <div>
        <div className = "header">
          <b>{this.props.title}</b>
        </div>
        <Form onSubmit = {this.addNewProfile}/>
        <CardList profiles = {this.state.profiles}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App title = "The GitHub Cards App" />,
  mountNode,
);
