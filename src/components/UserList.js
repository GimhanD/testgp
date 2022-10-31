import Button from "react-bootstrap/Button";
import React from "react";
import axios from "axios";

function UserList({ users }) {
  console.log(users);
  return (
    <div className="flex justify-center flex-col w-3/5 items-center">
      {users.map((user, index) => (
        <div
          key={index}
          className="m-3 p-4 border-blue-400 w-3/4 border-2 rounded-lg flex flex-col "
        >
          <text>Email</text>
          <text className="m-1 p-1 bg-red-300 rounded-lg">{user.email}</text>
          <text>First Name</text>
          <text className="m-1 p-1  bg-red-300 rounded-lg">
            {user.firstName}
          </text>
          <text>Last Name</text>
          <text className="m-1 p-1  bg-red-300 rounded-lg">
            {user.lastName}
          </text>
          <text>User Name</text>
          <text className="m-1 p-1 bg-red-300 rounded-lg">{user.username}</text>
          <text>NIC</text>
          <text className="m-1 p-1  bg-red-300 rounded-lg">{user.nic}</text>
          <text>Contact Number</text>
          <text className="m-1 p-1  bg-red-300 rounded-lg">
            {user.contactNumber}
          </text>
          <text>Address</text>
          <text className="m-1 p-1  bg-red-300 rounded-lg">{user.address}</text>
          <div className="flex flex-row m-1">
            <div className="mr-5">
              <Button variant="secondary" type="submit">
                Edit
              </Button>
            </div>
            <div className="mr-5">
              <Button
                variant="danger"
                type="submit"
                onClick={() => {
                  axios
                    .delete("http://localhost:8080/user/deleteUser/`${user.id}`", {})
                    .then(function (response) {
                      console.log(response);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });
                }}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
