import React, { Component } from "react";
import image from "../Components/unnamed.jpg";

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            fullName: "Mahmoud naili",
            bio: "Meow meow",
            imgSrc: image,
            profession: "meme lord",
        };
    }
    componentDidMount() {
        console.log("this message is from component did mount");
        setInterval(componentDidMount(), 3000);
    }
    render() {
        return (
            <div>
                <h1 className="Full">{this.state.fullName}</h1>
                <h1 className="bio">{this.state.bio}</h1>
                <h1 className="prof">{this.state.profession}</h1>
                <img src={this.state.imgSrc} alt="photo" />
            </div>
        );
    }
}
