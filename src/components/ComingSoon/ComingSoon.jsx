import React from "react";
import { Link } from "react-router-dom";
import "./ComingSoon.css";

function ComingSoon() {

  return (

    <section className="coming-soon">

      <div className="coming-content">

        <h1>🚀</h1>

        <h2>Project Coming Soon</h2>

        <p>
          This live demo is currently under development.
          It will be available soon.
        </p>

        <Link to="/" className="back-btn">
          Back To Portfolio
        </Link>

      </div>

    </section>

  );

}

export default ComingSoon;