import logo from "./profile.jpeg";
import "./App.css";
import Card from "./Card.js";
import catNotesImg from "./cat-notes.png";
import floodPlainsImg from "./flood-plains.png";
import wordBridgesImg from "./word-bridges.webp";
import logTablesImg from "./log-tables.webp";
import formulaeImg from "./formulae.webp";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Seamus Dwyer</h3>
      </header>
      <h1 style={{ color: "#343b47", fontWeight: 300 }}>Projects</h1>
      <div className="projects">
        <Card
          image={catNotesImg}
          link={"www.google.com"}
          title={"Cat Notes"}
          year={"2020"}
          subtitle={"Cat themed notes app written using React Native"}
        />
        <Card
          image={floodPlainsImg}
          link={"https://simmer.io/@Sheepdog/flood-plains"}
          title={"Flood Plains"}
          year={"2020"}
          subtitle={"WebGL puzzle game made in Unity"}
        />
        <Card
          image={wordBridgesImg}
          link={"www.google.com"}
          title={"Word Bridges"}
          year={"2016"}
          subtitle={"Word puzzle game made with Unity"}
        />
        <Card
          image={logTablesImg}
          link={
            "https://play.google.com/store/apps/details?id=com.duck.log&hl=en_IE&gl=US"
          }
          year={"2012"}
          title={"Log Tables App"}
          subtitle={"Android app of log tables for Irish state examinations "}
        />
        <Card
          image={formulaeImg}
          link={
            "https://play.google.com/store/apps/details?id=logtables.duckapps.logtablesv2&hl=en_IE&gl=US"
          }
          year={"2012"}
          title={"Formulae and Tables"}
          subtitle={"Recreation of the log tables app"}
        />
      </div>
    </div>
  );
}

export default App;
