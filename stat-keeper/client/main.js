import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

const renderPlayers = function (playersList) {
	return playersList.map(function (player) {
		return <p key={player._id}>{player.name} has {player.score} point(s)!</p>;
	});
};

const handleSubmit = function (e) {
	let playerName = e.target.playerName.value;
	e.preventDefault();
	if (playerName) {
		e.target.playerName.value = '';
		Players.insert({
			name: playerName,
			score: 0
		});
	};
};

/*Meteor.startup will run when the DOM is ready here, Tracker will execute whenever something changes in the database.*/
Meteor.startup(function () {
	Tracker.autorun(function () {
		let players = Players.find().fetch();
		let title = "Score Keep";
		let name = 'Mark Sedlazek';
		let jsx = (
			<div>
				<h1>{title}</h1>
				<p>Hello {name}!</p>
				<p>Here are the players we are tracking.</p>
				{renderPlayers(players)}
				<form onSubmit={handleSubmit}>
					<input type="text" name="playerName" placeholder="Player Name"/>
					<button>Add Player</button>
				</form>
			</div>
		);
		ReactDOM.render(jsx, document.getElementById('app'));	
	});
	console.log(Players.find().fetch());
});