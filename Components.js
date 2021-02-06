//Components let you split the UI into independent, reusable pieces, and think about each piece in isolation
//Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

//using js function-

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

//using class - 

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

//Previously, we only encountered React elements that represent DOM tags:

const element = <div />;

//However, elements can also represent user-defined components:

const element = <Welcome name="Abhishek" />;

//When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

//For example, this code renders “Hello, Abhishek” on the page:

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Abhishek" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);

//What really happens - 
1.We call ReactDOM.render() with the <Welcome name="Abhishek" /> element.
2.React calls the Welcome component with {name: 'Abhishek'} as the props.
3.Our Welcome component returns a <h1>Hello, Abhishek</h1> element as the result.
4.React DOM efficiently updates the DOM to match <h1>Hello, Abhishek</h1>.


Note: Always start component names with a capital letter.
React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.

Props are Read-Only
Whether you declare a component as a function or a class, it must never modify its own props.
