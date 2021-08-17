import { React } from 'react';
// import config from '../core/config';
import context from '../core/context';

const SimpleButton = () =>
	<button
		onClick={ () => context.actions.Add() }
	>
		Add
	</button>;

export default SimpleButton;
