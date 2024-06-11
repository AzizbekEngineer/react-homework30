import React, { useState } from "react";
import useStore from "../../store/store";
import "./editModal.scss";

const EditUser = ({ editData, setClose }) => {
  const editUserData = useStore((state) => state.editUser);

  const [name, setName] = useState(editData.name);
  const [username, setUsername] = useState(editData.username);
  const [profession, setProfession] = useState(editData.profession);
  const [age, setAge] = useState(editData.age);
  const [gender, setGender] = useState(editData.gender);

  const handleEdit = (e) => {
    e.preventDefault();
    const newEditUser = {
      id: editData.id,
      name,
      username,
      profession,
      age,
      gender,
    };
    editUserData(editData.id, newEditUser);
    setClose(null);
  };

  return (
    <div>
      <div onClick={() => setClose(null)} className="edit__overlay"></div>
      <form onSubmit={handleEdit} className="edit__user-form">
        <span className="edit__close" onClick={() => setClose(null)}>
          X
        </span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <input
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          type="text"
          placeholder="Profession"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="Age"
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditUser;
