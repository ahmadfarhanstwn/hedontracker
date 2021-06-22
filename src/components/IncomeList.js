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

const IncomeList = ({ incomeList, deleteIncome }) => {
  const classes = useStyles();

  return (
    <div className="income-list">
      <h4 className={classes.divtitle}>Data Pendapatan</h4>
      <List>
        {incomeList.map((income, id) => {
          return (
            <div>
              <div className={classes.date}>
                {id === 0 ? (
                  <h4>{income.date}</h4>
                ) : incomeList[id].date !== incomeList[id - 1].date ? (
                  <h4>{income.date}</h4>
                ) : null}
              </div>
              <ListItem key={id} className={classes.listitem}>
                <ListItemText
                  primary={income.name}
                  secondary={`Rp. ${income.value}`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={() => deleteIncome(income.id)}
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

export default IncomeList;
