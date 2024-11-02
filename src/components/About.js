import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div className="about-container">
        <h1>About Us</h1>
        {/* <User name={"Ashish Functional"} location={"Nashik"} /> */}
        <UserClass name={"Ashish Class"} location={"Mumbai"} />
        <UserClass name={"Elon Class"} location={"Mumbai"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="about-container">
//       <h1>About Us</h1>
//       {/* <User name={"Ashish Functional"} location={"Nashik"} /> */}
//       <UserClass name={"Ashish Class"} location={"Mumbai"} />
//     </div>
//   );
// };

export default About;
