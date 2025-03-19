

import React, { useEffect } from "react";

function Portfolio() {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "s" || event.key === "S") {
        window.open("https://calendly.com/abidsaudagar/free-15-minute-ai-search-consulting", "_blank");
      }
    };

    // Attach the event listener
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default Portfolio;

