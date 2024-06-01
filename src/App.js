import logo from "../src/img/logo.svg";
import Menu from "../src/js/mainMenu";
import Body from "../src/js/mainBody";
import "../src/css/app.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} id="logo" alt="logo"/>
        <Menu />
      </header>
      <body>
        <Body />
      </body>
    </div>
  );
}

export default App;
