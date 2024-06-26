import "./stories.scss";
import React, { useContext } from 'react'
import Peter from "../../assets/peter.png";
import { AuthContext } from "../../context/authContext";

const Stories = () => {

const {currentUser} = useContext(AuthContext);
  //Temporary
  const stories =[
    {
        id : 1,
        name: "John Doe",
        img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
        id : 2,
        name: "John Doe",
        img : Peter
    },
    {
        id : 3,
        name: "John Doe",
        img : Peter
    },
    {
        id : 4,
        name: "John Doe",
        img : Peter
    },
  ];
  return (
    <div className = "stories">
        <div className="story">
                <img src = {Peter} alt=""/>
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
        {stories.map(story =>(
            <div className="story" key={story.id}>
                <img src = {story.img} alt=""/>
                <span>{story.name}</span>
            </div>
            
        ))}
    </div>
  )
}

export default Stories