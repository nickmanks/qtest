import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button} from 'shards-react';
import {slide as Menu} from 'react-burger-menu';
import {clearAllErrors} from '../error/actions';
import {goTo} from '../history';
import {window} from '../globals';
import './styles.scss';

const MOBILE_WIDTH = 680;

const NavBar = ({logo, onChangeLocation})=> {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_WIDTH);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(()=> {
    const listener = ({target})=> {
      const width = target?.innerWidth;

      if (width <= MOBILE_WIDTH) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', listener, true);

    return ()=> {
      window.removeEventListener('resize', listener);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="nav">
        <div className="nav-header">
          <img
            className="nav-title"
            src={logo}
            onClick={()=> {
              onChangeLocation();
              goTo('/');
            }}
          />
        </div>
        <Menu
          isOpen={menuOpen}
          onStateChange={({isOpen})=> setMenuOpen(isOpen)}
        >
          <img
            className="bm-title"
            src={logo}
            onClick={()=> {
              onChangeLocation();
              setMenuOpen(false);
              goTo('/');
            }}
          />
          <a
            className="menu-item"
            onClick={()=> {
              onChangeLocation();
              setMenuOpen(false);
              goTo('/faq');
            }}
          >
            FAQ
          </a>
        </Menu>
      </div>
    );
  }

  return (
    <div className="nav">
      <div className="nav-header">
        <img
          className="nav-title"
          src={logo}
          onClick={()=> {
            onChangeLocation();
            goTo('/');
          }}
        />
      </div>
      <div className="nav-buttons">
        <Button
          className="faq-button"
          pill
          outline
          onClick={()=> {
            onChangeLocation();
            goTo('/faq');
          }}
        >
          FAQ
        </Button>
      </div>
    </div>
  );
};
NavBar.propTypes = {
  logo: PropTypes.string,
  onChangeLocation: PropTypes.func
};

const mapStateToProps = ({app})=> ({
  logo: app.logo
});

const mapDispatchToProps = (dispatch)=> ({
  onChangeLocation: ()=> {
    dispatch(clearAllErrors());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
