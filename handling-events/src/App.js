import './App.css';

function clickMe(e) {
  console.log(new Date().toLocaleDateString());
  console.log(e);
}


function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
    console.log(this)
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  return (
    <div>
      <button onClick={(e) => clickMe(e)}>Click Me!</button>
      <br />
      <Form />
    </div>
  );
}

export default App;
