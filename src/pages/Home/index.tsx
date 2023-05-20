import React, { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useAppContext } from "../../contexts";

const HomePage = () => {
  const { state } = useAppContext();
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState("0");
  const selectedCurrency = state.selectedCurreny;

  useEffect(() => {
    setPrice(`${selectedCurrency.label}: ${10 * amount * selectedCurrency.value} `);
  }, [selectedCurrency.label, amount]);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    
    if (!isNaN(value)) {
      setAmount(value);
    }
  };

  return (
    <MainLayout>
      <Box
        component="form"
        sx={{
          padding: "20px",
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Amount"
          type="number"
          variant="outlined"
          value={amount}
          inputProps={{step: "1"}}
          onChange={handleAmountChange}
        />
        <TextField
          id="outlined-disabled"
          label="Price"
          disabled
          value={price}
        />
      </Box>
    </MainLayout>
  );
};

export default HomePage;
