import React, { useEffect, useState } from "react";
import clsx from "clsx";

import "./Cell.css";

const Cell = ({ value, index, player, onPlay, disabled }) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    setState(value);
  }, [index, value]);

  const onChange = () => {
    setState(player);
    onPlay && onPlay(index, player);
  };

  return (
    <button
      className={clsx("button", {
        topLeft: index === 0,
        topRight: index === 2,
        bottomLeft: index === 6,
        bottomRight: index === 8,
      })}
      onClick={onChange}
      disabled={disabled}
    >
      {state}
    </button>
  );
};

export default Cell;
