import { CustomNavbar, CustomLinks, Header, ExperienceStories } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <main className="main-content">
        <CustomLinks />
        <Header />
        <ExperienceStories />
      </main>
    </div>
  );
}

export default App;
