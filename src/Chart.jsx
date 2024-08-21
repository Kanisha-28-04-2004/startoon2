import React from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";

const Piechart = () => {
  return (
    <div className="flex justify-center items-center text-white">
      <SemiCircleProgressBar
        percentage={40}                 
        stroke="#FCB000"                
        strokeWidth={115}                
        background="#E5E7EB"            
        diameter={200}                  
        orientation="up"                
        direction="right"               
        showPercentValue={true}       
      />
    </div>
  );
}

export default Piechart;
