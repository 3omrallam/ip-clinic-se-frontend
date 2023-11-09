import React from "react";

import "./home.scss";

export default function Home() {
  return (
    <div className={`grid-container`}>
      <div className="item1">Header</div>
      <div className="item2">Menu</div>
      <div className="item3">
        <p>main</p>
      </div>
      <div className="item5">Footer</div>
    </div>
  );
}
