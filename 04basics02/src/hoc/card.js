import React from "react";

// const Card = () => {
//   return <></>;
// };

// export default Card;

const Style = {
  background: "lightgrey",
};

export default function Card(props) {
  return (
    <div style={Style} className="card">
      {props.children}
    </div>
  );
}
