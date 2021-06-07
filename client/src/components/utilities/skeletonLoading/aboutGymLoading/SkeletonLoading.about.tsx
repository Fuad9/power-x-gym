import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonLoading: React.FC = () => {
  return (
    <section className="container">
      <div className="split" style={{ height: "10rem" }}>
        <Skeleton count={1} style={{ width: "100%", height: "100%" }} />
        <div>
          <Skeleton count={1} style={{ width: "100%" }} />
          <Skeleton count={1} style={{ width: "60%" }} />
          <Skeleton count={1} style={{ width: "80%" }} />
          <Skeleton count={1} style={{ width: "80%" }} />
          <Skeleton count={1} style={{ width: "80%" }} />
        </div>
      </div>
    </section>
  );
};

export default SkeletonLoading;
