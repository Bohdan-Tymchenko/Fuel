import React, { useState } from "react";
import { ConnectionStatusContainer } from './connectionInfoStyles';

function ConnectionInfo() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ConnectionStatusContainer className={isExpanded ? "expanded" : ""}>
      <div className="connection-toggle" onClick={toggleExpanded}>
        {isExpanded ? "Hide Connection details" : "Show Connection details"}
      </div>
      <ul className={isExpanded ? "open" : ""}>
        <li>
          <span className="status success" />Connection status
        </li>
        <li>
          <span className="status error" />Response Time Name holder (xxxms)
        </li>
        <li>XX,XXX TPS</li>
        <li>
          Average Gas Prices:
          <span className="tag">SPOT: X,XXXX€</span>
          <span className="tag">PREP: X,XXXX€</span>
        </li>
      </ul>
    </ConnectionStatusContainer>
  );
}

export default ConnectionInfo;
