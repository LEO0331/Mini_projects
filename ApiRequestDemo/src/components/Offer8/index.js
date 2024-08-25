import React, { useState, useEffect } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Offer.module.sass";
import { useApiData } from "../ApiData";

const Offer = ({ className }) => {
  {/* https://deckofcardsapi.com/api/deck/new/draw/?count=1 */ }
  const {data} = useApiData()
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://deckofcardsapi.com/api/deck/new/draw/?count=1`
  //       );
  //       if (!response.ok) {
  //         throw new Error(`HTTP error: Status ${response.status}`);
  //       }
  //       let getData = await response.json();
  //       setData(getData);
  //     } catch (err) {
  //       setData(null);
  //     } 
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className={cn(className, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn("stage", styles.stage)}>
          Question 8
        </div>
        <div className={styles.text}>
          Look at the code for this component. Call the API Endpoint to fetch a responses.
          <br></br>
          {data && (
              <img 
              key={data.cards[0].value}
              src={data.cards[0].image}
              alt="new"
              />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Offer;
