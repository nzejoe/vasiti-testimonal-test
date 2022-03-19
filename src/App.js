import {
  CustomNavbar,
  CustomLinks,
  Header,
  ExperienceStories,
  SubscribSection,
  FooterMain
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
      </main>
      <footer className="footer">
        <SubscribSection />
        <FooterMain/> 
      </footer>
    </div>
  );
}

export default App;
