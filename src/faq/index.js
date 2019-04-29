import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Container} from 'shards-react';
import Spinner from 'react-spinkit';
import Slide from 'react-reveal/Slide';
import {useService} from '../hooks';
import {setServiceError} from '../error/actions';
import faqDataService from './service';
import {loadFaqData} from './actions';
import './styles.scss';

const Faq = ({faqs, onLoadFaqData, onServiceError})=> {
  useService(faqDataService, onLoadFaqData, onServiceError);

  if (!faqs || faqs.length === 0) {
    return (
      <div className={'spinner-container'}>
        <Spinner name={'line-scale-pulse-out'} className={'spinner'} />
      </div>
    );
  }

  return (
    <Slide bottom cascade>
      <Container className={'faqs-container'}>
        {faqs.map(({title, body}, idx)=> (
          <div key={idx} className={'faq-container'}>
            <h4> {title} </h4>
            <div dangerouslySetInnerHTML={{__html: body}} />
          </div>
        ))}
      </Container>
    </Slide>
  );
};
Faq.propTypes = {
  faqs: PropTypes.array,
  onLoadFaqData: PropTypes.func,
  onServiceError: PropTypes.func
};

const mapStateToProps = ({faq})=> ({...faq});

const mapDispatchToProps = (dispatch)=> ({
  onLoadFaqData: (data)=> {
    dispatch(loadFaqData(data));
  },
  onServiceError: (err)=> {
    dispatch(setServiceError(err));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Faq);
