import { postData } from "../utils/fetchData";
import { useState } from "react";

const newEmployeePage = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const sendData = (e) => {
    e.preventDefault();
    postData({ firstName: name, id: id });
  };

  return (
    <div>
      <form onSubmit={sendData}>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          id="name"
          name="name"
          type="text"
          required
          value={name}
        />
        <label htmlFor="name">ID</label>

        <input
          onChange={(e) => setId(e.target.value)}
          id="id"
          name="id"
          type="text"
          required
          value={id}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default newEmployeePage;
