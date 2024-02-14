import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Card name='Rahul Dhangar' jobTitle='Fullstack Developer' >Hello World!</Card>
      <Card name='Vaibhav Chawda' jobTitle='CEO' />
      <Card name='Gaurav Joshi' jobTitle='Music Composer' />
    </div>
  );
}

export default App;
