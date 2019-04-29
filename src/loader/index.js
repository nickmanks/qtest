import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useService} from '../hooks';
import appDataService from './service';
import {loadAppData} from './actions';
import {setServiceError} from '../error/actions';

const AppLoader = ({onAppDataLoaded, onServiceError})=> {
  useService(appDataService, onAppDataLoaded, onServiceError);

  return null;
};
AppLoader.propTypes = {
  onAppDataLoaded: PropTypes.func,
  onServiceError: PropTypes.func
};

const mapStateToProps = ()=> ({});

const mapDispatchToProps = (dispatch)=> ({
  onAppDataLoaded: (data)=> {
    dispatch(loadAppData(data));
  },
  onServiceError: (err)=> {
    dispatch(setServiceError(err));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppLoader);
