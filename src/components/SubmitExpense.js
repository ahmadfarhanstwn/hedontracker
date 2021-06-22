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

const SubmitExpense = ({
  handleSubmit,
  expenseDesc,
  expenseValue,
  setExpenseDesc,
  setExpenseValue,
}) => {
  const classes = useStyles();

  return (
    <div className="submit-expense">
      <h4 className={classes.divtitle}>Input Pengeluaran</h4>
      <form onClick={handleSubmit}>
        <TextField
          className={classes.textfield}
          id="outlined-basic"
          label="Deskripsi Pengeluaran"
          variant="outlined"
          value={expenseDesc}
          onChange={(e) => {
            if (e.target.value.length <= 30) setExpenseDesc(e.target.value);
          }}
          type="text"
          size="small"
        />
        <br />
        <FormControl className={classes.textfield}>
          <InputLabel htmlFor="standard-adornment-amount">
            Nilai Pengeluaran
          </InputLabel>
          <Input
            id="standard-adornment-amount"
            type="number"
            value={expenseValue}
            onChange={(e) => {
              if (e.target.value.length <= 10) setExpenseValue(e.target.value);
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
          Tambahkan Pengeluaran
        </Button>
      </form>
    </div>
  );
};

export default SubmitExpense;
