import React from "react";

const ShimmerLoading = () => {
  return (
    <div className="shimmer-ui-section flex items-center gap-1">
      <div className="dot animate-bounce delay-0"></div>
      <div className="dot animate-bounce delay-150"></div>
      <div className="dot animate-bounce delay-300"></div>
    </div>
  );
};

export default ShimmerLoading;
