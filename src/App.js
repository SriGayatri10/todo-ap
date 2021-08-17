/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import context from './core/context';
import Input from './components/text-box';

const App = () => {
	console.log(context.state);
	return <div className="text-box">
		<div>{Input()}</div>
	</div>;
};

export default App;
