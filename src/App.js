import logo from "./assets/images/profile.jpeg";
import "./App.css";
import Card from "./Card.js";
import catNotesImg from "./assets/images/cat-notes.png";
import floodPlainsImg from "./assets/images/flood-plains.png";
import wordBridgesImg from "./assets/images/word-bridges.webp";
import logTablesImg from "./assets/images/log-tables.webp";
import formulaeImg from "./assets/images/formulae.webp";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 style={{ fontWeight: 400 }}>Séamus Dwyer</h3>
      </header>
      <div className="sectionTitle">Projects</div>
      <div className="projects">
        <Card
          image={catNotesImg}
          link={
            "https://play.google.com/store/apps/details?id=com.sheepdog.cat_notes&hl=en&gl=US"
          }
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
          link={
            "https://play.google.com/store/apps/details?id=com.Sheepdog.WordBridges&hl=en_US"
          }
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
      <div className="repos">
        <h2 className="sectionTitle">Git Repositories</h2>
        <a href="https://github.com/dwyerse/dwyerse.github.io" className="repo">
          Website
        </a>
        &bull;
        <a href="https://github.com/dwyerse/FloodPlains" className="repo">
          Flood Plains
        </a>
        &bull;
        <a href="https://github.com/dwyerse/WordBridges" className="repo">
          Word Bridges
        </a>
        &bull;
        <a href="https://github.com/dwyerse/cat-notes" className="repo">
          Cat Notes
        </a>
      </div>
    </div>
  );
}

export default App;
