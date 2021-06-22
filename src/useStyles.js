import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 450,
    backgroundColor: "#fee2f8",
    backgroundImage: "linear-gradient(315deg, #fee2f8 0%, #dcf8ef 74%)",
    margin: "0 auto",
    padding: "10px",
    fontFamily: "monospace",
  },
  textfield: {
    margin: theme.spacing(1),
    width: "93%",
    fontFamily: "monospace",
  },
  button: {
    margin: theme.spacing(1),
    width: "93%",
    fontFamily: "monospace",
  },
  list: {
    backgroundColor: "blue",
  },
  title: {
    fontFamily: "monospace",
    fontSize: "40px",
    fontWeight: 800,
    lineHeight: "56px",
    textAlign: "center",
    color: "#3f51b5",
  },
  amount: {
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
    boxShadow: "#000",
    "& div": {
      flex: 1,
      textAlign: "center",
      borderRight: "1px solid #dedede",
    },
    "& div:first-of-type": {
      borderLeft: "1px solid #dedede",
    },
  },
  h4: {
    fontSize: "15px",
    fontWeight: 800,
    color: "#3f51b5",
  },
  money: {
    fontSize: "15px",
    letterSpacing: "1px",
  },
  moneyincome: {
    color: "#2ecc71",
  },
  moneyexpense: {
    color: "#c0392b",
  },
  divtitle: {
    fontSize: "20px",
    fontWeight: 800,
    textAlign: "center",
    color: "#3f51b5",
  },
  listitem: {
    "&.MuiListItemText-primary": {
      fontFamily: "monospace",
    },
  },
  date: {
    fontSize: "15px",
    fontWeight: 800,
    color: "#3f51b5",
    marginLeft: "15px",
  },
}));

export default useStyles;
