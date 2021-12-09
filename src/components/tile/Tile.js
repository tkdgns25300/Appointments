import React from "react";

export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      {Object.values(tile).map((value, idx) => {
        return <p key={idx} className={idx === 0 ? 'tile-title' : 'tile'}>{value}</p>
      })}
    </div>
  );
};
