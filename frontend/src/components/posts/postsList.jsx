import React, {useState} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { actionPostMakeVoteApi, actionPostDeleteApi, actionPostEdit, actionPostPreview, actionPostOrderByDate, actionPostOrderByVotes } from '../../redux/actions/src/postsActions';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import EditModal from './editModal'


const useStyles = makeStyles(theme => ({
    wrapperTable: {
      width: '78%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
      display: 'inline-block',
      paddingRight: '1%',
      paddingLeft: '1%',
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

const PostsList =  ({ posts, category = null, loading, dispatchPostMakeVoteApi, dispatchPostDeleteApi, dispatchPostEdit, dispatchPostPreview, dispatchPostOrderByDate, dispatchPostOrderByVotes }) => {

    const classes = useStyles();
    const [filter, setFilter] = useState({votes: false, date: false});

    var longToDate = function(millisec) {
        return (new Date(millisec).toUTCString());
    }

    const orderByVotes = () => {
        setFilter({...filter, votes: !filter.votes})
        dispatchPostOrderByVotes(filter.votes)
    }

    const orderByDate = () => {
        setFilter({...filter, date: !filter.date})
        dispatchPostOrderByDate(filter.date)
    }

    const renderList = () => {
        return posts.map(row => (
            <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                {row.title}
                </TableCell>
                <TableCell align="right">{row.author}</TableCell>
                <TableCell align="right">{row.commentCount}</TableCell>
                <TableCell align="right">{row.voteScore}</TableCell>
                <TableCell align="right">{longToDate(row.timestamp)}</TableCell>
                <TableCell align="right">
                    <button className={classes.actions, classes.simpleButton} onClick={() => dispatchPostMakeVoteApi(row.id, true)}>&#128077;</button>
                    <button className={classes.actions, classes.simpleButton} onClick={() => dispatchPostMakeVoteApi(row.id, false)}>&#128078;</button>
                    <button className={classes.actions, classes.simpleButton} onClick={() => dispatchPostEdit(row)}>✏️</button>
                    <Link   className={classes.actions, classes.simpleButton} onClick={() => dispatchPostPreview(row)} to={`/${row.category}/${row.id}`}>&#128269;</Link>
                    <button className={classes.actions, classes.simpleButton} onClick={() => dispatchPostDeleteApi(row.id)}>&#128465;</button>
                </TableCell>
            </TableRow>
          ))
    }

    const renderTable = () =>{
        return(
            <>
            <Paper className={classes.wrapperTable}>
                <h2 className={"textCenter"} >Posts {category? `of ${category}` : ""}</h2>
                <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="right">Author</TableCell>
                    <TableCell align="right">Number of comments</TableCell>
                    <TableCell align="right">
                        Current score 
                        <button className={classes.actions, classes.simpleButton} onClick={orderByVotes}>&#127922;</button>
                    </TableCell>
                    <TableCell align="right">
                        Date
                        <button className={classes.actions, classes.simpleButton} onClick={orderByDate}>&#127922;</button>
                        </TableCell>
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
        dispatchPostMakeVoteApi: actionPostMakeVoteApi,
        dispatchPostEdit: actionPostEdit,
        dispatchPostDeleteApi: actionPostDeleteApi,
        dispatchPostPreview: actionPostPreview,
        dispatchPostOrderByDate: actionPostOrderByDate,
        dispatchPostOrderByVotes: actionPostOrderByVotes,
    }
    )(PostsList);

//All Proptypes of this object
PostsList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          voteScore: PropTypes.number.isRequired
        })
      ),
    dispatchPostMakeVoteApi: PropTypes.func.isRequired,
    dispatchPostDeleteApi: PropTypes.func.isRequired,
    dispatchPostEdit: PropTypes.func.isRequired,
    dispatchPostPreview: PropTypes.func.isRequired,
    dispatchPostOrderByDate: PropTypes.func.isRequired,
    dispatchPostOrderByVotes: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};