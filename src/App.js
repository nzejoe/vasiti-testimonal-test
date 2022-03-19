import { CustomNavbar, CustomLinks, Header, Experience } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <main className="main-content">
        <CustomLinks />
        <Header />
        <Experience/>
      </main>
    </div>
  );
}

export default App;
