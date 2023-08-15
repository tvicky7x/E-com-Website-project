import React from "react";

const Context = React.createContext({ test: "test" });

export function ContextProvider(props) {
  return (
    <Context.Provider value={{ test: "Hello" }}>
      {props.children}
    </Context.Provider>
  );
}

export default Context;
