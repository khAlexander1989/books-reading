import './App.css';

function App() {
  const obj = {
    name: 'slim',
    lastName: 'khardin',
  };

  console.log('obj', obj);
  console.log('Hello world');

  const myFunction = x => {
    return x;
  };

  console.log(myFunction(11));

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
