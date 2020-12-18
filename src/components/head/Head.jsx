import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import perfil from "../../resources/images/TPRS7H4PN-U015Z6CG1AS-ea48690b9144-512.png"
import PanoramaIcon from '@material-ui/icons/Panorama';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventIcon from '@material-ui/icons/Event';
import DescriptionIcon from '@material-ui/icons/Description';
import CreateIcon from '@material-ui/icons/Create';
import PublicIcon from '@material-ui/icons/Public';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import "./Head.css";
import obj from "./key.js";
require("dotenv").config();

var { api_key, domain } = obj;
console.log(api_key);
console.log(domain);
console.log(process.env)
const mailgun = require("mailgun-js");
const mg = mailgun({ apiKey: api_key, domain: domain });
console.log(mg)


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: "600px",
        borderRadius: "15px",
        border: '2px solid #e4e4e4',
    },
    paper: {
        backgroundColor: "white",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));


export default function Head() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [message, setMesage] = useState('');

    const data = {
        from: 'CONTACTO PORTFOLIO <alejandrozdut@gmail.com>',
        to: 'ale77rock@gmail.com',
        subject: 'reclutador',
        text: message
    };

    const handleClick = () => {
        mg.messages().send(data, function (error, body) {
            console.log(body)
        });
        handleClose();
    }

    const handleChange = (e) => {
        e.preventDefault();
        setMesage(e.target.value);
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="main__head">
            <div className="open__head" onClick={handleOpen}>
                <div className="iconx__head">
                    <CreateIcon />
                </div>
                <div className="textx__head">
                    <p>Write to Alejandro</p>
                </div>
            </div>
            <div className="icons__head">
                <div className="foto__head">
                    <div className="icon1__head">
                        <PanoramaIcon />
                    </div>
                    <div className="text__head">
                        <p>Photo</p>
                    </div>
                </div>
                <div className="foto__head">
                    <div className="icon2__head">
                        <YouTubeIcon />
                    </div>
                    <div className="text__head">
                        <p>Video</p>
                    </div>
                </div>
                <div className="foto__head">
                    <div className="icon3__head">
                        <EventIcon />
                    </div>
                    <div className="text__head">
                        <p>Event</p>
                    </div>
                </div>
                <div className="foto__head">
                    <div className="icon4__head">
                        <DescriptionIcon />
                    </div>
                    <div className="text__head">
                        <p>Write Article</p>
                    </div>
                </div>
            </div>
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <div className="cuerpo__Head">
                                <div className="title__head">
                                    <p>Send a message to Alejandro</p>
                                </div>
                                <Divider />
                                <div className="body__head">
                                    <div className="avatar__head">
                                        <Avatar alt="Alejandro Zdut" src={perfil} className={classes.large} />
                                    </div>
                                    <div className="texto__m__head">
                                        <p>Alejandro Eloy Zdut</p>
                                        <div className="public__head">
                                            <div className="icono__modal__head">
                                                <PublicIcon />
                                            </div>
                                            <p className="cualquiera__head">Anyone</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="tit__head">What do you want to talk about?</p>
                                    <form onChange={handleChange}>
                                        <TextField
                                            id="filled-full-width"
                                            style={{ margin: 8 }}
                                            placeholder="Enviar mensaje"
                                            helperText="If the message is important please send it directly from your email"
                                            fullWidth
                                            margin="normal"
                                            InputLabelProps={{
                                                shrink: false,
                                            }}
                                            variant="outlined"
                                        />
                                    </form>

                                </div>
                                <div className="button__head">
                                    <Button variant="contained" color="primary" onClick={handleClick}>
                                        Send
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </div>

        </div>
    )
}