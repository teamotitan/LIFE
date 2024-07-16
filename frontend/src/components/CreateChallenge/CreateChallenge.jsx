import React from "react";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import "./CreateChallenge.css";

const CreateChallenge = () => {
  return (
    <div className="login-container">
      <div>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ borderRadius: 2 }}
        >
          <div>
            <h2>What is your challenge name?</h2>
            <TextField required id="outlined-required" label="Challenge name" />
          </div>
          <div>
            <h2>Duration of challenge(Days).</h2>
            <TextField
              label="Number"
              type="number"
              InputProps={{ inputProps: { min: 0 } }}
            />
          </div>
          <div>
            <h2>Short description of your challenge.</h2>
            <TextField id="outlined-helperText" label="Description" />
          </div>
          <div>
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<DeleteIcon />}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="action"
              endIcon={<InsertEmoticonIcon />}
            >
              Create
            </Button>
          </div>
        </Box>
      </div>
      <img src="./login.jpg" alt="" />
    </div>
  );
};

export default CreateChallenge;
