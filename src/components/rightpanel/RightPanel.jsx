import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import github from "../../resources/images/github.png";
import linkedin from "../../resources/images/linkedin.jfif";
import hackerrank from "../../resources/images/hackerrank.jfif";
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import "./RightPanel.css";


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
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export default function RightPanel() {
    const classes = useStyles();

    return (
        <div className="main__profile">
            <div className="titu__profile">
                <p>Folow me in</p>
            </div>
            <div className="seguir__rightpanel">
                <Avatar alt="github" src={github} className={classes.large} />
                <div className="text__rightpanel">
                    <div className="title__rightpanel">
                        <p>GitHub</p>
                    </div>
                    <div className="sub__rightpanel">
                        <p>Version Control Systems</p>
                    </div>
                    <div className="button__rightpanel">
                        <AddIcon />
                        <a href="https://github.com/alezdut/" style={{ textDecoration: 'none', color: "GrayText" }}>Follow</a>
                    </div>
                </div>
            </div>
            <div className="seguir__rightpanel">
                <Avatar alt="linkedin" src={linkedin} className={classes.large} />
                <div className="text__rightpanel">
                    <div className="title__rightpanel">
                        <p>Linkedin</p>
                    </div>
                    <div className="sub__rightpanel">
                        <p>Internet Sunnyvale, CA</p>
                    </div>
                    <div className="button__rightpanel">
                        <AddIcon />
                        <a href="https://www.linkedin.com/in/alezdut/" style={{ textDecoration: 'none', color: "GrayText" }}>Follow</a>
                    </div>
                </div>
            </div>
            <div className="seguir__rightpanel">
                <Avatar alt="hackerrank" src={hackerrank} className={classes.large} />
                <div className="text__rightpanel">
                    <div className="title__rightpanel">
                        <p>HackerRank</p>
                    </div>
                    <div className="sub__rightpanel">
                        <p>Accelerate the world's innovation</p>
                    </div>
                    <div className="button__rightpanel">
                        <AddIcon />
                        <a href="https://www.hackerrank.com/alejandrozdut" style={{ textDecoration: 'none', color: "GrayText" }}>Follow</a>
                    </div>
                </div>
            </div>
        </div>)
}