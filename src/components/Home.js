import React, { useState } from "react";
import { useConnect } from "../context/index";
import { types } from "../utils/actionTypes";

const Home = props => {
  const [input, setInput] = useState("");

  const update = () => {
    props.dispatch({
      type: types.SET_NAME,
      payload: input
    });
  };
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <input type="text" onChange={e => setInput(e.target.value)} />
      <button onClick={() => update()}>update</button>
    </div>
  );
};

export default useConnect(({ name }) => ({ name }))(Home);
