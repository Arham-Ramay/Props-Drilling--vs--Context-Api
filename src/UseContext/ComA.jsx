import React, { createContext } from "react";
import ComB from "./ComB";
//first createcontext
const BioData = createContext();

export default function ComA() {
  return (
    <>
      {/* We always export biodata and import in those components where we want to transfer data */}
      <BioData.Provider value={"arham ramay"}>
        <ComB />
      </BioData.Provider>
    </>
  );
}
export { BioData };
