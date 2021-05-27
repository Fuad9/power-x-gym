import React, { useState, FocusEvent, FormEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import ReactTyped from "react-typed";
import HeaderMain from "../HeaderMain/HeaderMain";
import axios from "axios";
//styles
import "./Registration.scss";
import { useForm } from "react-hook-form";
import Message from "./Message";
import Progress from "./Progress";

type Profile = {
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
};

const Registration: React.FC = () => {
    const history = useHistory();
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [message, setMessage] = useState("");

    const [input, setInput] = useState({
        firstname: "",
        email: "",
        addresslineone: "",
        postcode: "",
        city: "",
        lastname: "",
        gender: "",
        addresslinetwo: "",
        mobileno: "",
        country: "",
    });

    const handleBlur = (e: FocusEvent<HTMLInputElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const { register, handleSubmit } = useForm<Profile>();

    const onSubmit = handleSubmit(async (formData) => {
        try {
            const res = await axios.post(
                "http://localhost:5000/customers",
                formData,
                {
                    headers: { "Content-Type": "application/json" },

                    onUploadProgress: (progressEvent) => {
                        setUploadPercentage(
                            Math.round(
                                (progressEvent.loaded * 100) /
                                    progressEvent.total
                            )
                        );
                    },
                }
            );

            // Clear percentage
            setTimeout(() => setUploadPercentage(0), 10000);
            setMessage("Data sent successfully");

            res.status === 200 && history.push("/payment");
        } catch (err) {
            console.log(err.message);
        }
    });

    // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("firstname", input.firstname);
    //     console.log(formData);
    //     formData.append("email", input.email);
    //     formData.append("addresslineone", input.addresslineone);
    //     formData.append("postcode", input.postcode);
    //     formData.append("city", input.city);
    //     formData.append("lastname", input.lastname);
    //     formData.append("gender", input.gender);
    //     formData.append("addresslinetwo", input.addresslinetwo);
    //     formData.append("mobileno", input.mobileno);
    //     formData.append("country", input.country);

    //     try {
    //         const res = await axios.post(
    //             "http://localhost:5000/customers",
    //             formData,
    //             {
    //                 headers: { "Content-Type": "multipart/form-data" },
    //             }
    //         );

    //         console.log(formData);
    //         console.log(res.data);
    //     } catch (err) {
    //         console.log(err.message);
    //     }

    //     // const res = fetch("http://localhost:5000/customers", {
    //     //     method: "POST",
    //     //     body: formData,
    //     // })
    //     //     .then((res) => res.json())
    //     //     .then((result) => console.log(result));

    //     // console.log(res);
    // };

    return (
        <>
            <HeaderMain>
                <ReactTyped
                    style={{ fontSize: "2.5rem", color: "orange" }}
                    strings={["YOUR GYM MEMBERSHIP"]}
                    typeSpeed={120}
                />
            </HeaderMain>

            {message ? <Message msg={message} /> : null}
            <Progress percentage={uploadPercentage} />

            <section className="container">
                <form className="split form" onSubmit={onSubmit}>
                    <div>
                        <div className="form__div">
                            <input
                                type="text"
                                className="form__input"
                                placeholder=" "
                                onBlur={handleBlur}
                                ref={register({ required: true })}
                                name="firstname"
                            />
                            <label className="form__label">First Name</label>
                        </div>

                        <div className="form__div">
                            <input
                                type="email"
                                className="form__input"
                                placeholder=" "
                                onBlur={handleBlur}
                                ref={register({ required: true })}
                                name="email"
                            />
                            <label className="form__label">Email</label>
                        </div>

                        <div className="form__div">
                            <input
                                type="text"
                                className="form__input"
                                placeholder=" "
                                onBlur={handleBlur}
                                ref={register({ required: true })}
                                name="addresslineone"
                            />
                            <label className="form__label">
                                Address line 1
                            </label>
                        </div>

                        <div className="form__div">
                            <input
                                type="number"
                                className="form__input"
                                placeholder=" "
                                onBlur={handleBlur}
                                ref={register({ required: true })}
                                name="postcode"
                            />
                            <label className="form__label">Postcode</label>
                        </div>

                        <div className="form__div">
                            <input
                                type="text"
                                className="form__input"
                                placeholder=" "
                                onBlur={handleBlur}
                                ref={register({ required: true })}
                                name="city"
                            />
                            <label className="form__label">City</label>
                        </div>
                    </div>

                    <div>
                        <div className="form__div">
                            <input
                                type="text"
                                className="form__input"
                                placeholder=" "
                                onBlur={handleBlur}
                                ref={register({ required: true })}
                                name="lastname"
                            />
                            <label className="form__label">Last Name</label>
                        </div>

                        <div className="form__div">
                            <input
                                type="text"
                                className="form__input"
                                placeholder=" "
                                onBlur={handleBlur}
                                ref={register({ required: true })}
                                name="gender"
                            />
                            <label className="form__label">Gender</label>
                        </div>

                        <div className="form__div">
                            <input
                                type="text"
                                className="form__input"
                                placeholder=" "
                                onBlur={handleBlur}
                                ref={register({ required: true })}
                                name="addresslinetwo"
                            />
                            <label className="form__label">
                                Address line 2
                            </label>
                        </div>

                        <div className="form__div">
                            <input
                                type="number"
                                className="form__input"
                                placeholder=" "
                                onBlur={handleBlur}
                                ref={register({ required: true })}
                                name="mobileno"
                            />
                            <label className="form__label">Mobile No</label>
                        </div>

                        <div className="form__div">
                            <input
                                type="text"
                                className="form__input"
                                placeholder=" "
                                onBlur={handleBlur}
                                ref={register({ required: true })}
                                name="country"
                            />
                            <label className="form__label">Country</label>
                        </div>

                        <button type="submit">Submit</button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Registration;
