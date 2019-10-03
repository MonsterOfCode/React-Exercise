import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { actionPostEditApi } from '../../redux/actions/src/postsActions';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles(theme => ({
    modal: {
        top: '25%',
        left: '25%',
        width: '50%',
        height: '50%',
        position: 'absolute',
        backgroundColor: "#282c34",
        color: 'white',
        padding: '10px',
    }
}));

const EditModal = ({editingPost, dispatchPostEditApi}) => {

  const classes = useStyles();
  const [post, setPost] = useState(editingPost);
  const [open, setOpen] = useState(false);

  useEffect(() => {
      if(editingPost){
        setPost(editingPost)
        setOpen(true);
      }
      
  }, [editingPost]);

  const handleClose = () => {
      setPost(null)
      setOpen(false);
  };

  const handleSubmit = (event) => {
    dispatchPostEditApi(post)
    handleClose()
    event.preventDefault();
  }

  const handleChange = ({target}) => {
      setPost({...post, [target.name]: target.value})
  }


  if(!post)
    return null;

  return (
      <Modal open={open} onClose={handleClose}>
        <div className={classes.modal}>
          <h2 style={{textAlign: 'center'}}> Editing - {editingPost.title} </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Title:</p>
                    <input style={{width: '100%'}} type="text" value={post.title} name="title" onChange={handleChange} />
                </div>
                <div>
                    <p>Body:</p>
                    <input style={{width: '100%'}} type="text" value={post.body} name="body" onChange={handleChange} />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
      </Modal>
  );
}

// to get the todo object from the state inside the redux and send to the component
const mapStateToProps = state => {
    return {editingPost: state.posts.editingPost}
  }

export default connect(
    mapStateToProps, 
    {dispatchPostEditApi: actionPostEditApi}
    )(EditModal);

//All Proptypes of this object
EditModal.propTypes = {
};