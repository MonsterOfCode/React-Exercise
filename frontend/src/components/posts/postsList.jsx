import React, {useState} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { actionPostMakeVoteApi, actionPostDeleteApi, actionPostEditApi, actionPostPreview, actionPostOrderByDate, actionPostOrderByVotes, actionPostCreateApi } from '../../redux/actions/src/postsActions';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import MyModal from '../modal';
import uuid from "uuid";
import { millisecondsToDate } from '../../utils/dates';

const useStyles = makeStyles(theme => ({
    wrapperTable: {
      width: '78%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
      display: 'inline-block',
      marginRight: '1%',
      marginLeft: '1%',
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

const postBase = {
    "id": null,
    "timestamp": Date.now(),
    "title": "",
    "body": "",
    "author": "",
    "category": null
}
const postBaseHide = ["id", "timestamp", "category", "deleted", "commentCount", "voteScore"]


const PostsList =  ({ posts, category = null, loading, dispatchPostMakeVoteApi, dispatchPostDeleteApi, dispatchPostEditApi, dispatchPostPreview, dispatchPostOrderByDate, dispatchPostOrderByVotes, dispatchPostCreateApi }) => {

    const classes = useStyles();
    const [filter, setFilter] = useState({votes: false, date: false});
    const [renderCreate, setRenderCreate] = useState(false);
    const [renderEdite, setRenderEdite] = useState(false);
    const [editingPost, setEditingPost] = useState(false);
	
	const toggleCreateModal = action => {
		setRenderCreate(action)
    }
    
    const toggleEditModal = action => {
		setRenderEdite(action)
	}

    const orderByVotes = () => {
        setFilter({...filter, votes: !filter.votes})
        dispatchPostOrderByVotes(filter.votes)
    }

    const orderByDate = () => {
        setFilter({...filter, date: !filter.date})
        dispatchPostOrderByDate(filter.date)
    }

    const newPost = post => {
        dispatchPostCreateApi(post)
    }

    const editPost = post => {
        dispatchPostEditApi(post)
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
                <TableCell align="right">{millisecondsToDate(row.timestamp)}</TableCell>
                <TableCell align="right">
                    <button className={classes.actions, classes.simpleButton} onClick={() => dispatchPostMakeVoteApi(row.id, true)}>&#128077;</button>
                    <button className={classes.actions, classes.simpleButton} onClick={() => dispatchPostMakeVoteApi(row.id, false)}>&#128078;</button>
                    <button className={classes.actions, classes.simpleButton} onClick={() => { setEditingPost(row); toggleEditModal(true)}}>✏️</button>
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
                <div className={"textCenter positionRelative"}>
                    {category && <h2 className={"inlineBlock floatLeft"}><button className={classes.simpleButton} onClick={() =>toggleCreateModal(true)}>&#10133;</button></h2>}
                    <h2 className={"inlineBlock"} >Posts {category? `of ${category}` : ""}</h2>
                </div>
                <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="right">Author</TableCell>
                    <TableCell align="right">Number of comments</TableCell>
                    <TableCell align="right">
                        Current score 
                        <button className={classes.actions, classes.simpleButton} onClick={orderByVotes}>&#11014;&#11015;</button>
                    </TableCell>
                    <TableCell align="right">
                        Date
                        <button className={classes.actions, classes.simpleButton} onClick={orderByDate}>&#11014;&#11015;</button>
                        </TableCell>
                    <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {renderList()}
                </TableBody>
                </Table>
            </Paper>
            {/* <EditModal/> */}
            </>
        )
    }

    const renderContent = () => posts.length ? renderTable() : <div className={classes.wrapperTable}>
                                            {category && <h2 className={"inlineBlock floatLeft marginq10"}><button className={classes.simpleButton} onClick={() =>toggleCreateModal(true)}>&#10133;</button></h2>}
                                            <p>No posts available</p>
                                        </div>

    const myRender = () => {
        return(
            <>
                {renderContent()}
                {renderCreate && <MyModal 
                    title={`${category} - New Post`} 
                    baseObject={{...postBase, id: uuid.v4(), category: category}} 
                    fieldsToHide={postBaseHide}
                    handleClose={toggleCreateModal} 
                    submit={newPost}/>}

                {renderEdite && <MyModal 
                    title={`Editing - ${editingPost.title}`} 
                    baseObject={editingPost} 
                    fieldsToHide={[...postBaseHide, "author"]}
                    handleClose={toggleEditModal} 
                    submit={editPost}/>}
            </>
        )
    }

    return myRender()
}

// to get the todo object from the state inside the redux and send to the component
const mapStateToProps = state => {
    return {posts: state.posts.list, loading: state.posts.loading}
  }

export default connect(
    mapStateToProps, 
    {
        dispatchPostMakeVoteApi: actionPostMakeVoteApi,
        dispatchPostEditApi: actionPostEditApi,
        dispatchPostDeleteApi: actionPostDeleteApi,
        dispatchPostPreview: actionPostPreview,
        dispatchPostOrderByDate: actionPostOrderByDate,
        dispatchPostOrderByVotes: actionPostOrderByVotes,
        dispatchPostCreateApi: actionPostCreateApi,
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
    dispatchPostEditApi: PropTypes.func.isRequired,
    dispatchPostPreview: PropTypes.func.isRequired,
    dispatchPostOrderByDate: PropTypes.func.isRequired,
    dispatchPostOrderByVotes: PropTypes.func.isRequired,
    dispatchPostCreateApi: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};