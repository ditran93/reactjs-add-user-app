import styles from "./AddUser.module.css";
import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/ErrorModal/ErrorModal.js";

const initialState = { username: "", age: "" };

const AddUser = (props) => {
  const [userInfo, setUserInfo] = useState(initialState);
  const [error, setError] = useState();
  const userInfoChangeHandler = (input, value) => {
    setUserInfo((prevInfo) => ({ ...prevInfo, [input]: value }));
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if(!userInfo.username.trim()) {
      setError({title: "Invalid Username", message: "Please enter a valid username"});
      return;
    }
    if(+userInfo.age.trim() < 1) {
      setError({title: "Invalid Age", message: "Please enter valid age"})
    }
    props.onSaveUserInfo(userInfo);
    setUserInfo(initialState);
  };
  const confirmError = () => {
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={confirmError}></ErrorModal>}
      <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          value={userInfo.username}
          onChange={(event) =>
            userInfoChangeHandler("username", event.target.value)
          }
          type="text"
          id="username"
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          value={userInfo.age}
          onChange={(event) => userInfoChangeHandler("age", event.target.value)}
          type="number"
          id="age"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
    
  );
};

export default AddUser;
