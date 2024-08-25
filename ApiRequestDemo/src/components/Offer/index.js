import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Offer.module.sass";
import GenerateId from "../GenerateId.js";

const Offer = ({ className }) => {
  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn("stage", styles.stage)}>
          Question 7
        </div>

        <div className={styles.text}>
          Import the generateId function and generate an ID to replace the "Loading..." value below
        </div>
        <h2 className={cn("h1", styles.title)}>
          New ID: <GenerateId/>
        </h2>
        <Link className={cn("button", styles.button)} to="/question7">
          Next Question
        </Link>
      </div>
    </div>
  );
};

export default Offer;
