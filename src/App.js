import { useState } from "react";
import { Dropdown } from "./components/Dropdown";

function App() {

  const [selectedTeam, setSelectedTeam] = useState(null);

  return (
    <div className="App">
      {selectedTeam && <div>Seu time: {selectedTeam}</div>}
      <Dropdown 
        title="Selecione seu time" 
        options={['Barcelona', 'Real Madrid', 'Manchester United']}
        onSelect={setSelectedTeam}
      />
    </div>
  );
}

export default App;
