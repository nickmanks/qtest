import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import favicon from '../favicon.png';

const Render = ({title, component: Component})=> (
  <Fragment>
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href={favicon} type="image/ico" />
    </Helmet>
    <Component />
  </Fragment>
);
Render.propTypes = {
  title: PropTypes.string,
  component: PropTypes.any
};

export default Render;
