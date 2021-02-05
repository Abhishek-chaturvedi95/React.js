//Always name a component with 1st letter upeercase
function Button(){
  const [counter , setCounter] = useState(0);
  return <button onClick = {() => setCounter(counter + 1)}>Test - {counter}</button>
}

ReactDOM.render(
  <Button />,
  document.getElementById('mountNode'),
);
