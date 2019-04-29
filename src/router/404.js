import React from 'react';
import {Button} from 'shards-react';
import {goTo} from '../history';
import plant from './plane.png';
import './styles.scss';

const NotFound = ()=> (
  <div className={'not-found-container'}>
    <div className={'not-found-div'}>
      <h1 className={'not-found-title'}> Unknown destination. </h1>
      <img className={'not-found-img'} src={plant} />
      <Button
        onClick={()=> goTo('/')}
        className={'not-found-button'}
        pill
        theme={'primary'}
      >
        Go Home
      </Button>
    </div>
  </div>
);

export default NotFound;
