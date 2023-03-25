import React, { useEffect, useState } from "react";

import "./Cell.css";

const Cell = ({ value, index, player, onPlay, disabled }) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    // console.log("VALUE", { value, index });
    setState(value);
  }, [index, value]);

  const onChange = () => {
    setState(player);
    onPlay && onPlay(index, player);
  };

  return (
    <button className="button" onClick={onChange} disabled={disabled}>
      {state}
    </button>
  );
};

export default Cell;
