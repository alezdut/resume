import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import portada from "../../resources/images/portada2.jpeg";
import perfil from "../../resources/images/TPRS7H4PN-U015Z6CG1AS-ea48690b9144-512.png"
import Avatar from '@material-ui/core/Avatar';
import "./Resume.css"

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
    large: {
        width: theme.spacing(18),
        height: theme.spacing(18),
    },
}));

export default function Resume() {
    const classes = useStyles();
    return (
        <div className="main__resume">
            <div className="data__resume">
                <div className="images__resume">
                    <div className="portada__resume">
                        <img className="img__resume" src={portada} />
                    </div>
                    <div className="avatar__resume">
                        <Avatar alt="Alejandro Zdut" src={perfil} className={classes.large} />
                    </div>
                </div>
                <div className="text__resume">
                    <div className="title__resume">
                        <a className="nombre__resume">
                            Alejandro Eloy Zdut
                        </a>
                    </div>
                    <div className="info__resume">
                        <p className="subtitle__resume">
                            Fullstack developer | React |
                            Javascript | SQl | MongoDB | HTML | CSS
                        </p>
                    </div>
                    <div className="info__resume">
                        <p className="subtitle__resume">
                            Cordoba, Argentina.
                        </p>
                    </div>
                    <div className="info__resume">
                        <p className="subtitle__resume">
                            alejandrozdut@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}