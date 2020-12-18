import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import perfil from "../../resources/images/TPRS7H4PN-U015Z6CG1AS-ea48690b9144-512.png"
import logo from "../../resources/images/logo.jpg"
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import SmsIcon from '@material-ui/icons/Sms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import "./NavBar.css";

const useStyles = makeStyles((theme) => ({
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
    medium: {
        width: theme.spacing(6),
        height: theme.spacing(6),
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));


export default function NavBar(props) {
    const classes = useStyles();

    return (
        <div className="main__nav">
            <div className="box__nav">
                <div className="logo__nav" onClick={props.close}>
                    <img className="img__nav" src={logo}></img>
                </div>
                <div className="search__nav">
                    <div className="iconsearch__nav">
                        <SearchIcon />
                    </div>
                    <div className="form__nav">
                        <form className="form__in__nav">
                            <input className="input__nav"></input>
                        </form>
                    </div>
                </div>
                <div className="icons__nav">
                    <div className="inicio__nav" onClick={props.close}>
                        <HomeIcon />
                        <a>Home</a>
                    </div>
                    <div className="inicio__red">
                        <PeopleIcon />
                        <a>My network</a>
                    </div>
                    <div className="inicio__empleos" onClick={props.yo}>
                        <WorkIcon />
                        <a>Jobs</a>
                    </div>
                    <div className="inicio__mensajes">
                        <SmsIcon />
                        <a>Messaging</a>
                    </div>
                    <div className="inicio__notificaciones">
                        <NotificationsIcon />
                        <a>Notifications</a>
                    </div>
                    <div className="inicio__yo" onClick={props.yo}>
                        <Avatar alt="Alejandro Zdut" src={perfil} className={classes.small} />
                        <a>Me</a>
                    </div>
                </div>
                <div className="avatar__nav">
                    <Avatar alt="Alejandro Zdut" src={perfil} className={classes.medium} />
                </div>
            </div>

        </div>
    )
}