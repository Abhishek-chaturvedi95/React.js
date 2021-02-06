function tick(){
  const element = (
    <div>
      <h1>Hi the current time is : </h1>
      <h2>{new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element , document.getElementById('root'));
}

setInterval(tick , 1000);

//It calls ReactDOM.render() every second from a setInterval() callback.
