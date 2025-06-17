import UserFavoriteAnimals from './UserFavoriteAnimals.js'
import './App.css';
import Exercise from './Exercise3.js'

function App() {
  const helloMessage = <h1>Hello message</h1>
  const myelement = <h1>I Love JSX!</h1>
  const sum = 5+5
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  }
  return (
    <div className="App">
      <h3>first name : {user.firstName}</h3>
      <h3>last name {user.lastName}</h3>
      {helloMessage}
      {myelement}
      <p>React is {sum} times better with JSX</p>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
      <Exercise/>
    </div>
  );
}

export default App;
