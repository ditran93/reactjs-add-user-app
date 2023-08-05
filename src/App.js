import React, { useState } from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

let usersInfoList = [];
function App() {
  const [userData, setUserData] = useState();
  const userInfoHandler = (userInfo) => {
    setUserData({ ...userInfo, id: Math.random().toString() });
    console.log(userInfo)
  };
  if (userData) {
    usersInfoList.push(userData);
  }

  return (
    <div>
      <AddUser onSaveUserInfo={userInfoHandler} />
      {!usersInfoList.length && (
        <p style={{ color: "white", textAlign:"center" }}>No User Data Found</p>
      )}
      {usersInfoList.length && <UsersList usersList={usersInfoList} />}
    </div>
  );
}

export default App;
