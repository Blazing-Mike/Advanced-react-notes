import { BsStar, BsStarFill } from "react-icons/bs";
import Decision from "./Decision";
import Toggle from "./Toggle/index";

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <BsStarFill className="star filled" />
          </Toggle.On>
          <Toggle.Off>
            <BsStar className="star" />
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>
      <br />
      <br />

      <Decision>
        {(goingOut) => {
          return (
            <h1>Am I going out tonight?? {goingOut ? "Yes!" : "Nope..."}</h1>
          );
        }}
      </Decision>
    </>
  );
}

export default App;
