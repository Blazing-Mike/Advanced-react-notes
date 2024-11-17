import { BsStar, BsStarFill } from "react-icons/bs";
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
    </>
  );
}

export default App;
