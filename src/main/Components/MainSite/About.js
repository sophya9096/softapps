import React, { useEffect, useState } from "react";
import classes from "./About.module.css";
import Abouut from "../../../shared/assets/Images/About.png";
import { Button, CircularProgress, Dialog } from "@material-ui/core";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from "@material-ui/pickers";
import Clock from "../../../shared/components/UIElements/Clock";

let minDate;

const About = (props) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [openBook, setOpenBook] = useState(false);
    const { isLoading, sendRequest } = useHttpClient();
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [subject, setSubject] = useState(undefined);
    const [message, setMessage] = useState(undefined);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [booked, setBooked] = useState();
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [subjectError, setSubjectError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    // const [timeError, setTimeErorr] = useState(false);
    // const [dateError, setDateError] = useState(false);

    useEffect(() => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() > 8 ? "-" + parseInt(date.getMonth() + 1) : "0" + parseInt(date.getMonth() + 1);
        // const day = parseInt(date.getDate() + 1);
        const day = parseInt(date.getDate());
        const hours = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
        const min = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
        const sec = date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();

        let defaultTime = `${year}-${month}-${day} ${hours}:${min}:${sec}`;
        minDate = `${year}-${month}-${day}`;

        setDate(minDate);
        setTime(new Date(defaultTime));
    }, []);

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

        let formatedDate;
        if (date.includes("/")) {
            let year = date.toString().split("/")[2];
            let month = date.toString().split("/")[0];
            let day = date.toString().split("/")[1];
            formatedDate = `${year}-${month}-${day}`;
        } else {
            formatedDate = date;
        }

        const form = {
            booking_name: name,
            booking_email: email,
            booking_subject: subject,
            booking_message: message,
            booking_date: formatedDate,
            booking_time: time.toString().split(" ")[4],
        };

        try {
            const responseData = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/api/bookings/`,
                "POST",
                {
                    "Content-Type": "application/json",
                    Authorization: `${process.env.REACT_APP_AUTH_TOKEN}`,
                },
                JSON.stringify(form),
            );
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            setOpenDialog(false);
            setBooked(responseData);
            setOpenBook(true);

            form.address = `${process.env.REACT_APP_BACKEND_URL}/api/bookings/`;

            if (responseData) {
                setSubmitted(true);
                const response = await fetch(`${process.env.REACT_APP_EMAIL_URL}/softappsMeeting`, {
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
            }
        } catch (error) {
            console.log(error);
        }
    };

    const formDialog = (
        <Dialog open={openDialog} fullWidth={true} maxWidth="sm" onClose={() => setOpenDialog(false)}>
            <div className={classes.Form}>
                <h1> Setup Meeting </h1>
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
                <div className={classes.formDate}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={date}
                            minDate={minDate}
                            onChange={(e, value) => setDate(value)}
                            KeyboardButtonProps={{
                                "aria-label": "change date",
                            }}
                        />
                        <KeyboardTimePicker
                            style={{ flex: 1, maxWidth: 300 }}
                            margin="normal"
                            id="time-picker"
                            label="Time picker"
                            value={time}
                            onChange={(e) => setTime(e)}
                            KeyboardButtonProps={{
                                "aria-label": "change time",
                            }}
                        />
                    </MuiPickersUtilsProvider>

                    {/* <input type="date" value={date} min={defaultDate} onChange={(e) => setDate(e.target.value)} />
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} /> */}
                </div>
                <div className={classes.FormElement}>
                    <textarea placeholder="Type Your Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                    {messageError && <p>Please, enter a valid message</p>}
                </div>
                <div className={classes.progressBar}>{isLoading && <CircularProgress color="inherit" />}</div>
                <a disabled={!time || !date} onClick={submitContactFormHandler}>
                    Submit
                </a>
            </div>
        </Dialog>
    );

    const successDialog = (
        <Dialog open={openBook} fullWidth={true} maxWidth="xs" onClose={() => setOpenBook(false)}>
            <div className={classes.bookingDialog}>
                {/* <h1>Meeting Successfully Booked</h1> */}
                <h1>Greetings {booked?.booking_name}!</h1>
                <p>
                    Your Meeting has been booked with the Softapps Management.
                    <br />
                    <p>
                        Date: <span> {booked?.booking_date}</span>
                    </p>
                    <p>
                        time: <span> {booked?.booking_time}</span>
                    </p>
                </p>
                <Button variant="contained" onClick={() => setOpenBook(false)}>
                    Got it
                </Button>
            </div>
        </Dialog>
    );

    return (
        <div className={classes.Home}>
            <div className={classes.HomeWidth}>
                <div className={classes.Left}>
                    <div className={classes.LeftDiv}>
                        <h1>ABOUT US</h1>

                        <div style={{ display: "flex", width: "100%", marginLeft: "-25px" }}>
                            <Clock small width={125} height={125} title={"Canada"} canada />
                            <Clock small width={125} height={125} title={"Pakistan"} pakistan />
                            <Clock small width={125} height={125} title={"USA"} usa />
                        </div>

                        {/*
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                width: "200px",
                                zIndex: 9999,
                                pointerEvents: "none",
                                margin: "0 auto 0 200px",
                            }}
                            >
                            
                             <iframe
                                title="unique"
                                style={{ display: "inline-block", margin: "10px 7px", padding: 0 }}
                                src="https://free.timeanddate.com/clock/i7vh9cvk/n757/szw110/szh110/hbw0/hfc000/cf100/hgr0/fav0/fiv0/mqcfff/mql15/mqw4/mqd94/mhcfff/mhl15/mhw4/mhd94/mmv0/hhcbbb/hmcddd/hsceee"
                                frameborder="0"
                                width="110"
                                height="110"
                            ></iframe>
                            <iframe
                                title="unique"
                                style={{ display: "inline-block", margin: "10px 7px", padding: 0 }}
                                src="https://free.timeanddate.com/clock/i7vh9ja1/n165/szw110/szh110/hbw0/hfc000/cf100/hgr0/fav0/fiv0/mqcfff/mql15/mqw4/mqd94/mhcfff/mhl15/mhw4/mhd94/mmv0/hhcbbb/hmcddd/hsceee"
                                frameborder="0"
                                width="110"
                                height="110"
                            ></iframe>

                            <iframe
                                title="unique"
                                style={{ display: "inline-block", margin: "10px 7px", padding: 0 }}
                                src="https://free.timeanddate.com/clock/i7vh9ja1/n104/szw110/szh110/hbw0/hfc000/cf100/hgr0/fav0/fiv0/mqcfff/mql15/mqw4/mqd94/mhcfff/mhl15/mhw4/mhd94/mmv0/hhcbbb/hmcddd/hsceee"
                                frameborder="0"
                                width="110"
                                height="110"
                            ></iframe> 
                        </div>
                            */}
                        <span>
                            SoftApps.io is a Canada-based sofware development company, with branches extended to the US and Pakistan. We are
                            a complete cycle application development company.
                        </span>
                        <div className={classes.aboutBtns}>
                            <a href="#about" onClick={() => props.exploreFunctionHandler("about")}>
                                Explore
                            </a>
                            <a style={booked ? { cursor: "auto" } : null} onClick={() => !booked && setOpenDialog(true)}>
                                {booked ? "Booked" : "Booking"}
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.Right}>
                    <img src={Abouut} alt="" />
                </div>
            </div>
            {formDialog}
            {successDialog}
        </div>
    );
};

export default About;
