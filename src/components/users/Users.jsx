import React from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import useStore from "../../store/store";

function Users() {
  let user = useStore((state) => state.user);
  let removeUser = useStore((state) => state.removeUser);

  console.log(user);
  return (
    <div className="users__wrapper">
      {user?.map((user) => (
        <div key={user.id} className="users__card">
          <img src={male} alt="" />
          <h2>{user.name}</h2>
          <p>{user.username}</p>
          <p>{user.profession}</p>
          <p>{user.age}</p>
          <p>{user.gender}</p>
          <button onClick={() => removeUser(user.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Users;
