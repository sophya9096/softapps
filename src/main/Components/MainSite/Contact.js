import React, { useState } from "react";
import classes from "./Contact.module.css";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import { CircularProgress } from "@material-ui/core";
// import emailjs from "emailjs-com";
import Clock from "../../../shared/components/UIElements/Clock";

const Contact = (props) => {
    const { isLoading, error, sendRequest } = useHttpClient();
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [subject, setSubject] = useState(undefined);
    const [message, setMessage] = useState(undefined);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const submitContactFormHandler = async () => {
        let errors = false;
        if (!name || (name && name.length < 1)) {
            errors = true;
            setNameError(true);
        } else {
            setNameError(false);
        }
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            errors = true;
            setEmailError(true);
        } else setEmailError(false);
        if (!subject || (subject && subject.length < 5)) {
            errors = true;
            setSubjectError(true);
        } else setSubjectError(false);
        if (!message || (message && message.length < 10)) {
            errors = true;
            setMessageError(true);
        } else setMessageError(false);
        if (errors) return;

        const form = { name, email, subject, message };
        try {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/api/contact/`,
                "POST",
                {
                    "Content-Type": "application/json",
                    Authorization: `${process.env.REACT_APP_AUTH_TOKEN}`,
                },
                JSON.stringify(form),
            );

            form.address = `${process.env.REACT_APP_BACKEND_URL}/api/contact/`;

            if (responseData) {
                setSubmitted(true);
                // emailjs
                //     .send(
                //         process.env.REACT_APP_EMAILJS_SERVICE_ID,
                //         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                //         form,
                //         process.env.REACT_APP_EMAILJS_USER_ID,
                //     )
                //     .then(
                //         (result) => {
                //             console.log(result.text);
                //         },
                //         (error) => {
                //             console.log(error.text);
                //         },
                //     );
            }

            const response = await fetch(`${process.env.REACT_APP_EMAIL_URL}/softappsContact`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();
            console.log({ data });
        } catch (error) {}
    };

    let content;

    content = (
        <div className={classes.Form}>
            <div className={classes.FormElement}>
                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                {nameError && <p>Please, enter a valid name</p>}
            </div>
            <div className={classes.FormElement}>
                <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {emailError && <p>Please, enter a valid email</p>}
            </div>
            <div className={classes.FormElement} value={subject} onChange={(e) => setSubject(e.target.value)}>
                <input placeholder="Subject" />
                {subjectError && <p>Please, enter a valid subject</p>}
            </div>
            <div className={classes.FormElement}>
                <textarea placeholder="Type Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                {messageError && <p>Please, enter a valid message</p>}
            </div>
            <div className={classes.progressBar}>{isLoading && <CircularProgress color="inherit" />}</div>
            <a href="#contact" onClick={() => submitContactFormHandler()}>
                Submit
            </a>
        </div>
    );

    if (submitted) {
        content = <p> {error ? error : "Thank you for contacting us, we will get back to you shortly."}</p>;
    }

    return (
        <div className={classes.Home}>
            <div className={classes.HomeWidth}>
                <div className={classes.Left}>
                    <div className={classes.LeftDiv}>
                        <div style={{ display: "flex", width: "100%", marginLeft: "-25px" }}>
                            <Clock small width={110} height={110} title={"Canada"} canada />
                            <Clock small width={110} height={110} title={"Pakistan"} pakistan />
                            <Clock small width={110} height={110} title={"USA"} usa />
                        </div>
                        <h1>
                            Contact <span style={{ color: "black" }}>Us!</span>
                        </h1>

                        {content}
                    </div>
                </div>
                <div className={classes.Right}></div>
            </div>
        </div>
    );
};

export default Contact;
