import React, { useState } from "react";

let id;

function Detail(props) {
  const [updateName, setUpdateName] = useState("");
  const [updateAge, setUpdateAge] = useState("");

  const updateNameHandler = function (event) {
    setUpdateName(event.target.value);
    id = +event.target.parentElement.id;
  };

  const updateAgeHandler = function (event) {
    setUpdateAge(event.target.value);
  };

  const updateNewData = function () {
    props.onGetUpdateData(updateName, updateAge, id);
  };

  const deleteHandler = function (event) {
    const deleteItem = props.info.filter((data) => {
      return data.id === event.target.id;
    });

    props.onDelete(deleteItem);
  };

  const renderData = props.info.map((data) => {
    return (
      <li key={data.id} onClick={deleteHandler} id={data.id}>
        {data.name} is {data.age} years old with this id: {data.id}{" "}
        <input
          type="text"
          defaultValue={data.name}
          onChange={updateNameHandler}
        />
        <input
          type="number"
          defaultValue={data.age}
          onChange={updateAgeHandler}
          onBlur={updateNewData}
        />
      </li>
    );
  });

  return <ul>{renderData}</ul>;
}

export default Detail;
