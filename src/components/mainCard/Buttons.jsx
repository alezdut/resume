import React from "react";
import "./Buttons.css";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

export default function Buttons() {
    return (
        <div className="main__buttons">
            <div className="dif__buttons">
                <div className="icon__buttons">
                    <ThumbUpIcon />
                </div>
                <div className="text__buttons">
                    <p>Like</p>
                </div>
            </div>
            <div className="dif__buttons">
                <div className="icon__buttons">
                    <ShareIcon />
                </div>
                <div className="text__buttons">
                    <p>Share</p>
                </div>
            </div>
            <div className="dif__buttons">
                <div className="icon__buttons">
                    <ChatIcon />
                </div>
                <div className="text__buttons">
                    <p>Comment</p>
                </div>
            </div>
            <div className="dif__buttons">
                <div className="icon__buttons">
                    <SendIcon />
                </div>
                <div className="text__buttons">
                    <p>Send</p>
                </div>
            </div>
        </div>
    )
}