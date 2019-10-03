import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { actionGetAllPostsApi, actionPostMakeVoteApi, actionPostDeleteApi, actionPostEdit } from '../../redux/actions/src/postsActions';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import EditModal from './editModal'


const useStyles = makeStyles(theme => ({
    wrapperTable: {
      width: '50%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
    actions: {
        display: 'inline-block',
        cursor: 'pointer'
    },
    simpleButton:{
        background: 'none',
        border: 'none',
        fontSize: 'x-large'
    }
  }));

const PostsList =  ({ posts, loading, dispatchGetAllPostsApi, dispatchPostMakeVoteApi, dispatchPostDeleteApi, dispatchPostEdit }) => {

    const classes = useStyles();

    useEffect(() => {
        console.log("mount")
        dispatchGetAllPostsApi()
      }, []);


    const renderList = () => {
        return posts.map(row => (
            <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                {row.title}
                </TableCell>
                <TableCell align="right">{row.author}</TableCell>
                <TableCell align="right">{row.commentCount}</TableCell>
                <TableCell align="right">{row.voteScore}</TableCell>
                <TableCell align="right">
                    <button className={classes.actions, classes.simpleButton} onClick={() => dispatchPostMakeVoteApi(row.id, true)}>&#128077;</button>
                    <button className={classes.actions, classes.simpleButton} onClick={() => dispatchPostMakeVoteApi(row.id, false)}>&#128078;</button>
                    <button className={classes.actions, classes.simpleButton} onClick={() => dispatchPostEdit(row)}>✏️</button>
                    <button className={classes.actions, classes.simpleButton} onClick={() => dispatchPostDeleteApi(row.id)}>🗑</button>
                </TableCell>
            </TableRow>
          ))
    }

    const renderTable = () =>{
        return(
            <>
            <Paper className={classes.wrapperTable}>
                <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="right">Author</TableCell>
                    <TableCell align="right">Number of comments</TableCell>
                    <TableCell align="right">Current score</TableCell>
                    <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderList()}
                </TableBody>
                </Table>
            </Paper>
            <EditModal/>
            </>
        )
    }

    return posts.length ? renderTable() : <p className={classes.wrapperTable}>No posts available</p>
}

// to get the todo object from the state inside the redux and send to the component
const mapStateToProps = state => {
    return {posts: state.posts.list, loading: state.posts.loading}
  }

export default connect(
    mapStateToProps, 
    {
        dispatchGetAllPostsApi: actionGetAllPostsApi,
        dispatchPostMakeVoteApi: actionPostMakeVoteApi,
        dispatchPostEdit: actionPostEdit,
        dispatchPostDeleteApi: actionPostDeleteApi,
    }
    )(PostsList);

//All Proptypes of this object
PostsList.propTypes = {
};