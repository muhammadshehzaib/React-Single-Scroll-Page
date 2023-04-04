import AnchorLink from "react-anchor-link-smooth-scroll";
import WelcomePage from "./WelcomePage";

function App() {
  return (
    <div className="App">
      <h1 align="center">Welcome To Geeksforgeeks</h1>
      <h2 align="center">
        <AnchorLink href="#course">
          <button>Courses</button>
        </AnchorLink>
        <AnchorLink href="#article">
          <button>Articles</button>
        </AnchorLink>
      </h2>
      <WelcomePage />
    </div>
  );
}

export default App;
