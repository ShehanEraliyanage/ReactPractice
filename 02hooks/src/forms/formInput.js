import React, { useState } from "react";

const FormInput = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [number, setNumber] = useState("");

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    // console.log(event.target.value);
    setDate(event.target.value);
  };
  const amountChangeHandler = (event) => {
    // console.log(event.target.value);
    setNumber(event.target.value);
  };
  const formsubmitHandler = (event) => {
    event.preventDefault();
    const getData = {
      title: title,
      date: new Date(date),
      number: number,
    };
    console.log(getData);
  };

  return (
    <>
      <form onSubmit={formsubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label>Title</label>
            <input type="text" value={title} onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__controls">
            <label>date</label>
            <input type="date" value={date} onChange={dateChangeHandler} />
          </div>
          <div className="new-expense__controls">
            <label>Number</label>
            <input
              type="number"
              value={number}
              onChange={amountChangeHandler}
            />
          </div>
          <div>
            <button type="submit">Click here</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormInput;
