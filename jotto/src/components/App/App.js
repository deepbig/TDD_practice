import React from 'react';
import './App.css';

import Congrats from '../Congrats/Congrats';
import GuessedWords from '../GuessedWords/GuessedWords';


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
          {guessedWord: 'train', letterMatchCount: 3}
        ]} />
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello world!</h1>
//     </div>
//   );
// }

export default App;
