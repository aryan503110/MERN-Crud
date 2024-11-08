import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [age, setage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/create", { name, age, email })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      Create user :
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setname(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setemail(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Enter Age"
          onChange={(e) => setage(e.target.value)}
        ></input>
        <button>Add User</button>
      </form>
    </div>
  );
}

export default CreateUser;
