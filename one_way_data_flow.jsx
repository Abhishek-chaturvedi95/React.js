//child
function Button(props){
  return(
    //props.onclickfunction takes in the incrementcounter functions reference declared in app component
    <button onClick = {props.onClickFunction}>+1</button>
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
  const [counter , setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  return(
    <div>
      <Button onclickFunction = {incrementCounter}/>
      <Display message = {counter}/>
    </div>
  );
  
}
ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);
