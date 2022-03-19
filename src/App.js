import {
  CustomNavbar,
  CustomLinks,
  Header,
  ExperienceStories,
  SubscribSection,
} from "./components";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <main className="main-content">
        <CustomLinks />
        <Header />
        <ExperienceStories />
        <SubscribSection/>
      </main>
    </div>
  );
}

export default App;
