import React from "react";
import "./Grid.css";

interface GridProps {
  columns?: number;
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ columns = 3, children }) => {
  return (
    <div
      className="grid-container"
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
    >
      {children}
    </div>
  );
};

export default Grid;
