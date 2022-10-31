import Axios from "axios";

export async function fetchUsers() {
  const response = await Axios.get(
    "http://localhost:8080/api/v1/booking/getBookings"
  );

  const categories = response;

  // for (const key in response.data.data) {
  //   const expenseObj = {
  //     categoryId: response.data.data[key].categoryId,
  //     categoryName: response.data.data[key].categoryName,
  //     picture: response.data.data[key].picture
  //   };
  //   categories.push(expenseObj);
  // }
  console.log(categories);
  return categories;
}
