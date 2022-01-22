import React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Viewin() {
  return (
    <>
      <container>
        <CustomInput aria-label="Demo input" placeholder="Type something..." />
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
        <Button variant="contained">Submit</Button>
      </container>
    </>
  );
  zz;
}
export default Viewin;
