import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const MessageSucess = ({ purchaseID }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        Gracias por su compra!!. Su ID de compra es: {purchaseID}
      </Alert>
    </Stack>
  );
};

export default MessageSucess;
