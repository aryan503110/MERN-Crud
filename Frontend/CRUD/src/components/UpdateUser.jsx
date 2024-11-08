import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UpdateUser() {
  const { id } = useParams();
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [age, setage] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/getuser/" + id)
      .then(
        result =>{ setname(result.data.name),
        setemail(result.data.email),
        setage(result.data.age)
        }
      )
      .catch((error) => console.log(error));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/getuser/"+id, { name, age, email })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      Update user :
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        ></input>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setage(e.target.value)}
        ></input>
        <button>Update User</button>
      </form>
    </div>
  );
}

export default UpdateUser;
