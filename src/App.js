import "./index.css";
import MainHeader from "./js/mainHeader";
import MainBody from "./js/mainBody";

function App() {
  return (
    <div className="App">
      <header>
        <MainHeader></MainHeader>
      </header>
      <body>
        <MainBody></MainBody>
      </body>
    </div>
  );
}

export default App;
