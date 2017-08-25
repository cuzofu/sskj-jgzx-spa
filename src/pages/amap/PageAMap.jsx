import {Component, Link} from "refast";
import React from "react";
import {withRouter} from "react-router";
import {Map} from "react-amap";
import "./PageAMap.less"
import CustomLayers from "components/amap-custom-layers";
import MyMenu from "../../components/amap-custom-layers/menu/MyMenu";

class PageAMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="amap-containaer">
        <Map>
          <CustomLayers/>
          <MyMenu/>
        </Map>
      </div>
    );
  }
}

export default withRouter(PageAMap);
