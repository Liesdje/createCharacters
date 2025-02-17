import CharacterSheet from "./components/CharacterSheet";
import { useState } from "react";

function App() {
    const [ruleset, setRuleset] = useState("D&D 5e");

    return <CharacterSheet ruleset={ruleset} setRuleset={setRuleset} />;
}

export default App;
