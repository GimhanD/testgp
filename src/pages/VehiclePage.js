import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import VehicleList from "../components/VehicleList";

function VehiclePage() {
  const [userData, setUserData] = useState([]);

  const [vehicleNo, setVehicleNo] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [noOfSeats, setNoOfSeats] = useState();
  const [pricePerKm, setPricePerKm] = useState();

  const changeVehicleNo = (event) => {
    setVehicleNo(event.target.value);
  };
  const changevehicleType = (event) => {
    setVehicleType(event.target.value);
  };
  const changeFuelType = (event) => {
    setFuelType(event.target.value);
  };
  const changeNoOfSeats = (event) => {
    setNoOfSeats(event.target.value);
  };
  const changePricePerKm = (event) => {
    setPricePerKm(event.target.value);
  };

  let handleSubmit = async (e) => {
    let x = Math.floor((Math.random() * 100) + 1);
    axios
      .post("http://localhost:8080/vehicle/saveVehicle", {
        id: x,
        vehicleNo: vehicleNo,
        vehicleType: vehicleType,
        fuelType: fuelType,
        noOfSeats: noOfSeats,
        pricePerKm: pricePerKm,
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
    setVehicleNo("");
    setVehicleType("");
    setFuelType("");
    setNoOfSeats();
    setPricePerKm();
  };

  const fetchData = () => {
    fetch(`http://localhost:8080/vehicle/getVehicle`)
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
            <Form.Label>Vehicle Number</Form.Label>
            <Form.Control
              placeholder="Enter Vehicle Number"
              value={vehicleNo}
              onChange={changeVehicleNo}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Vehicle Type</Form.Label>
            <Form.Control
              placeholder="Enter Vehicle Type"
              value={vehicleType}
              onChange={changevehicleType}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Fuel Type</Form.Label>
            <Form.Control
              placeholder="Enter Fuel Type"
              value={fuelType}
              onChange={changeFuelType}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number Of Seats</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Number Of Seats"
              value={noOfSeats}
              onChange={changeNoOfSeats}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price Per Km</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Price Per Km"
              value={pricePerKm}
              onChange={changePricePerKm}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Create Vehicle
          </Button>
        </Form>
      </div>
      <VehicleList users={userData} />
    </div>
  );
}

export default VehiclePage;
