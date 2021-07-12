
import './App.css';
import { useState } from 'react';
import CharacterBox from './components/CharacterBox';
import Form from './components/Form';

function App() {
  const [characters, setCharacters] = useState([
    {
      name: 'Yoshi',
      isGood: true,
      powers: ["eat things", "throw eggs"]
    },
    {
      name: 'Mr. Burns',
      isGood: false,
      powers: ["rich", "nuclear power"]
    }
  ])

  const onCheckbox = (idx) => {
    const temp = {
      ...characters[idx],
      isGood: !characters[idx].isGood
    }

    setCharacters([
      ...characters.slice(0,idx),
      temp,
      ...characters.slice(idx+1)
    ])

  }

  const onDeleteHandler = (idx) => {
    setCharacters([
      ...characters.slice(0,idx),
      ...characters.slice(idx+1)
    ])
  }

  const onSubmitPower = (event, idx, power) => {
    event.preventDefault()
    const temp = {
      ...characters[idx],
    }

    setCharacters([
      ...characters.slice(0,idx),
      temp,
      ...characters.slice(idx+1)
    ])
    temp.powers.push(power)

  }


  return (
    <div className="App">
      <button className="btn btn-danger">Thanos Button</button>
      <Form characters={characters} setCharacters={setCharacters}/>
      {
        characters.map((character, idx) => {
          return <CharacterBox onSubmitPower={onSubmitPower} onDeleteHandler={onDeleteHandler} onCheckbox={onCheckbox} key={idx} character={character} idx={idx}/>
        })
      }
    </div>
  );
}

export default App;
