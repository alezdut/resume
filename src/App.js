import './App.css';
import { useEffect, useState } from "react"
import Profile from './components/profile/profile';
import Resume from "./components/Resume/Resume"
import NavBar from "./components/navBar/Navbar"
import Head from "./components/head/Head"
import MainCard from "./components/mainCard/MainCard";
import RightPanel from './components/rightpanel/RightPanel';
import Data from "./components/Resume/Data";
import About from './components/Resume/About';


var arr = [{
  nombre: "My mom",
  sub: "recommend this",
  text: `Hello! welcome to my Portfolio, here you can see some of my work.`,
  subtext: `THIS IS NOT LINKEDIN! do not get confused! i build this page from scratch in React, the styles are mostly in CSS but i also use Material UI.`,
  saludo: `If you are interested you can see the code in my github page "https://github.com/alezdut/" along with the code of my other projects. Thank you for your visit!`,
  reactions: "11·5 comments"
}, {
  nombre: "Marcos",
  sub: "is interested in this",
  text: `I did this project as a challenge for a platform, it is an application to keep track of personal expenses,
  allows the user to register an account and store both incoming and outgoing transactions, as well as a balance. It also allows filtering
  operations by categories. They were used
  the following technologies: React, PostgreSQL, Sequelize, Material UI, NodeJS, and ExpressJS.`,
  subtext: "A very entertaining project, completed in just 48 hours.",
  saludo: "If you want to see the code you can enter the link",
  img: "https://raw.githubusercontent.com/alezdut/finance-app/master/images/2.jpg",
  link: "https://github.com/alezdut/finance-app",
  reactions: "10·8 comments"
}, {
  nombre: "Eren",
  sub: "is interested in this",
  text: `We carried out this e-learning platform together with my colleagues as a final project, they were used the following technologies: React, Redux, MongoDB, mongoose, Material UI, NodeJS and ExpressJS.`,
  subtext: "It was really a challenging project given the short time (20 days) but we felt satisfied with the result, besides that, it allowed us to consolidate our knowledge.",
  saludo: "If you are interested in knowing more you can follow the link to see the complete project.",
  img: "https://raw.githubusercontent.com/alezdut/HenryApp/master/Readme_images/module.jpg",
  link: "https://github.com/alezdut/HenryApp",
  reactions: "5·2 comments"
}, {
  nombre: "Jeff",
  sub: "Liked this",
  text: `We did this e-commerce together with my colleagues as part of the Henry Labs stage.`,
  subtext: "It was a great challenge to apply the knowledge acquired during the bootcamp in a real project, we used React, Redux, PostgreSQL, NodeJS and ExpressJS",
  saludo: "If you are interested in knowing more you can follow the link to see the complete project.",
  img: "https://raw.githubusercontent.com/alezdut/Nasdrovia/master/Readme_images/home.png",
  link: "https://github.com/alezdut/Nasdrovia",
  reactions: "10·20 comments"
}, {
  nombre: "Ale",
  sub: "loves this",
  text: `After starting this year full of doubts, having to close my computer store, this opportunity appeared on my way and I decided to take advantage of it, today I am very happy to have completed the bootcamp, to have new knowledge and friends, and to feel ready to face one new stage of my life.`,
  img: "https://media-exp1.licdn.com/dms/image/C4E22AQHb1WTVRchF5w/feedshare-shrink_800/0/1606856614811?e=1614816000&v=beta&t=bHKLuCB8BZJpWWliUaPjMLUSMk4skqXRLPztdiVLrQg",
  reactions: "20·2 comments"
}, {
  nombre: "Ale",
  sub: "Likes",
  text: `If you got here, I'll tell you a little more about myself. I am 28 years old, I like to cook, I have a dachshund and a cat (photo), I love to swim and ride my bike. Since I was a child I have been passionate about technology, and I found in web development a very powerful tool to achieve my ideas.`,
  subtext: `This year I decided to take a professional turn, I had a local computing store that I had to close due to the pandemic,
  and I decided it was a good time to train and go out with better tools to a world that I think will never be the same again.
  There Henry appears who gives me the opportunity to learn something that I am passionate about and remotely, and here I am later
  a few hard months working with new technologies, with new friends and I am sure it was a good choice.`,
  saludo: "thanks for visiting my profile!",
  img: "https://i.imgur.com/spxAV9l.jpeg",
  reactions: "10·2 comments"
}]

function App() {
  const [cv, setCv] = useState(false);

  useEffect(() => {

  }, [cv])

  const handleCv = () => {
    setCv(true)
  }
  const handleClose = () => {
    setCv(false)
  }

  return (
    <div className="App">
      <NavBar yo={handleCv} close={handleClose} />
      {!cv ? <div className="main__app">
        <div className="container__app">
          <Profile yo={handleCv} />
          <div className="container2__app">
            <Head />
            {arr.map(e => {
              return <MainCard props={e} />
            })}

          </div>
          <RightPanel />
        </div>
      </div> : <div className="main__app">
          <div className="container__app"><div className="container2__app"><Resume /><About /><Data /></div><RightPanel /></div></div>}
    </div>
  );
}

export default App;
