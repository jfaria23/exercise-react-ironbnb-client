import React, { useEffect, useState } from "react";
import axios from "axios";

function ApartmentsList() {
  useEffect(() => {
    getApartmentsFromApi();
  }, []);

  const [apartmentsArr, setApartmentsArr] = useState(null);

  const getApartmentsFromApi = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/apartments`)
      .then((response) => {
        console.log(response);
        setApartmentsArr(response.data[0]);
      })
      .catch((e) => console.log(e));
  };

  return apartmentsArr.map((apartmentObj) => {
    return <div key={apartmentObj.id}></div>;
  });
}

export default ApartmentsList;

// useEffect(() => {
//   axios.get(`${process.env.REACT_APP_API_URL}/characters/${characterId}`)
//       .then(response => {
//           setDetails(response.data);
//       })
//       .catch(e => console.log(e))
// }, []);
