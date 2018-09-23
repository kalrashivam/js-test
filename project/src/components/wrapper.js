import React from "react";

export default ({ children }) => (
  <div
    id="multi-item-example"
    class="carousel slide carousel-multi-item carousel-multi-item-2"
    style={{ float: "left", background: "#eae1d7" }}
    data-ride="carousel"
  >
    {children}
  </div>
);