import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import portada from "../../resources/images/portada2.jpeg";
import perfil from "../../resources/images/TPRS7H4PN-U015Z6CG1AS-ea48690b9144-512.png"
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import "./profile.css";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));

export default function Profile(props) {
    const classes = useStyles();

    return (
        <div className="main__profile">
            <div className="data__profile">
                <div className="images__profile">
                    <div className="portada__profile">
                        <img className="img__profile" src={portada} />
                    </div>
                    <div className="avatar__profile">
                        <Avatar alt="Alejandro Zdut" src={perfil} className={classes.large} />
                    </div>
                </div>
                <div className="text__profile">
                    <div className="title__profile">
                        <a className="nombre__profile">
                            Alejandro Eloy Zdut
                        </a>
                    </div>
                    <div className="info__profile">
                        <p className="subtitle__profile">
                            Fullstack developer | React |<br />
                            Javascript | SQl | MongoDB | HTML | CSS
                        </p>
                    </div>
                </div>
            </div>
            <Divider />
            <div className="links__profile">
                <div className="link__profile">
                    <p onClick={props.yo}>See my resume</p>
                    <a href="https://alezdut.github.io/portfolio/" style={{ textDecoration: 'none', color: "rgb(133, 133, 133)" }}><p>Version en español</p></a>
                </div>
                <div>

                </div>
            </div>
            <Divider />
            <div className="icono__profile">
                {/* <div className="bookmark__profile">
                    <BookmarkIcon />
                </div>
                <div className="contacto__profile">
                    <a>contactar</a>
                </div> */}
                <Accordion>
                    <AccordionSummary
                        expandIcon={<BookmarkIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Contact</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            alejandrozdut@gmail.com

                            linkedin.com/in/alezdut/

                            github.com/alezdut/

                            +543541623065
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div >)
}