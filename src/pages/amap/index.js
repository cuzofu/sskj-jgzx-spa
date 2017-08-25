export default {
  path: 'amap',
  title: 'amap',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./PageAMap'));
    }, 'amap');
  }
};
