import React from 'react';
import { Router, hashHistory, Link } from 'react-router';
import './MyMenu.less';

export default class MyMenu extends React.Component {

  constructor(props) {
    super(props);
    this.map = props.__map__;
  }

  render() {
    return (
      <div className="custom-layer-button-rt nav-div">
        <ul>
          <li key="01"><Link to={'/demo'} >基础数据库</Link></li>
          <li key="02"><Link to={'/demo'} >项目工程</Link></li>
          <li key="03"><Link to={'/home'} >项目中心</Link></li>
          <li key="04"><Link to={'/home'} >公用设施</Link></li>
          <li key="05"><Link to={`/${Math.random().toString(32).slice(2)}`} >其他科室</Link></li>
          <li key="06"><Link to={`/${Math.random().toString(32).slice(2)}`} >设置</Link></li>
        </ul>
      </div>
    );
  }

}
