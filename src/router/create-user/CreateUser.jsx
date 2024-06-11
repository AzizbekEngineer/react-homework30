import React, { useState } from "react";
import "./CreateUser.css";
import useStore from "../../store/store";

function CreateUser() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [profession, setProfession] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  let addUser = useStore((state) => state.addUser);
  const handleCreate = (e) => {
    e.preventDefault();
    let id = new Date().getHours();
    let newUsers = {
      id,
      name,
      username,
      profession,
      age,
      gender,
    };
    addUser(newUsers);
  };
  return (
    <div className="create__user">
      <h2>Create User</h2>
      <form onSubmit={handleCreate} className="create__user-form" action="">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        <input
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          type="text"
          placeholder="profession"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="age"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          name=""
          id=""
        >
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
