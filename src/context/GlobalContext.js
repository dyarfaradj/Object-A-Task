import React, { useState } from "react";

const GlobalContext = React.createContext();

const GlobalContextProvider = props => {
  const [textFilter, setTextFilter] = useState("");
  const [countyFilter, setCountyFilter] = useState("All Cities");
  const state = { textFilter, countyFilter };
  const action = { setTextFilter, setCountyFilter };
  return (
    <GlobalContext.Provider value={{ ...state, ...action }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

const GlobalContextConsumer = GlobalContext.Consumer;

export { GlobalContext, GlobalContextProvider, GlobalContextConsumer };
