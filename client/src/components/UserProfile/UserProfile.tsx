import React, { useEffect, useState } from "react";
import ProfileItem from "./ProfileItem";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import ReactTyped from "react-typed";
import SkeletonLoading from "../utilities/skeletonLoading/userProfileLoading/SkeletonLoading";
import HeaderMain from "../HeaderMain/HeaderMain";

const UserProfile: React.FC = () => {
  const [profilesData, setProfilesData] = useState<IProfileData[]>([]);
  const [loading, setLoading] = useState(false);

  const baseUrl: string = process.env.REACT_APP_GET_PROFILE as string;

  const fetchProfileData = () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const profilesData = await axios.get<IProfileData[]>(`${baseUrl}`);
        setProfilesData(profilesData.data);
        setLoading(false);
      } catch (err) {
        throw new Error(err);
      }
    }, 4000);
    //   .then((data: IProfileData[] | any) => {
    //     setProfilesData(data);
    //     console.log(data);
    //   })
    //   catch((err: Error) => console.log(err));
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  return (
    <>
      <HeaderMain>
        <ReactTyped
          style={{ fontSize: "2.5rem", color: "orange" }}
          strings={["MEMBER PROFILE"]}
          typeSpeed={120}
        />
      </HeaderMain>
      <section className="container">
        {loading ? (
          <SkeletonLoading />
        ) : (
          profilesData?.map(
            (profileData: IProfileData) =>
              (
                <ProfileItem key={profileData._id} profileData={profileData} />
              ) || <Skeleton />
          )
        )}
      </section>
    </>
  );
};

export default UserProfile;
