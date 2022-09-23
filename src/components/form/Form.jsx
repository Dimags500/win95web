import React, { useRef } from "react";
import styled from "styled-components";
import {
  AppBar,
  Toolbar,
  TextField,
  Button,
  List,
  ListItem,
  Divider,
} from "react95";

const Form = () => {
  const [open, setOpen] = React.useState(false);

  const imga =
    "https://cdn.dribbble.com/users/314312/screenshots/14276050/media/7040d10636b787f9549d944d9c4e7b80.png";
  return (
    <AppBar>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: "bold" }}
          >
            <img
              src={imga}
              alt="react95 logo"
              style={{ height: "20px", marginRight: 4 }}
            />
            Start
          </Button>
          {open && (
            <List
              style={{
                position: "absolute",
                left: "0",
                top: "100%",
              }}
              onClick={() => setOpen(false)}
            >
              <ListItem>
                <span role="img" aria-label="👨‍💻">
                  👨‍💻
                </span>
                Profile
              </ListItem>
              <ListItem onClick={() => console.log("good")}>
                <span role="img" aria-label="📁">
                  📁
                </span>
                My account
              </ListItem>
              <Divider />
              <ListItem disabled>
                <span role="img" aria-label="🔙">
                  🔙
                </span>
                Logout
              </ListItem>
            </List>
          )}
        </div>

        <TextField placeholder="Search..." width={150} />
      </Toolbar>
    </AppBar>
  );
};
export default Form;
