import { useState } from "react";

const User = ({ name, location }) => {
  const count = useState(0);
  const count2 = useState(1);
  return (
    <div>
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h1>Name: {name}</h1>
      <h2>Location: {location}</h2>
      <h4>Contact: +912222</h4>
    </div>
  );
};

export default User;
