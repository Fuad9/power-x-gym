import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import SkeletonLoading from "./SkeletonLoading.cards";

const SkeletonComponent: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const component = () => {
    return children;
  };

  const loader = () => {
    setLoading(true);
    setTimeout(() => {
      component();
      setLoading(false);
    }, 10000);
  };

  useEffect(() => {
    loader();
  }, []);

  return (
    <>{loading ? <SkeletonLoading /> : <div>{children}</div> || <Skeleton />}</>
  );
};

export default SkeletonComponent;
