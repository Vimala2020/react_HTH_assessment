import React from "react";
import BasketballPlayer from "./components/BasketballPlayerCard";
import photo_1 from "./Assets/sunil_chhetri.jpg"

function App() {
  return (
    <div className="App">
      <BasketballPlayer
      name="Sunil chhetri"
      image= {photo_1}
      position="Forward"
      stats={{ pointsPerGame: 12.4, assistsPerGame: 5, reboundPerGame: 15 }}/>
    </div>
  );
}

export default App;
