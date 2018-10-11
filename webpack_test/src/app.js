import a from './a';
import b from './b';

import React from 'react';
import ReactDom from 'react-dom';

a();
b();

ReactDom.render(
	<div>React</div>,
	document.getElementById('root')
);