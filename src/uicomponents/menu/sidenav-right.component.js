import React, { Component } from 'react';

class SideNavRightComponent extends Component {
  render() {
    return (
      <div className="leftpopmenu popoutUtility" id="divMainRight">
        <a className="poplefthome" href="/#">RxNT Home</a>
        <div className="popwelcome">
          Group 1
        </div>
        <ul>
          <li className="MenuItems"><a href="#">Menu 1</a></li>
          <li className="MenuItems"><a href="#">Menu 2</a></li>
          <li className="MenuItems"><a href="#">Menu 3</a></li>
        </ul>
        <div className="popwelcome">
          Group 2
        </div>
        <ul>
          <li className="MenuItems"><a href="#">Menu 4</a></li>
          <li className="MenuItems"><a href="#">Menu 5</a></li>
          <li className="MenuItems"><a href="#">Menu 6</a></li>
        </ul>
      </div>
    );
  }
}

export default SideNavRightComponent;
