//child
function Button(props){
  return(
    //props.onclickfunction takes in the incrementcounter functions reference declared in app component
    <button onClick = {() => props.onClickFunction(props.increment)}>+{props.increment}</button>
  );
}
// child
function Display(props){
  return (
    <div>{props.message}</div>
  );
}
//Parent - responsibilty isolation
function App(){
  //responsibility defined here
  const [counter , setCounter] = useState(0);
  const incrementCounter = (val) => setCounter(counter + val);
  return(
    <div>
      <Button onClickFunction = {incrementCounter} increment = {1} />
      <Button onClickFunction = {incrementCounter} increment = {5} />
      <Button onClickFunction = {incrementCounter} increment = {10} />
      <Button onClickFunction = {incrementCounter} increment = {100} />
      <Button onClickFunction = {incrementCounter} increment = {1000} />
      <Display message = {counter}/>
    </div>
  );
  
}
ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);
