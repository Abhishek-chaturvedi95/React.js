// File shows the difference between HTML DOM AND REACTDOM
// when setinterval update , for the HTML DOM WHOLE DOM REFRESHES AND INPUT IS RESET, HOW EVER IN CASE OF REACT ONLY THE TIME REFRESHES
const render = () => {
  document.getElementById('mountNode').innerHTML = `
    <div>
      Hello HTML
      <input />
      <pre>${(new Date).toLocaleTimeString()}</pre>
    </div>
  `;
  
  ReactDOM.render(
    React.createElement(
      "div",
      null,
      "Hello React",
      React.createElement('input' , null),
      React.createElement('pre' , null , (new Date).toLocaleTimeString()),
    ),
    document.getElementById('mountNode2'),
  );
}

setInterval(render , 1000);
