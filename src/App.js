import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const gamesDB = {
  "fight": [
    { name: "PUBG", 
      rating: "5/5"},

    { name: "Fortnite",
      rating: "5/5"},
    {
      name: "Free Fire",
      rating: "4/5"
      }
  ],
  "sport": [
    { name: "Real Cricket", 
      rating: "4/5"},

    { name: "Fifa", 
      rating: "5/5"},

    {
      name: "NBA",
      rating: "4/5"
    }
  ],
  "action": [
    { name: "Shadow Fight", 
      rating: "4/5"},

    { name: "Vector", 
      rating: "3/5"},

    {
      name: "Mortal Combat",
      rating: "4/5"
    }
  ]
}

function App() {
  // console.log(game_key)
  const [selectedGenre, setGame] = useState("sport")

  function gameClickHandler(gameInput){
    console.log(gameInput)
    var selectedGenre = gameInput
    // var game = game_key[gameInput];
    // var gameGenre = gamesDB[game]
    setGame(selectedGenre);
    gamesDB[selectedGenre].map((game)=>{
      console.log(game.name)
    })
  }
  return (
    <div className="App">
      <h1 id="gameShowHeader">Game Show</h1>
      <div id="game_category">
        <ul className="nav">
          <li className= "nav nav-items">{
            Object.keys(gamesDB).map(function(game, index){
              return (
                 <span 
                  onClick = {() => gameClickHandler(game)}
                 style={{marginLeft:"1rem", marginRight:"1rem", cursor: "pointer"}}> {game} </span>
                 )
            })
          }</li>
        </ul>
      </div>
  
      <div>
      <ul className="game_item_list">
          {gamesDB[selectedGenre].map((game) => (
              <li
                id="game_list" 
                key={game.name}
              >
                {" "}
              <div style={{fontSize: "2rem"}} > {game.name} </div>
              <div style={{fontSize: "1.5rem", color: "maroon"}}> {game.rating} </div>
              </li>
          ))}
      </ul>
      </div>
      {/* <div>
        <ul>
          {gamesDB[selectedGenre].map((game) => (
            <li
              key={game.name}
            >
              {" "}
              <div> {game.name} </div>
              <div> {game.rating} </div>
            </li>
          ))}
        </ul>
      </div> */}

    </div>

  );
}

export default App;
