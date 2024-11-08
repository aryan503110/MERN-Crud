import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Users() {
  const { id } = useParams();
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/getusers")
      .then((result) => setusers(result.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/deleteuser/" + id)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Link to="/create">Create User</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <>
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <Link to={`/update/${user._id}`}>Edit</Link>
                  <button onClick={(e)=>handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
