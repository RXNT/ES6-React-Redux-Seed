import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import TopNavComponent from '../uicomponents/menu/topnav.component';
import SideNavLeftComponent from '../uicomponents/menu/sidenav-left.component';
import SideNavRightComponent from '../uicomponents/menu/sidenav-right.component';
import SearchMasterContainerComponent from './search-master/search-master.component';
import AddMasterContainerComponent from './add-master/add-master.component';
import HomeContainer from './home/home.container';
import VersionMismatchComponent from './partials/version-mismatch.component';
import * as appActions from './actions';
import appConfig from '../app.config';

/**
 * Defines layout for application level component
 */
class App extends Component {
  /**
   * Attach component scope to all functions 
   * @constructor
   */
  constructor(props) {
    super(props);
    this.toggleLeftMenu = this.toggleLeftMenu.bind(this);
    this.toggleRightMenu = this.toggleRightMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  /**
   * This function toggles left menu
   */
  toggleLeftMenu() {
    this.props.actions.toggleLeftMenu(!this.props.showLeftMenu);
  }

  /**
   * This function toggles right menu
   */
  toggleRightMenu() {
    this.props.actions.toggleRightMenu(!this.props.showRightMenu);
  }

  /**
   * This function closes both left and right menu
   */
  closeMenu() {
    this.props.actions.toggleLeftMenu(false);
    this.props.actions.toggleRightMenu(false);
  }

  /**
   * Prepare layout for component which will be rendered in browser
   */
  render() {
    return (
      <Router>
        <div className="container-fluid">
          {this.props.versionConflict && <VersionMismatchComponent />}
          {!this.props.versionConflict &&
            <div>
              {this.props.showLeftMenu && <SideNavLeftComponent />}
              {this.props.showRightMenu && <SideNavRightComponent />}
              <div className="main_nav">
                <div className="navbar navbar-fixed-top">
                  <div className="navbar-inner">
                    <div className="main_menu leftmenu">
                      <a className="hideopen" onClick={this.toggleLeftMenu} tabIndex="-1">
                        <Glyphicon glyph="menu-hamburger" id="menu_toggle" tabIndex="-1" />Menu
                      </a>
                    </div>
                    <div className="rightmenu">
                      <a href="#" className="utilities" onClick={this.toggleRightMenu}
                        tabIndex="-1" >Utilities</a>
                    </div>
                    <TopNavComponent/>
                  </div>
                </div>
                <div className="subnav noPrint">
                  <div className="subnav_left">
                  </div>
                  <div className="subnav_center">{appConfig.copyRightHeader}</div>
                </div>
              </div>
              <div onClick={this.closeMenu} className="maincontent">
                <Redirect to={this.props.initialPage} />
                <Route exact path="/search" component={SearchMasterContainerComponent} />
                <Route exact path="/new" component={AddMasterContainerComponent} />
                <Route exact path="/master/:id" component={AddMasterContainerComponent} />
                <Route exact path="/" component={HomeContainer} />
              </div>
            </div>
          }
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  showLeftMenu: PropTypes.bool,
  showRightMenu: PropTypes.bool,
  versionConflict: PropTypes.bool,
  initialPage: PropTypes.string,
};

const mapStateToProps = store => (
  {
    loading: store.applicationReducer.loading,
    showLeftMenu: store.applicationReducer.showLeftMenu,
    showRightMenu: store.applicationReducer.showRightMenu,
    versionConflict: store.auth.versionConflict,
    initialPage: store.applicationReducer.initialPage,
  }
);

/**
 * This function binds actions with component
 * @param {object} dispatch - Dispatcer
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
