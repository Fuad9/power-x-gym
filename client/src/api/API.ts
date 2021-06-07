import axios, { AxiosResponse } from "axios";
const baseUrl: string = "http://localhost:5000";
// const baseUrl: string = "https://jsonplaceholder.typicode.com";

// export const getProfileData = async (): Promise<AxiosResponse<ApiDataType>> => {
//   try {
//     const profilesData: AxiosResponse<ApiDataType> = await axios.get(
//       baseUrl + "/profilesData"
//     );
//     return profilesData;
//     // console.log(profilesData);
//   } catch (err) {
//     throw new Error(err);
//   }
// };

export const getProfileData = async () => {
  try {
    const profilesData = await axios.get<IProfileData[]>(
      baseUrl + "/profilesData"
    );
    return profilesData;
    // console.log(profilesData);
  } catch (err) {
    throw new Error(err);
  }
};
