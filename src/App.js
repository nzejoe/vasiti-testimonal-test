import { CustomNavbar, CustomLinks, Header } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <div className="main-content">
        <CustomLinks />
        <Header />
      </div>
    </div>
  );
}

export default App;
