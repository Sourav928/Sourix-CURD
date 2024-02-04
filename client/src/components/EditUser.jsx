import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { editUser, getUser } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultObj = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const [user, setUser] = useState({ defaultObj });

  const navigate = useNavigate();
  const { id } = useParams();

  const loadUserDetails = async () => {
    try {
      const response = await getUser(id);
      setUser(response.data); // Set user data once fetched
    } catch (error) {
      console.error("Error fetching user details:", error);
      // Handle error, e.g., redirect to an error page
    }
  };

  useEffect(() => {
    loadUserDetails();
  }, []);

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const editUserDetails = async () => {
    await editUser(user, user._id);
    navigate("/all");
  };

  return (
    <>
      <Container>
        <Typography variant="h4">Edit User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="name"
            value={user.name}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Username</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="username"
            value={user.username}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="email"
            value={user.email}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="phone"
            value={user.phone}
          />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={() => editUserDetails()}>
            {" "}
            Edit user
          </Button>
        </FormControl>
      </Container>
    </>
  );
};

export default EditUser;
