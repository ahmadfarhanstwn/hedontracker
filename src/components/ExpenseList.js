import React from "react";
import useStyles from "../useStyles";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";

const ExpenseList = ({ expenseList, deleteExpense }) => {
  const classes = useStyles();

  return (
    <div className="expense-list">
      <h4 className={classes.divtitle}>Data Pengeluaran</h4>
      <List>
        {expenseList.map((expense, id) => {
          return (
            <div>
              <div className={classes.date}>
                {id === 0 ? (
                  <h4>{expense.date}</h4>
                ) : expenseList[id].date !== expenseList[id - 1].date ? (
                  <h4>{expense.date}</h4>
                ) : null}
              </div>
              <ListItem key={id} className={classes.listitem}>
                <ListItemText
                  primary={expense.name}
                  secondary={`Rp. ${expense.value}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={() => deleteExpense(expense.id)}
                    edge="end"
                    aria-label="delete"
                    color="primary"
                  >
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </div>
          );
        })}
      </List>
    </div>
  );
};

export default ExpenseList;
