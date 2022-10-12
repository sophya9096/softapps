import React, { useState } from "react";
import { Button, Dialog, IconButton } from "@material-ui/core";
import classes from "./SubcriptionForm.module.css";

const SubscriptionForm = () => {
    const [open, setOpen] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await (
            await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/newsletter`, {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: process.env.REACT_APP_AUTH_TOKEN },
                body: JSON.stringify({ firstName, lastName, email }),
            })
        ).json();
        setOpen(false);
    };

    return (
        <Dialog open={open} fullWidth={false} maxWidth="sm" onClose={() => setOpen(false)}>
            <div className={classes.formContainer}>
                <img
                    src="https://media-exp1.licdn.com/dms/image/C4D0BAQHlKUzfdptPtA/company-logo_200_200/0/1617130918571?e=2159024400&v=beta&t=sgIKsJzE1Tb_gAu0_1WUtrQh4eqNF08ZPURFTM2qmUo"
                    alt=""
                />

                <IconButton className={classes.cancelBtn} onClick={() => setOpen(false)}>
                    X
                </IconButton>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <div className={classes.formInput}>
                        <label>First Name</label>
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                            type="text"
                            placeholder="Enter Your First Name"
                        />
                    </div>
                    <div className={classes.formInput}>
                        <label>Last Name</label>
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                            type="text"
                            placeholder="Enter Your Last Name"
                        />
                    </div>
                    <div className={classes.formInput}>
                        <label>Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                            placeholder="Enter Your Email"
                        />
                    </div>
                    <Button type="submit">Subscribe</Button>
                </form>
            </div>
        </Dialog>
    );
};

export default SubscriptionForm;
