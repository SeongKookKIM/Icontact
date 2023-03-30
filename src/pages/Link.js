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
              window.open(
                "https://strmnft.com/channel/channel/EyeContact?&page=1&per_page=10&user_idx=105429&search_chk=0",
                "_blank"
              );
            }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Link;
