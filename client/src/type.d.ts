interface IProfileData {
  _id: string;
  firstname: string;
  email: string;
  addresslineone: string;
  postcode: number;
  city: string;
  lastname: string;
  gender: string;
  addresslinetwo: string;
  mobileno: object;
  country: string;
  createdAt: string;
}

interface ProfileDataProps {
  profileData: IProfileData;
}

type ApiDataType = {
  message: string;
  status: string;
  profilesData: IProfileData[];
  profileData?: IProfileData;
};
