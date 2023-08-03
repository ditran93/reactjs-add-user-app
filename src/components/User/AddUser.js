import styles from "./AddUser.module.css";
import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/ErrorModal/ErrorModal.js";

const initialState = { username: "", age: "" };

const AddUser = (props) => {
  const [userInfo, setUserInfo] = useState(initialState);
  const userInfoChangeHandler = (input, value) => {
    setUserInfo((prevInfo) => ({ ...prevInfo, [input]: value }));
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveUserInfo(userInfo);
    setUserInfo(initialState);
  };
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          value={userInfo.username}
          onChange={(event) =>
            userInfoChangeHandler("username", event.target.value)
          }
          className={styles.input}
          type="text"
          id="username"
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          value={userInfo.age}
          onChange={(event) => userInfoChangeHandler("age", event.target.value)}
          className={styles.input}
          type="number"
          id="age"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
