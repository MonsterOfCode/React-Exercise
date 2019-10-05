import React from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const plugins = [
    {
        "id": 1,
        "name": "Redux",
        "reason": "It helps you write applications that behave consistently with a single source of truth",
        "url": "https://redux.js.org/introduction/getting-started"
    },
    {
        "id": 2,
        "name": "React Router",
        "reason": "React Router is a collection of navigational components that compose a way to navigate in your application",
        "url": "https://reacttraining.com/react-router/"
    },
    {
        "id": 3,
        "name": "Immer",
        "reason": "Immer is a tiny package that allows you to work with immutable state in a more convenient way",
        "url": "https://immerjs.github.io/immer/docs/introduction"
    },
    {
        "id": 4,
        "name": "Redux Observable",
        "reason": "Compose and cancel async actions to create side effects and more.",
        "url": "https://redux-observable.js.org/"
    },
]

const useStyles = makeStyles(theme => ({
    wrapperTable: {
      width: '80%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
      display: 'inline-block',
      marginRight: '10%',
      marginLeft: '10%',
    },
    table: {
      minWidth: 650,
    },
    link: {
        fontSize: '14px',
        color: 'rgba(0, 0, 0, 0.87) !important'
    }
  }));

const About =  () => {

    const classes = useStyles();

    const renderList = () => {
        return plugins.map(row => (
            <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                <a className={classes.link} href={row.url} target="_black">{row.name}</a>
                </TableCell>
                <TableCell align="right">{row.reason}</TableCell>
            </TableRow>
          ))
    }

  return (
    <Paper className={classes.wrapperTable}>
        <div className={"textCenter positionRelative"}>
            <h2 className={"inlineBlock"} >Plugins</h2>
        </div>
        <Table className={classes.table}>
        <TableHead>
            <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Utility</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {renderList()}
        </TableBody>
        </Table>
    </Paper>
  );
}


export default About