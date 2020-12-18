import React from "react";
import Divider from '@material-ui/core/Divider';
import "./MainCard.css"
import Profile from "./Profile";
import Reactions from "./Reactions";
import Buttons from "./Buttons";
import Typography from '@material-ui/core/Typography';

export default function MainCard(props) {

    var { nombre, sub, text, subtext, saludo, img, link, reactions } = props.props;
    return (
        <div className="main__mainCard">
            <div className="Head__maincard">
                <p className="head_title__maincard">{nombre}</p><p className="sub__head">{sub}</p>
            </div>
            <Divider />
            <Profile className="profile__maincard" />
            <div className="content__maincard">
                {text ? <Typography>{text}</Typography> : <p></p>}
                <br />
                {subtext ? <Typography>{subtext}</Typography> : <p></p>}
                {subtext ? <br /> : <p></p>}
                {img ? <a href={link}><img className="imagen__maincard" src={img}></img></a> : <p></p>}
                {img ? <br /> : <p></p>}
                {link ? <a href={link}>{link}</a> : <p></p>}
                {link ? <br /> : <p></p>}
                {saludo ? <Typography>{saludo}</Typography> : <p></p>}
                <br />

            </div>
            <Reactions reactions={reactions} />
            <Divider />
            <Buttons />
        </div>
    )
}