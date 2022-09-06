import React from "react";
import Detail from "./Detail";

function Card(props) {
  const onGet = function (delItem) {
    props.onDeleteData(delItem);
  };

  const updateData = function (upName, upAge, id) {
    // console.log(upName, upAge, id);
    props.onUpdate(upName, upAge, id);
  };

  return (
    <div>
      <Detail info={props.info} onDelete={onGet} onGetUpdateData={updateData} />
    </div>
  );
}

export default Card;
