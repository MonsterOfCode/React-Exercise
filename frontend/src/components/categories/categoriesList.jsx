import React from 'react';
import { connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    wrapperTable: {
      width: '18%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
      display: 'inline-block',
      paddingLeft: '1%',
      paddingRight: '1%',
    },
    table: {
    },
    actions: {
        fontSize: '14px',
        color: 'rgba(0, 0, 0, 0.87) !important'
    }
  }));

const CategoriesList =  ({ categories, loading}) => {

    const classes = useStyles();

    const renderList = () => {
        return categories.map(row => (
            <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                {row.name}
                </TableCell>
                <TableCell align="right">
                    <Link className={classes.actions} to={`/${row.name}`}>{row.path}</Link>
                </TableCell>
            </TableRow>
          ))
    }

    const renderTable = () =>{
        return(
            <Paper className={classes.wrapperTable}>
                <h2 className={"textCenter"} >Categories</h2>
                <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Path</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderList()}
                </TableBody>
                </Table>
            </Paper>
        )
    }

    return categories.length ? renderTable() : <p className={classes.wrapperTable}>No categories available</p>
}

// to get the todo object from the state inside the redux and send to the component
const mapStateToProps = state => {
    return {categories: state.categories.list, loading: state.categories.loading}
  }

export default connect(
    mapStateToProps, 
    null
    )(CategoriesList);

//All Proptypes of this object
CategoriesList.propTypes = {
};