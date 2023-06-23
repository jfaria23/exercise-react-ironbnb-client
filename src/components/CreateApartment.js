import { useState } from "react";
import axios from "axios";

function CreateApartment() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newApartment = {
      title: title,
      img: img,
      pricePerDay: pricePerDay,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/apartments`, newApartment) // .post (url , data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => console.log("error creating apartment", e));
  };

  return (
    <>
      <h1>Create new Apartment</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          Image URL
          <input
            type="text"
            name="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </label>

        <label>
          Price per Day
          <input
            type="number"
            min={0}
            name="pricePerDay"
            value={pricePerDay}
            onChange={(e) => setPricePerDay(e.target.value)}
          />
        </label>

        <button>Create</button>
      </form>
    </>
  );
}

export default CreateApartment;
