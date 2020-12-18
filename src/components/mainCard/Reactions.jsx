import React from "react";
import "./Reactions.css";
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(1.5),
        height: theme.spacing(1.5),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

export default function Reactions(props) {
    const classes = useStyles();

    return (
        <div className="main__reactions">
            <div className="fav__reactions">
                <FavoriteIcon className={classes.small} />
            </div>
            <div className="like__reactions">
                <ThumbUpIcon className={classes.small} />
            </div>
            <div className="smile__reactions">
                <EmojiObjectsIcon className={classes.small} />
            </div>
            <div className="text__reactions">
                <p>
                    {props.reactions}
                </p>
            </div>
        </div>
    )
}