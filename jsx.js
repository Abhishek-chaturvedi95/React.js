//With JSX, we can write what looks like HTML, and also we can create and use our own XML-like tags. Here's what JSX looks like assigned to a variable.

//JSX--

const heading = <h1 className="site-heading">Hello, React</h1>

//Using JSX is not mandatory for writing React. 
//Under the hood, it's running createElement, which takes the tag, object containing the properties, and children of the component and renders the same information.
//The below code will have the same output as the JSX above.

const heading = React.createElement('h1', {className: 'site-heading'}, 'Hello, React!')

//JSX is actually closer to JavaScript, not HTML, so there are a few key differences to note when writing it.

1.className is used instead of class for adding CSS classes, as class is a reserved keyword in JavaScript.
2.Properties and methods in JSX are camelCase - onclick will become onClick.
3.Self-closing tags must end in a slash - e.g. <img />

//JavaScript expressions can also be embedded inside JSX using curly braces, including variables, functions, and properties.

const name = 'Abhishek'
const heading = <h1>Hello, {name}</h1>
