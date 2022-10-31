import { Component } from "react";
import './About.css'
class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
        <div>
          <h2>Steven Rejdukowski</h2>
          <ul>
            <li className="links"><a href="https://github.com/Stevenrej">My Github</a></li>
            <li className="links"><a href="https://www.linkedin.com/in/steven-rejdukowski-47b879130/">LinkedIn</a></li>
          </ul>
          <p>
          Hi, my name is Steven Rejdukowski, a former E-Commerce Manager looking to make a change for myself in the tech field.
          Software engineering was an interest of mine for a long time but I wanted to make it my next career. I have always had an affinity for computers and solving problems so it seemed like this was a perfect meld for both of those interests of mine. 
          The fast-paced and ever-changing tech industry seemed like a great fit for me because I love immersing myself in my craft, whatever it may be. In this industry, you can never know too much. My background in creating an E-Commerce presence from the ground up will help me understand the products I am working with and consider the consumer when working on products and applications. I look forward to learning and putting into code all that I have learned and experienced to help be a vital part of a software engineering team.
          </p>
        </div>
        <div>
          <h2>Seth Pierce</h2>
          <ul>
            <li className="links"><a href="https://github.com/sethppierce">My Github</a></li>
            <li className="links"><a href="https://www.linkedin.com/in/seth-pierce-18088124a/">LinkedIn</a></li>
          </ul>
          <p>
          My name is Seth Pierce. I'm 24 years old and I'm currently learning to code at Code
          Fellows. I spent 4 years in the Marine Corps as a diesel mechanic and I'm hoping to make a change in careers
          and grow as a Developer through Code Fellows.
          </p>
        </div>
      </>
    )
  }
};

export default Profile;
