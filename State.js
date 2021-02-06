State allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule.

//Converting a Function to a Class
//You can convert a function component like Clock to a class in five steps:

1.Create an ES6 class, with the same name, that extends React.Component.
2.Add a single empty method to it called render().
3.Move the body of the function into the render() method.
4.Replace props with this.props in the render() body.
5.Delete the remaining empty function declaration.

//eg--

//function-
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

//class-

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

////Adding Local State to a Class
We will move the date from props to state in three steps:

1.Replace this.props.date with this.state.date in the render() method:

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

2.Add a class constructor that assigns the initial this.state:

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

3.Remove the date prop from the <Clock /> element:

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

//Do Not Modify State Directly
//For example, this will not re-render a component:

// Wrong
this.state.comment = 'Hello';
Instead, use setState():

// Correct
this.setState({comment: 'Hello'});
//The only place where you can assign this.state is the constructor.

