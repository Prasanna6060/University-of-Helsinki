import React from "react";
import Content_part from "./Content_part";

const Content = ({ parts }) => {
  return (
    <div>
      <p>
        <Content_part parts={parts} />
      </p>
    </div>
  );
};

export default Content;
