import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import BookingList from "../components/BookingList";

function BookingPage() {
  const [userData, setUserData] = useState([]);

  const [destination, setDestination] = useState("");
  const [noPassengers, setNoPassengers] = useState();
  const [vehicleType, setVehicleType] = useState("");

  const changeDestination = (event) => {
    setDestination(event.target.value);
  };
  const changeNoPassengers = (event) => {
    setNoPassengers(event.target.value);
  };
  const changeVehicleType = (event) => {
    setVehicleType(event.target.value);
  };

  let handleSubmit = async (e) => {
    axios
      .post("http://localhost:8080/booking/createBooking", {
        destination: destination,
        noPassengers: noPassengers,
        vehicleType: vehicleType,
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
    setDestination("");
    setNoPassengers();
    setVehicleType("");
  };

  const fetchData = () => {
    fetch(`http://localhost:8080/booking/getBookings`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setUserData(actualData);
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
            <Form.Label>Destination</Form.Label>
            <Form.Control
           
              placeholder="Enter destination"
              value={destination}
              onChange={changeDestination}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Number of Passengers</Form.Label>
            <Form.Control
            type="number"
              placeholder="Enter Number of Passengers"
              value={noPassengers}
              onChange={changeNoPassengers}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Vehicle Type</Form.Label>
            <Form.Control
              placeholder="Enter Vehicle Type"
              value={vehicleType}
              onChange={changeVehicleType}
            />
          </Form.Group>
 
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Create Booking
          </Button>
        </Form>
      </div>
      <BookingList users={userData}/>
    </div>
  );
}

export default BookingPage;
