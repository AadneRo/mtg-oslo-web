import "./../styles.css";

import { useState } from "react";
import useWindowDimensions from "./../hooks";

export default function Banner({ color }: { color: string }) {
  const cl = "banner " + color;

  const { width } = useWindowDimensions();
  const [isExpanded, setIsExpanded] = useState(width > 750);

  return (
    <button
      className={cl}
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      <h2>Banner title</h2>

      {isExpanded && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      )}
    </button>
  );
}
