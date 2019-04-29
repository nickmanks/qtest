import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Alert} from 'shards-react';
import {clearServiceError} from './actions';
import './styles.scss';

const ServiceAlert = ({open, message, onClearError})=> (
  <Alert
    className={'service-alert'}
    dismissible={()=> onClearError()}
    open={open}
    theme={'secondary'}
  >
    {message}
  </Alert>
);
ServiceAlert.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string,
  onClearError: PropTypes.func
};

const mapStateToProps = ({errors})=> ({
  errors: errors.errors,
  open: errors.errors && errors.errors.length > 0,
  message: errors.errors[0]
    ? `${errors.errors[0].service} Service Error: ${errors.errors[0].message}`
    : ''
});

const mapDispatchToProps = (dispatch)=> ({
  onClearError: ()=> {
    dispatch(clearServiceError());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceAlert);
