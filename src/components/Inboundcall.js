import React, { useState, useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import { createInbound } from "../api";
import {
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Menu,
  Button,
  TextField,
  Alert,
  Box,
} from "@mui/material";

import { makeStyles } from "@mui/styles";

const reload = () => {
  setTimeout(function () {
    window.location.reload();
  }, 5000);
};
const moment = require("moment");
const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 226,
  },
}));

const Inboundcall = ({ addTicket }) => {
  const classes = useStyles();
  const [sb, setSb] = useState("");
  const [gvr_id, setGvr_id] = useState(0);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [issue, setIssue] = useState("");
  const [gp, setGp] = useState("");
  const [problemType, setProblemType] = useState("");

  const handleProblem = (e) => {
    setProblemType(e.target.value);
  };
  const handleBranch = (e) => {
    setSb(e.target.value);
  };
  const handleTextChangeGvr = (e) => {
    setGvr_id(e.target.value);
  };
  const handleNotes = (e) => {
    setNotes(e.target.value);
  };
  const handleTextChangeName = (e) => {
    setName(e.target.value);
  };
  const handleTextChangeNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleIssue = (e) => {
    setIssue(e.target.value);
  };
  const handleTextChangeGp = (e) => {
    setGp(e.target.value);
  };
  const consoleTest = (e) => {
    setLoading(true);
    console.log("test", sb, gvr_id, notes, name, number, issue, gp);
    createInbound(sb, gvr_id, notes, name, number, issue, gp, problemType);
    reload();
  };
  return (
    <div>
      <TextField
        sx={{ width: "44%", m: 1, mt: 3 }}
        required
        id="outlined-required"
        label="Enter GVR ID"
        // defaultValue={site.gvr_id}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTextChangeGvr}
      />
      <TextField
        sx={{ width: "44%", m: 1, mt: 3 }}
        required
        id="outlined-required"
        label="Enter Caller Name"
        // defaultValue={site.gvr_id}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTextChangeName}
      />
      <TextField
        sx={{ width: "44%", m: 1 }}
        required
        id="outlined-required"
        label="Enter Caller Phone Number"
        // defaultValue={site.gvr_id}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTextChangeNumber}
      />
      <TextField
        sx={{ width: "44%", m: 1 }}
        required
        id="outlined-required"
        label="Enter GP Ticket Number"
        // defaultValue={site.gvr_id}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleTextChangeGp}
      />
      <FormControl sx={{ width: "44%", m: 1 }}>
        <InputLabel>Branch</InputLabel>
        <Select onChange={handleBranch}>
          <MenuItem value={"ATL"}>Atlanta</MenuItem>
          <MenuItem value={"BIR"}>Birmingham</MenuItem>
          <MenuItem value={"CHA"}>Charlotte</MenuItem>
          <MenuItem value={"COL"}>Columbia</MenuItem>
          <MenuItem value={"CUS"}>Customer</MenuItem>
          <MenuItem value={"FTL"}>Fort Lauderdale</MenuItem>
          <MenuItem value={"FTM"}>Fort Myers</MenuItem>
          <MenuItem value={"GRE"}>Greensboro</MenuItem>
          <MenuItem value={"GCS"}>Guardian Connect</MenuItem>
          <MenuItem value={"GUL"}>Gulf/Pensacola</MenuItem>
          <MenuItem value={"JAX"}>Jacksonville</MenuItem>
          <MenuItem value={"KNX"}>Knoxville</MenuItem>
          <MenuItem value={"NAS"}>Nashville</MenuItem>
          <MenuItem value={"PES"}>Petro Solutions</MenuItem>
          <MenuItem value={"RAL"}>Raleigh</MenuItem>
          <MenuItem value={"SAN"}>Sanford</MenuItem>
          <MenuItem value={"SAV"}>Savannah</MenuItem>
          <MenuItem value={"SUB"}>Sub-Contractor (Other)</MenuItem>
          <MenuItem value={"TAL"}>Tallahassee</MenuItem>
          <MenuItem value={"TAM"}>Tampa</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: "44%", m: 1 }}>
        <InputLabel>Issue Found?</InputLabel>
        <Select onChange={handleIssue}>
          <MenuItem value={"true"}>Yes</MenuItem>
          <MenuItem value={"false"}>No</MenuItem>
          <MenuItem value={"other"}>Other (Not GC Site)</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: "44%", m: 1 }}>
        <InputLabel>Issue Type</InputLabel>
        <Select onChange={handleProblem}>
          <MenuItem value={"Dispenser Offline"}>Dispenser Offline</MenuItem>
          <MenuItem value={"Serial Error"}>Serial Error</MenuItem>
          <MenuItem value={"Printer Error"}>Printer Error</MenuItem>
          <MenuItem value={"Card Reader"}>Card Reader Error</MenuItem>
          <MenuItem value={"UPM Error"}>UPM Error</MenuItem>
          <MenuItem value={"Site Offline"}>Site Offline</MenuItem>
          <MenuItem value={"SSOM Erro"}>SSOM Error</MenuItem>
          <MenuItem value={"None"}>None</MenuItem>
        </Select>
      </FormControl>
      <TextField
        sx={{ width: "91%", m: 1 }}
        required
        id="outlined-required"
        label="Enter Ticket Notes"
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        multiline
        rows={6}
        onChange={handleNotes}
      />
      <Box textAlign="center">
        <LoadingButton
          sx={{ m: 2, width: "82%" }}
          color="secondary"
          onClick={consoleTest}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          Save
        </LoadingButton>
      </Box>
    </div>
  );
};

export default Inboundcall;
