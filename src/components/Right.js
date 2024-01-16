import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { sendEmailTickets } from "../api";
import { useAlert } from "react-alert";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root": {
      borderRadius: "20px",
      boxShadow: "5px 5px 22px 0px rgba(0,0,0,0.85);",
    },
  },
}));
const drawerWidth = 240;

const Right = () => {
  const classes = useStyles();
  const alert = useAlert();

  const email = () => {
    // const response = confirm("Are you sure you want to send an email?");
    if (window.confirm("Are you sure you want to send an email?")) {
      sendEmailTickets().then(() => {
        alert.show("Email Sent");
      });
    } else {
      alert.show("Email Canceled");
    }
  };

  let history = useNavigate();
  const user = sessionStorage.getItem("user");
  return (
    <div className={classes.root}>
      <Box
        sx={{
          display: "flex",
          position: "sticky",
          flexDirection: "column",
          ml: 10,
          mt: 10,
        }}
      >
        {/* <CssBaseline /> */}

        <Drawer
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="right"
        >
          <Toolbar />
          <Divider />
          <List>
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              Site Data
            </Typography>
            <ListItem>
              <Button
                sx={{ border: 1, borderColor: "white", width: 500 }}
                variant="contained"
                onClick={() => {
                  history("/");
                }}
              >
                Site Information
              </Button>
            </ListItem>
            <ListItem>
              <Button
                sx={{ border: 1, borderColor: "white", width: 500 }}
                variant="contained"
                onClick={async () => {
                  history("/gctrackerdisplay");
                }}
              >
                GC Tracker
              </Button>
            </ListItem>

            <ListItem>
              <Button
                sx={{ border: 1, borderColor: "white", width: 500 }}
                variant="contained"
                onClick={() => {
                  history("/inbounddisplay");
                }}
              >
                Inbound Calls
              </Button>
            </ListItem>
            {/* <ListItem>
              <Button
                sx={{ border: 1, borderColor: "white", width: 500 }}
                variant="contained"
                onClick={() => {
                  history("/project");
                }}
              >
                Project Management
              </Button>
            </ListItem> */}
            <ListItem>
              <Button
                sx={{ border: 1, borderColor: "white", width: 500 }}
                variant="contained"
                onClick={() => {
                  history("/alerticket");
                }}
              >
                Alert Tickets
              </Button>
            </ListItem>
            <ListItem>
              <Button
                sx={{ border: 1, borderColor: "white", width: 500 }}
                variant="contained"
                onClick={() => {
                  // sendEmailTickets();
                  email();
                }}
              >
                Ticketing Count Email
              </Button>
            </ListItem>
          </List>
          <Divider />
          <div className="hide">
            <Typography
              variant="h5"
              component="div"
              sx={{ textAlign: "center" }}
            >
              DB Entry
            </Typography>
            <List>
              <ListItem>
                <Button
                  sx={{ border: 1, borderColor: "white", width: 500 }}
                  variant="contained"
                  onClick={() => {
                    history("/allsites");
                  }}
                >
                  All Sites
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  sx={{ border: 1, borderColor: "white", width: 500 }}
                  variant="contained"
                  onClick={() => {
                    history("/gctracker");
                  }}
                >
                  GC Tracker
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  sx={{ border: 1, borderColor: "white", width: 500 }}
                  variant="contained"
                  onClick={() => {
                    history("/pcnalert");
                  }}
                >
                  PCN Alert Tracker
                </Button>
              </ListItem>
              <ListItem>
                {user === "james" && (
                  <Button
                    sx={{ border: 1, borderColor: "white", width: 500 }}
                    variant="contained"
                    onClick={() => {
                      history("/login");
                    }}
                  >
                    New User
                  </Button>
                )}
              </ListItem>
              {/* <ListItem>
                {user === "james" && (
                  <Button
                    sx={{ border: 1, borderColor: "white", width: 500 }}
                    variant="contained"
                    onClick={() => {
                      // sendEmailTickets();
                      email();
                    }}
                  >
                    Ticketing Count
                  </Button>
                )}
              </ListItem> */}
            </List>
          </div>
        </Drawer>
      </Box>
    </div>
  );
};

export default Right;
