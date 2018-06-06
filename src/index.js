import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div className="TitleBox">{title}</div>,
  document.getElementById('app')
);

module.hot.accept();