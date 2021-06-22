import React from "react";
import useStyles from "../useStyles";

const TotalAmount = ({ totalIncome, totalExpense }) => {
  const classes = useStyles();

  return (
    <div className={classes.amount}>
      <div>
        <h4 className={classes.h4}>Pendapatan</h4>
        <p className={`${classes.money} ${classes.moneyincome}`}>
          Rp.{totalIncome}
        </p>
      </div>
      <div>
        <h4 className={classes.h4}>Pengeluaran</h4>
        <p className={`${classes.money} ${classes.moneyexpense}`}>
          Rp.{totalExpense}
        </p>
      </div>
      <div>
        <h4 className={classes.h4}>Total Saldo</h4>
        <p className={classes.money}>Rp.{totalIncome - totalExpense}</p>
      </div>
    </div>
  );
};

export default TotalAmount;
