import React from 'react';
import Routes from '../Routes';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { matchPath } from 'react-router';

export const render = (store, req) => {
  /* 
    1.服务器接收到请求，这个时候store是空的
    2.服务器不会执行componentDidMount，所以列表内容获取不到
    3.客户端代码运行，这个时候store也是空的
    4.客户端会执行componentDidMount，获取列表数据，更新store的内容
    5.客户端渲染出列表对应内容
   */

  // renderToString无法处理事件
  const homeContent = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SSR test</title>
      </head>
      <body>
        <div id="root">${homeContent}</div>
        <script>
          // 数据的注水
          window.context = {
            state: ${JSON.stringify(store.getState())}
          };
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `;
};

// TODO: 扩展 matchPath 方法，能够匹配多级路由
const newMatchpath = (route, url) => {
  // '/' -> '/home'
  // '/test' -> '/test/test2'
  if (route.parentPath) {
    // 处理多级路由
    const parentPath = route.parentPath === '/' ? '' : route.parentPath;
    return url === parentPath + '/' + route.path;
  } else {
    return matchPath(route, url);
  }
};

export const matchRoutesFn = (routes, url, cb) => {
  if (
    Object.prototype.toString.call(routes) !== '[object Array]' ||
    routes.length === 0
  )
    return false;

  for (let i = 0; i < routes.length; i++) {
    // matchPath 只能处理一级路由
    const match = newMatchpath(routes[i], url);
    if (match) {
      // console.log('route matched');
      cb?.(routes[i]);
      return true;
    } else if (routes[i].children) {
      // 子路由匹配的话将父路由放入matchRoute数组中
      const childrenMatch = matchRoutesFn(routes[i].children, url, cb);
      childrenMatch && cb?.(routes[i]);
    }
  }
};
