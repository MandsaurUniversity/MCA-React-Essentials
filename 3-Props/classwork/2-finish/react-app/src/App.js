import './App.css';
import Card from './Card';

const buttonsMarkup = (
  <div>
  <button className="button button2">YES</button>
  <button className="button button3">NO</button>
  </div>
)

function App() {
  return (
    <div className="App">
      <Card name='Rahul Dhangar' jobTitle='Fullstack Developer' >
        {buttonsMarkup}
      </Card>
      <Card name='Vaibhav Chawda' jobTitle='CEO' />
      <Card name='Gaurav Joshi' jobTitle='Music Composer' />
    </div>
  );
}

export default App;
