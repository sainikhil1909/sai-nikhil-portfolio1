import React from "react";
import "./Offline.css";
import { FaWifi } from "react-icons/fa";

function Offline() {
  return (
    <div className="offline-page">

      <div className="offline-card">

        <FaWifi className="offline-icon" />

        <h1>You're Offline</h1>

        <p>
          Please check your internet connection.
        </p>

        <button onClick={() => window.location.reload()}>
          Try Again
        </button>

      </div>

    </div>
  );
}

export default Offline;