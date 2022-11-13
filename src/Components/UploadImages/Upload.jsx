import React, { useState } from "react";
import { Container, Box, Typography, Button, TextField } from "@mui/material";

function Upload() {
  const [imageUploaded, setImageUploaded] = useState("");

  function onFileChange(e) {
    console.log(e.target.files[0]);
    setImageUploaded(e.target.files[0]);
  }

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImg", imageUploaded);
    axios.post("http://localhost:4000/upload", formData, {}).then((res) => {
      console.log(res);
    });
  }

  return (
    <Container>
      <Box>
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="upload-button"
            multiple
            type="file"
            onChange={(e) => onFileChange(e)}
          />
          <label htmlFor="upload-button">
            <Button variant="raised" component="span" type="submit">
              Cargar imagen
            </Button>
          </label>
        </form>
      </Box>
    </Container>
  );
}

export default Upload;
