import Menu from "../src/js/mainMenu";
import Body from "../src/js/mainBody";
import "../src/css/app.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="main-menu-header">
        <Menu />
      </header>
      <body>
        <Body />
      </body>
    </div>
  );
}

export default App;
