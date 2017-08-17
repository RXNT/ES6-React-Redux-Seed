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
          <li className="MenuItems"><a href="#">Right Menu 1</a></li>
          <li className="MenuItems"><a href="#">Right Menu 2</a></li>
          <li className="MenuItems"><a href="#">Right Menu 3</a></li>
        </ul>
        <div className="popwelcome">
          Group 2
        </div>
        <ul>
          <li className="MenuItems"><a href="#">Right Menu 4</a></li>
          <li className="MenuItems"><a href="#">Right Menu 5</a></li>
          <li className="MenuItems"><a href="#">Right Menu 6</a></li>
        </ul>
      </div>
    );
  }
}

export default SideNavRightComponent;
