import React from "react";
import "./Profile.css";
import { makeStyles } from '@material-ui/core/styles';
import perfil from "../../resources/images/TPRS7H4PN-U015Z6CG1AS-ea48690b9144-512.png";
import PublicIcon from '@material-ui/icons/Public';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(2),
        height: theme.spacing(2),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export default function Profile() {
    const classes = useStyles();

    return (
        <div className="main2__profile">
            <Avatar alt="Alejandro Zdut" src={perfil} className={classes.large} />
            <div className="text__profile">
                <p className="bold__profile">Alejandro Eloy Zdut</p>
                <p className="sub__profile">Fullstack developer | React |
Javascript | SQl | MongoDB | HTML | CSS</p>
                <div className="icon__profile">
                    <PublicIcon className={classes.small} />
                    <p className="pub__profile">Anyone</p>
                </div>
            </div>
        </div>
    )
}