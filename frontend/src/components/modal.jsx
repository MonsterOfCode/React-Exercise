import React, {useState} from 'react';
import PropTypes from 'prop-types';
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


const MyModal = ({title, baseObject, fieldsToHide = null, handleClose, submit}) => {

  const classes = useStyles();
  const [object, setObject] = useState(baseObject);

  const handleSubmit = (event) => {
      submit(object)
      handleClose(false)
      event.preventDefault();
  }

  const handleChange = ({target}) => {
      setObject({...object, [target.name]: target.value})
  }

  const renderFields = () => {
    let keys = fieldsToHide ? Object.keys(baseObject).filter(field => !fieldsToHide.includes(field)) : Object.keys(baseObject)
    return keys.map(function(key, index) {
        return(
            <div key={index}>
                <p>{key}:</p>
                <input style={{width: '100%'}} type="text" value={object[key]} name={key} onChange={handleChange} />
            </div>
        )        
      });
  }

  if(!object)
    return null;

  return (
      <Modal open={true} onClose={()=>handleClose(false)}>
        <div className={classes.modal}>
          <h2 style={{textAlign: 'center'}}> {title}</h2>
            <form onSubmit={handleSubmit}>
                {renderFields()}
                <input type="submit" value="Submit" />
            </form>
        </div>
      </Modal>
  );
}


export default MyModal

//All Proptypes of this object
MyModal.propTypes = {
  title: PropTypes.string.isRequired,
  baseObject: PropTypes.object.isRequired,
  fieldsToHide: PropTypes.array,
  handleClose: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};