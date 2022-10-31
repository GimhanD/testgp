import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import UserList from "../components/UserList";
import axios from "axios";

function UserPage() {
  const [userData, setUserData] = useState([]);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [nic, setNic] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changeFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const changeLastName = (event) => {
    setLastName(event.target.value);
  };
  const changeUsername = (event) => {
    setUsername(event.target.value);
  };
  const changeNic = (event) => {
    setNic(event.target.value);
  };
  const changeContactNumber = (event) => {
    setContactNumber(event.target.value);
  };
  const changeAddress = (event) => {
    setAddress(event.target.value);
  };

  let handleSubmit = async (e) => {
    axios.post('http://localhost:8080/user/createUser', {
          email: email,
          firstName: firstName,
          lastName: lastName,
          username: username,
          nic: nic,
          contactNumber: contactNumber,
          address: address,
    })
    .then(function (response) {
      console.log(response);
      clearState();
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const clearState = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setUsername("");
    setNic("");
    setContactNumber("");
    setAddress("");
  };

  const fetchData = () => {
    fetch(`http://localhost:8080/user/all`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setUserData(actualData.users);
        console.log(userData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(userData);

  return (
    <div className="flex flex-col">
      <div className="w-1/2 flex items-center justify-center my-10">
        <Form style={{ width: "50%" }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={changeEmail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder="Enter first name"
              value={firstName}
              onChange={changeFirstName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              placeholder="Enter last name"
              value={lastName}
              onChange={changeLastName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              placeholder="Enter username"
              value={username}
              onChange={changeUsername}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>NIC</Form.Label>
            <Form.Control
              placeholder="Enter NIC"
              value={nic}
              onChange={changeNic}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              placeholder="Enter contact number"
              value={contactNumber}
              onChange={changeContactNumber}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="Enter address"
              value={address}
              onChange={changeAddress}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Create User
          </Button>
        </Form>
      </div>
      <UserList users={userData} />
    </div>
  );
}

export default UserPage;
