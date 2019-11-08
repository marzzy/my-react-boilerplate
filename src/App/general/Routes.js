import React from 'react';

import Home from '../pages/Home/Home';
import Todo from '../pages/Todo/Todo';
import News from '../pages/News/News';

// Dont know why but 'Home page' should always be the array last child
// unless the item after that dosent work :D
export default [
  {
    id: 3,
    path: '/news',
    name: 'news page',
    component: <News />,
  },
  {
    id: 2,
    path: '/todo',
    name: 'todo page',
    component: <Todo />,
  },
  {
    id: 1,
    path: '/',
    name: 'home page',
    component: <Home />,
  },
];
