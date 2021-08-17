/* eslint-disable no-console */
import { React } from 'react';
import './App.scss';
import context from './core/context';
import Input from './components/text-box';
import SimpleButton from './components/simpleButton';

const App = () => {
	console.log(context.state);
	return <span className="text-box">
		<span>{Input()}</span>
		<span>{SimpleButton()}</span>
	</span>;
};

export default App;
