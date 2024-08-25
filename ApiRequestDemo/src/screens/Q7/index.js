import React, { useRef } from "react";

import Offer8 from "../../components/Offer8";
import Offer9 from "../../components/Offer9";
import { ApiDataProvider } from "../../components/ApiData";

const Q7 = () => {

  return (
    <ApiDataProvider>
      <Offer8 className="section-border-top" />
      <Offer9 className="section-border-top" />
    </ApiDataProvider>
  );
};

export default Q7;
