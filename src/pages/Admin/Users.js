import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import Modal from "../../components/Modal";
import { Button } from "@mui/material";
import { setUserData } from "../../firebase/functions";

export default function Users() {
  const usersObj = useSelector((state) => state.users);
  const rols = useSelector((state) => state.rols);
  const users = Object.entries(usersObj);
  const [chooseUser, setChooseUser] = useState({});
  const [open, setOpen] = useState(false);

  const admins = [];
  const drivers = [];
  const simpleUsers = [];

  const choose = (data) => {
    setChooseUser(data);
    setOpen(true);
  };

  const edited = (isEdit, selectRole) => {
    if (isEdit) {
      console.log(selectRole);
      const t = { ...chooseUser };
      t.role = selectRole;
      setUserData(t, t.uid);
    }
    setOpen(false);
    setChooseUser({});
  };

  users.map((user) => {
    if (user[1].role === rols.user) {
      simpleUsers.push(<User func={choose} user={user} />);
    } else if (user[1].role === rols.yetkazuvchi) {
      drivers.push(<User func={choose} user={user} />);
    } else if (user[1].role === rols.admin) {
      admins.push(<User func={choose} user={user} />);
    }
  });

  return (
    <UsersWrapper className="table-cover d-flex flex-column pt-5" style={{ height: "90vh", overflow: 'auto' }}>
      {open && (
        <Modal open={open} setOpen={setOpen}>
          <ChooseUser edited={edited} data={chooseUser} />
        </Modal>
      )}

      <h3 className="my-3">Foydalanuvchilar</h3>

      <div className="py-4 px-2">
        <h5>Adminlar</h5>
        <Table striped bordered size="sm" className="users">
          <thead>
            <tr>
              <th>F. I. O</th>
              <th>Telefon</th>
              <th>Email</th>
              <th>Lavozimi</th>
            </tr>
          </thead>
          <tbody>{admins}</tbody>
        </Table>
      </div>
      <div className="py-4 px-2">
        <h5>Yetkazuvchilar</h5>
        <Table striped bordered size="sm" className="users">
          <thead>
            <tr>
              <th>F. I. O</th>
              <th>Telefon</th>
              <th>Email</th>
              <th>Lavozimi</th>
            </tr>
          </thead>
          <tbody>{drivers}</tbody>
        </Table>
      </div>
      <div className="py-4 px-2">
        <h5>Foydalanuvchilar</h5>
        <Table striped bordered size="sm" className="users">
          <thead>
            <tr>
              <th>F. I. O</th>
              <th>Telefon</th>
              <th>Email</th>
              <th>Lavozimi</th>
            </tr>
          </thead>
          <tbody>{simpleUsers}</tbody>
        </Table>
      </div>
    </UsersWrapper>
  );
}

const UsersWrapper = styled.div``;

const User = ({ user, func }) => {
  const id = user[0];
  const userData = user[1];

  return (
    <tr>
      <td>{userData.fullName}</td>
      <td>{userData.phone}</td>
      <td>{userData.email}</td>
      <td>
        <Button
          variant="outlined" color="warning"
          onClick={() => {
            func(userData);
          }}
          className="w-100"
        >
          {userData.role}
        </Button>
      </td>
    </tr>
  );
};

const ChooseUser = ({ data, edited }) => {
  const [selectRole, setSelectRole] = useState(data.role);
  const rols = Object.values(useSelector((state) => state.rols));
  return (
    <>
      <div className="chooseuser shadow bg-white rounder p-5">
        <h3 className="text-center mb-4">
          {data.fullName} ning rolini tanlang
        </h3>
        <select
          onChange={(e) => setSelectRole(e.target.value)}
          className="w-100 form-controle py-1 px-2 rounded"
        >
          {rols.map((item, i) => (
            <option selected={item === data.role} key={i} value={item}>
              {item}
            </option>
          ))}
        </select>

        <div className="buttons pt-4 d-flex justify-content-around ">
          <Button
            onClick={() => edited(false)}
            variant="contained"
            color="success"
          >
            Bekor qilish
          </Button>
          <Button
            onClick={() => edited(true, selectRole)}
            variant="contained"
            color="error"
          >
            Saqlash
          </Button>
        </div>
      </div>
    </>
  );
};
