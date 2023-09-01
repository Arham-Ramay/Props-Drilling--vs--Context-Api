import React, { useContext } from "react";
import { BioData } from "./ComA";

export default function ComC() {
  //in the useContext(contextvalue)and context value is that which createcontext and myName can store our passed value which we want to access
  const myName = useContext(BioData);
  return (
    <h1>
      ComC here we pass data directly from child A to chil C component and my
      passed data is {myName}
    </h1>
  );
}
