import React, {useEffect} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { actionCommentsGetByPostApi, actionCommentMakeVoteApi, actionCommentDeleteApi } from '../../redux/actions';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


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
    simpleButton:{
        background: 'none',
        border: 'none',
        fontSize: 'x-large',
        textDecoration: 'none !important',
        cursor: 'pointer',
    }
  }));

const CommentsList =  ({ handlerNew, comments, post = null, loading, dispatchCommentsGetByPostApi, dispatchCommentMakeVoteApi, dispatchCommentDeleteApi }) => {

    const classes = useStyles();

    useEffect(() => {
        dispatchCommentsGetByPostApi(post.id)
    }, []);

    const renderList = () => {
        return comments.map(row => (
            <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                {row.author}
                </TableCell>
                <TableCell align="right">{row.body}</TableCell>
                <TableCell align="right">{row.voteScore}</TableCell>
                <TableCell align="right">
                    <button className={classes.simpleButton} onClick={() => dispatchCommentMakeVoteApi(row.id, true)}>&#128077;</button>
                    <button className={classes.simpleButton} onClick={() => dispatchCommentMakeVoteApi(row.id, false)}>&#128078;</button>
                    <button className={classes.simpleButton} onClick={() => dispatchCommentDeleteApi(row.id)}>&#128465;</button>
                </TableCell>
            </TableRow>
          ))
    }

    const renderTable = () =>{
        return(
            <>
            <Paper className={classes.wrapperTable}>
                <div className={"textCenter positionRelative"}>
                    <h2 className={"inlineBlock floatLeft"}><button className={classes.simpleButton} onClick={() => handlerNew(true)}>&#10133;</button></h2>
                    <h2 className={"inlineBlock"} >Comments</h2>
                </div>
                <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                    <TableCell align="right">Author</TableCell>
                    <TableCell align="right">body</TableCell>
                    <TableCell align="right">voteScore</TableCell>
                    <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderList()}
                </TableBody>
                </Table>
            </Paper>
            </>
        )
    }

    return comments.length ? renderTable() : <div className={classes.wrapperTable}>
                                                <h2 className={"inlineBlock floatLeft marginq10"}><button className={classes.simpleButton} onClick={() => handlerNew(true)}>&#10133;</button></h2>
                                                <p>No comments available</p>
                                            </div>
}

// to get the todo object from the state inside the redux and send to the component
const mapStateToProps = state => {
    return {comments: state.posts.comments.list, loading: state.posts.comments.loading}
  }

export default connect(
    mapStateToProps, 
    {
        dispatchCommentsGetByPostApi: actionCommentsGetByPostApi,
        dispatchCommentMakeVoteApi: actionCommentMakeVoteApi,
        dispatchCommentDeleteApi: actionCommentDeleteApi,
    }
    )(CommentsList);

//All Proptypes of this object
CommentsList.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
          voteScore: PropTypes.number.isRequired
        })
      ),
    dispatchCommentsGetByPostApi: PropTypes.func.isRequired,
    dispatchCommentMakeVoteApi: PropTypes.func.isRequired,
    dispatchCommentDeleteApi: PropTypes.func.isRequired,
    handlerNew: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};