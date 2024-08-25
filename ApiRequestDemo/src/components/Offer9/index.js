import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Offer.module.sass";
import { useApiData } from "../ApiData";

const Offer = ({ className}) => {
  const {data} = useApiData()
  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn("stage", styles.stage)}>
          Question 9
        </div>
        <div className={styles.text}>
          Using the response from question 8, pass the information to be displayed in the empty space below without calling the API Endpoint in this component.
        </div>
        <h2 className={cn("h1", styles.title)}>
          Card Number: {data && (() => {
            let v = data.cards[0].value
            switch(v){
              case "ACE":   return 1;
              case "KING":   return 13;
              case "QUEEN":   return 12;
              case "JACK":   return 11;
              default: return v;
            }
          })()} 
          <br></br>
          <br></br>
          Card Suite: {data && data.cards[0].suit} 
        </h2>
      </div>
    </div>
  );
};

export default Offer;
