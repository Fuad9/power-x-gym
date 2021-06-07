import { Document } from "mongoose";

export interface IProfileData extends Document {
  _id: string;
  firstname: string;
  email: string;
  addresslineone: string;
  postcode: number;
  city: string;
  lastname: string;
  gender: string;
  addresslinetwo: string;
  mobileno: number;
  country: string;
}
