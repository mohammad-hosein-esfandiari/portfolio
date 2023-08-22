import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
export const Loading = () => {
  return (
    <div className="w-screen flex items-center justify-center h-screen bg-black">
      <div>
        <ScaleLoader height={30} width={5} radius={0} margin={2} color="#FFF" />
      </div>
    </div>
  );
};
