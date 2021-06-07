import React from "react";
import Skeleton from "react-loading-skeleton";
import "./SkeletonLoading.scss";

const SkeletonLoading: React.FC = () => {
  return (
    <div className="skeleton-loading">
      <div>
        <Skeleton count={1} style={{ width: "20%" }} />
      </div>

      <div>
        <Skeleton count={1} style={{ width: "40%" }} />
      </div>

      <div>
        <Skeleton count={1} style={{ width: "60%" }} />
      </div>

      <div>
        <Skeleton count={1} style={{ width: "80%" }} />
      </div>

      <div>
        <Skeleton count={1} style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default SkeletonLoading;
