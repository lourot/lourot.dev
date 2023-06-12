export default Page;

import React from "react";

function Page() {
  return (
    <div>
      <div className="name">Aurélien Lourot</div>
      <div>Software developer</div>
      <div className="light city">Berlin, Germany</div>
      <div>
        <a href="https://github.com/AurelienLourot">
          <i className="logo fa-brands fa-square-github"></i>{" "}
          <span className="light">AurelienLourot &#64; GitHub</span>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/lourot/">
          <i className="logo fa-brands fa-linkedin"></i>{" "}
          <span className="light">lourot &#64; LinkedIn</span>
        </a>
      </div>
      <div>
        <i className="logo fa-solid fa-square-envelope"></i>{" "}
        <span className="light">
          <span>soft</span>ware &#64; <span>lou</span>rot.dev
        </span>
      </div>
    </div>
  );
}
