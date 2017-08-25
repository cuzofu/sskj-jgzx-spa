import { cloneElement } from 'react';
import Menu from 'uxcore/lib/Menu';

// `ReactRouter`文档请看  https://github.com/ReactTraining/react-router/tree/v2.8.1
import { Router, hashHistory, Link } from 'react-router';

import homeRoute from '../pages/home';
import demoRoute from '../pages/demo';
import errorRoute from '../pages/error';
import AMap from "../pages/amap/PageAMap";
import {Grid} from "uxcore/index";

// Define webpack publicPath at runtime
__webpack_public_path__ = ((s) => (
  s[s.length - 1].src.replace(/\/[^\/]+$/, '/')
))(document.getElementsByTagName('script'));

let {Row, Col} = Grid;

// `ReactRouter`文档请看  https://github.com/ReactTraining/react-router/tree/v2.8.1
const App = ({ children, location, routes }) => (
  <div>
    <Grid fluid="true">
      <Row className="show-grid">
        <Col md={12} mdPush={12}>
          <code>
            <AMap/>
          </code>
        </Col>
        <Col md={12} mdPull={12}>
          <code>
            <div className="kuma-container kuma-container-1180">
              {cloneElement(children || 'div', {
                key: location.pathname,
              })}
            </div>
          </code>
        </Col>
      </Row>
    </Grid>

  </div>
);

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: App,
    // 这里可以设置首页跳转的地址
    indexRoute: { onEnter: (nextState, replace) => replace('/home') },
    childRoutes: [
      // 新建页面时，请注意更新此处的路由
      homeRoute,
      demoRoute,
      // error因为是泛匹配，所以要放到下面
      // 不然会覆盖前面的
      errorRoute,
    ],
  }],
};

export default {
  history: hashHistory,
  Routes: (<Router history={hashHistory} routes={rootRoute} />),
};
