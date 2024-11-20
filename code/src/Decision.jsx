import React from "react";

// eslint-disable-next-line react/prop-types
export default function Decision({ children }) {
  const [goingOut, setGoingOut] = React.useState(false);

  function toggleGoingOut() {
    setGoingOut((prev) => !prev);
  }

  return (
    <div>
      <button onClick={toggleGoingOut}>Change mind</button>
      {children(goingOut)}
    </div>
  );
}
