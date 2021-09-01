import React from "react";

const App = () => {
  return (
    <div className="App">
      <button
        onClick={(e) =>
          window.ipc
            .invoke("channel", {
              title: "hi",
              content: "hello this is my message",
            })
            .then((e) => console.log("response", e))
        }
      >
        Click me
      </button>
    </div>
  );
};

export default App;
