import Button from "react-bootstrap/Button";
import React from "react";
import axios from "axios";

function BookingList({ users }) {
  console.log(users);
  return (
    <div className="flex justify-center flex-col w-3/5 items-center">
      {users.map((user, index) => (
        <div
          key={index}
          className="m-3 p-4 border-blue-400 w-3/4 border-2 rounded-lg flex flex-col "
        >
          <text>Destination</text>
          <text className="m-1 p-1 bg-red-300 rounded-lg">
            {user.destination}
          </text>
          <text>Number of Passengers</text>
          <text className="m-1 p-1  bg-red-300 rounded-lg">
            {user.noPassengers}
          </text>
          <text>Vehicle Type</text>
          <text className="m-1 p-1  bg-red-300 rounded-lg">
            {user.vehicleType}
          </text>
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
                  console.log(user.destination);
                //   axios
                //     .delete("http://localhost:8080/booking/deleteBooking",
                //     {
                //       id: user.id,
                //       destination: user.destination,
                //       noPassengers: user.noPassengers,
                //       vehicleType: user.vehicleType,
                //     })
                //     .then(function (response) {
                //       console.log(response);
                //     })
                //     .catch(function (error) {
                //       console.log(error);
                //     });

                var data = JSON.stringify({
                    "id": user.id,
                    "destination": user.destination,
                    "noPassengers": user.noPassengers,
                    "vehicleType": user.vehicleType
                  });
                  
                  var config = {
                    method: 'delete',
                    url: 'http://localhost:8080/booking/deleteBooking',
                    headers: { 
                      'Content-Type': 'application/json'
                    },
                    data : data
                  };
                  
                  axios(config)
                  .then(function (response) {
                    console.log(JSON.stringify(response.data));
                    window.location.reload(false);
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

export default BookingList;
