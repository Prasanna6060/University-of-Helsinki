import React from "react";
import NodecontentsParts from "./NodecontentsParts";

const NodeContents = ({ parts }) => {
  console.log(parts);
  return (
    <div>
      <p>
        <NodecontentsParts parts = {parts}/>
      </p>
    </div>
  );
};

export default NodeContents;
