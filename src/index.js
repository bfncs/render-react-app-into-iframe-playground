import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const iframe = document.createElement('iframe');
document.body.appendChild(iframe);

const iframeDocument = iframe.contentDocument;
const root = iframeDocument.createElement('div');
iframeDocument.body.appendChild(root);

ReactDOM.render(
	<App />,
	root,
);
