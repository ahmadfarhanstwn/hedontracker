import React from "react";
import useStyles from "../useStyles";
import {
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
} from "@material-ui/core";

const SubmitIncome = ({
  handleSubmit,
  incomeDesc,
  incomeValue,
  setIncomeDesc,
  setIncomeValue,
}) => {
  const classes = useStyles();

  return (
    <div className="submit-income">
      <h4 className={classes.divtitle}>Input Pendapatan</h4>
      <form onClick={handleSubmit}>
        <TextField
          className={classes.textfield}
          id="outlined-basic"
          label="Deskripsi Pendapatan"
          variant="outlined"
          fontFamily="monospace"
          value={incomeDesc}
          onChange={(e) => {
            if (e.target.value.length <= 30) setIncomeDesc(e.target.value);
          }}
          type="text"
          size="small"
        />{" "}
        <br />
        <FormControl fontFamily="monospace" className={classes.textfield}>
          <InputLabel htmlFor="standard-adornment-amount">
            Nilai Pendapatan
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            type="number"
            value={incomeValue}
            onChange={(e) => {
              if (e.target.value.length <= 10) setIncomeValue(e.target.value);
            }}
            startAdornment={
              <InputAdornment position="start">Rp.</InputAdornment>
            }
          />
        </FormControl>
        <br />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          type="submit"
        >
          Tambahkan Pendapatan
        </Button>
      </form>
    </div>
  );
};

export default SubmitIncome;
