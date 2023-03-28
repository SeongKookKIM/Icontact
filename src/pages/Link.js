import React from "react";

function Link() {
  return (
    <div className="link-menu">
      <ul>
        <li>
          <img
            src="assets/image/strmnft.svg"
            alt="opensea"
            onClick={() => {
              window.open("https://strmnft.com/", "_blank");
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Link;
