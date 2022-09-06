import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);
  // const [updatedData, setUpdatedData] = useState(data);

  const submitHandler = function (event) {
    event.preventDefault();

    setData([
      ...data,
      { name: name, age: age, id: Math.random().toFixed(16).substring(2, 8) },
    ]);

    setName("");
    setAge("");
  };

  const nameHandler = function (event) {
    setName(event.target.value);
  };

  const ageHandler = function (event) {
    setAge(event.target.value);
  };

  const deleteHandler = function (deleteData) {
    const idx = data.findIndex((item) => item.id === deleteData[0].id);
    data.splice(idx, 1);
    setData([...data]);
  };

  const updateDataHandler = function (newName, newAge, id) {
    console.log(newName, newAge, id);
    data.forEach((info) => {
      if (info.id === id) {
        setData([
          ...data,
          {
            name: newName,
            age: newAge,
            id: Math.random().toFixed(16).substring(2, 8),
          },
        ]);
      }
    });
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="name"
          onChange={nameHandler}
          value={name}
        />
        <br />
        <br />
        <input
          type="number"
          placeholder="age"
          onChange={ageHandler}
          value={age}
        />
        <br />
        <br />
        <input type="submit" placeholder="add" />
      </form>
      <Card
        info={data}
        onDeleteData={deleteHandler}
        onUpdate={updateDataHandler}
      />

      {/* <Card info={data} onDeleteData={deleteHandler} /> */}
    </div>
  );
}

export default App;
