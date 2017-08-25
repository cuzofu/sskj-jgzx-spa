import React from 'react';
import Button from 'uxcore/lib/Button';
import './CustomLayers.less';

export default class CustomLayers extends React.Component {

  constructor(props) {
    super(props);
    this.map = props.__map__;
    this.setCity = this.setCity.bind(this);
  }

  setCity() {
    this.map.setCity('宜都市');
  }

  render() {
    return (
      <div className="custom-layer-button-lb">
        <Button onClick={this.setCity}>宜都市</Button>
      </div>
    );
  }
}
