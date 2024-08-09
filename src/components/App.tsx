import logo from "../assets/logo.svg";
import "../css/App.css";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function App() {
  const authContext = useContext(AuthContext);
  return (
    <AuthContext.Provider value={""}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload. {authContext}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
