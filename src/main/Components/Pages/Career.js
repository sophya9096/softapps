import React, { useState } from "react";
// import emailjs from "emailjs-com";
import classes from "./Career.module.css";

import cvLogo from "../../../shared/assets/Images/cvLogo.png";
import DownArrow from "../../../shared/assets/Images/DownArrow.png";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "../../../shared/assets/Images/Logo.png.svg";

const Career = (props) => {
    const { header } = props;

    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [submitted, setSubmitted] = useState(false);
    const [show, setShow] = useState(false);

    const [selected, setSelected] = useState(undefined);
    const [selectedError, setSelectedError] = useState(false);

    const [firstName, setFirstName] = useState(undefined);
    const [lastName, setLastName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [phone, setPhone] = useState(undefined);
    const [employment, setEmployment] = useState(undefined);
    const [experience, setExperience] = useState(undefined);
    const [letter, setLetter] = useState(undefined);
    const [file, setFile] = useState(undefined);
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [employmentError, setEmploymentError] = useState(false);
    const [experienceError, setExperienceError] = useState(false);
    const [letterError, setLetterError] = useState(false);
    const [fileError, setFileError] = useState(false);

    const submitJobFormHandler = async () => {
        let errors = false;
        if (!selected) {
            errors = true;
            setSelectedError(true);
        } else setSelectedError(false);
        if (!firstName || (firstName && firstName.length < 1)) {
            errors = true;
            setFirstNameError(true);
        } else setFirstNameError(false);
        if (!lastName || (lastName && lastName.length < 1)) {
            errors = true;
            setLastNameError(true);
        } else setLastNameError(false);
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            errors = true;
            setEmailError(true);
        } else setEmailError(false);
        if (!phone || (phone && phone.length < 11)) {
            errors = true;
            setPhoneError(true);
        } else setPhoneError(false);
        if (!employment || (employment && employment.length < 1)) {
            errors = true;
            setEmploymentError(true);
        } else setEmploymentError(false);
        if (!experience || (experience && experience.length < 1)) {
            errors = true;
            setExperienceError(true);
        } else setExperienceError(false);
        if (!letter || (letter && letter.length < 49)) {
            errors = true;
            setLetterError(true);
        } else setLetterError(false);
        if (!file) {
            errors = true;
            setFileError(true);
        } else setFileError(false);
        if (errors) return;
        const formData = new FormData();
        formData.append("selected", selected);
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("employment", employment);
        formData.append("experience", experience);
        formData.append("letter", letter);
        formData.append("file", file);

        for (var value of formData.entries()) {
            console.log("value", value);
        }

        try {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/api/careers/`,
                "POST",
                {
                    Authorization: `${process.env.REACT_APP_AUTH_TOKEN}`,
                },
                formData,
            );
            const form = {
                selected,
                name: firstName,
                lastName,
                email,
                phone,
                employment,
                experience,
                message: letter,
                address: `${process.env.REACT_APP_BACKEND_URL}/api/careers/`,
                subject: "APPLY ONLINE",
            };
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

    const pushHeight = () => {
        setShow(!show);
    };

    let content0 = (
        <div id="home" className={classes.Header}>
            <div className={classes.HeaderContainer}>
                <div className={classes.HeaderContainerLogo}>
                    <Link to="/">
                        <img alt="" src={Logo} />
                    </Link>
                </div>
                <div onClick={pushHeight} className={classes.HeaderBurger}>
                    <span className={[show && classes.topDiv]}></span>
                    <span className={[show && classes.middleDiv]}></span>
                    <span className={[show && classes.bottomDiv]}> </span>
                </div>
            </div>
            <div className={[classes.HeaderMenu, show && classes.height].join(" ")}>
                <p onClick={pushHeight}>
                    <Link to="/#home" style={{ display: show ? "block" : "none" }}>
                        Home
                    </Link>
                </p>
                <p onClick={pushHeight}>
                    <Link to="/#services" style={{ display: show ? "block" : "none" }}>
                        Services
                    </Link>
                </p>
                <p onClick={pushHeight}>
                    <Link to="/#portfolio" style={{ display: show ? "block" : "none" }}>
                        Portfolio
                    </Link>
                </p>
                <p onClick={pushHeight}>
                    <a style={{ display: show ? "block" : "none" }} href="#career">
                        Career
                    </a>
                </p>
                <p onClick={pushHeight}>
                    <Link to="/#about" style={{ display: show ? "block" : "none" }}>
                        About Us
                    </Link>
                </p>
                <p onClick={pushHeight}>
                    <Link to="/#contact" style={{ display: show ? "block" : "none" }}>
                        Contact Us
                    </Link>
                </p>
            </div>
        </div>
    );

    let content;

    content = (
        <div className={classes.Form}>
            <div className={classes.FormContainer}>
                <div className={classes.Left}>
                    <div className={classes.FormElement}>
                        <input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        {firstNameError && <p>Please, enter a valid first name</p>}
                    </div>
                    <div className={classes.FormElement}>
                        <input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        {lastNameError && <p>Please, enter a valid last name</p>}
                    </div>
                    <div className={classes.FormElement}>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {emailError && <p>Please, enter a valid email</p>}
                    </div>
                    <div className={classes.FormElement}>
                        <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D[^.]/g, ""))} />
                        {phoneError && <p>Please, enter a valid phone number</p>}
                    </div>
                    <div className={classes.FormElement}>
                        <input placeholder="Current Employment" value={employment} onChange={(e) => setEmployment(e.target.value)} />
                        {employmentError && <p>Please, enter a employment status</p>}
                    </div>
                    <div className={classes.FormElement}>
                        <input placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} />
                        {experienceError && <p>Please, enter a valid experience</p>}
                    </div>
                </div>
                <div className={classes.Right}>
                    <div className={classes.FormElement}>
                        <textarea rows={6} placeholder="Cover Letter" value={letter} onChange={(e) => setLetter(e.target.value)} />
                        {letterError && <p>Min. Character:50</p>}
                    </div>
                    <input
                        // accept="application/pdf, application/doc ,application/docx ,application/xls, application/xlsx,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        accept="application/*"
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        style={{ display: "none" }}
                        id="file"
                        placeholder="Experience"
                    />

                    <div className={classes.FormElement}>
                        <label className={classes.CVFormElement} htmlFor="file">
                            <div>
                                <img src={cvLogo} alt="" />
                            </div>
                            {file ? <span>{file.name}</span> : <span>Upload Your CV</span>}
                        </label>
                        {fileError && <p>Please, attach a valid file</p>}
                    </div>
                </div>
            </div>
            <div className={classes.progressBar}>{isLoading && <CircularProgress color="inherit" />}</div>

            <a onClick={() => submitJobFormHandler()}>Submit</a>
        </div>
    );

    if (submitted) {
        content = (
            <div>
                <p>Thank you for applying, we will get back to you shortly.</p>
                {/* <lottie-player
                    src="https://assets1.lottiefiles.com/private_files/lf30_pzulxwyk.json"
                    background="transparent"
                    speed="1"
                    style="width: 300px; height: 300px;"
                    autoplay
                ></lottie-player> */}
            </div>
        );
    }

    const applicants = [
        "Front-End Dev (React.js)",
        "Back-End Dev (Node.js)",
        "Full Stack Dev (MERN/MEAN)",
        "Python-Django Developer",
        "Mobile App Developer (React-Native)",
        "Mobile App Developer (Flutter)",
        "Wordpress Dev",
        "Laravel-PHP Dev",
        "Graphic Designer",
        "UI/UX Designer",
        "Business Development Executive",
        "SEO Executive",
        "Digital Marketing Expert",
    ];

    return (
        <>
            {header && content0}
            <div id="career" style={!header ? { marginTop: "66px" } : null} className={classes.Career}>
                <h2>APPLY ONLINE</h2>
                {error && <p>{error}</p>}
                {!submitted && (
                    <nav className={classes.menu}>
                        <ol>
                            <li className={classes.menuItem}>
                                <div className={classes.DropDown_Main}>
                                    <p>{!selected ? "Select Position" : selected}</p>
                                    <div>
                                        <img alt="" src={DownArrow} />
                                    </div>
                                </div>
                                <ol className={classes.subMenu}>
                                    {applicants.map((applicant, index) => (
                                        <li key={index} onClick={() => setSelected(applicant)} className={classes.menuItem}>
                                            <span>{applicant}</span>
                                        </li>
                                    ))}
                                </ol>
                            </li>
                        </ol>
                        {selectedError && <label>Please select job title you are applying for</label>}
                    </nav>
                )}
                {content}
            </div>
        </>
    );
};

export default Career;
