import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button} from 'shards-react';
import Spinner from 'react-spinkit';
import {Container, Row, Col} from 'shards-react';
import {useService} from '../hooks';
import homeDataService from './service';
import {loadHomeData} from './actions';
import {setServiceError, clearAllErrors} from '../error/actions';
import {goTo} from '../history';
import './styles.scss';

// eslint-disable-next-line complexity
const Home = ({
  errors,
  title,
  description,
  dealImg,
  hero,
  onLoadHomeData,
  onServiceError,
  onChangeLocation
})=> {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [dealLoaded, setDealLoaded] = useState(false);

  useService(homeDataService, onLoadHomeData, onServiceError);

  const contentLoaded =
    hero && title && description && imageLoaded && dealLoaded;

  return (
    <Fragment>
      <Container fluid className={'h-100'}>
        <Row noGutters className={'h-100'}>
          <Col lg="6" md="10" className={'mx-auto my-auto'}>
            {!contentLoaded && (
              <div className={'spinner-container'}>
                <Spinner name={'line-scale-pulse-out'} className={'spinner'} />
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <img
        className={'hero-image'}
        src={hero}
        onLoad={()=> setImageLoaded(true)}
      />
      <div
        className={'home-container'}
        style={{opacity: contentLoaded ? 1 : 0}}
      >
        <div className={'heading-container'}>
          {contentLoaded && (
            <Fragment>
              <h1
                className={errors.length > 0 ? 'heading-error' : 'home-heading'}
              >
                {title}
              </h1>
              <h5 className={'home-description'}> {description} </h5>
              <Button
                pill
                className={'home-button'}
                onClick={()=> {
                  onChangeLocation();
                  goTo('/faq');
                }}
              >
                Questions
              </Button>
            </Fragment>
          )}
          <img
            className={'home-image'}
            src={dealImg}
            onLoad={()=> setDealLoaded(true)}
          />
        </div>
      </div>
    </Fragment>
  );
};
Home.propTypes = {
  errors: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  loaded: PropTypes.bool,
  hero: PropTypes.string,
  dealImg: PropTypes.string,
  onLoadHomeData: PropTypes.func,
  onServiceError: PropTypes.func,
  onChangeLocation: PropTypes.func
};

const mapStateToProps = ({errors, home, app})=> ({
  ...home,
  ...app,
  ...errors
});

const mapDispatchToProps = (dispatch)=> ({
  onLoadHomeData: (data)=> {
    dispatch(loadHomeData(data));
  },
  onServiceError: (err)=> {
    dispatch(setServiceError(err));
  },
  onChangeLocation: ()=> {
    dispatch(clearAllErrors());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
