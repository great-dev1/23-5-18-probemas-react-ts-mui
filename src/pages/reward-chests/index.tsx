import MainLayout from "../../layouts/MainLayout";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
const RewardChestsPage = () => {
  return (
    <MainLayout>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Amount" variant="outlined" />
        <TextField id="outlined-disabled" label="Price" disabled />
      </Box>
    </MainLayout>
  );
};

export default RewardChestsPage;
