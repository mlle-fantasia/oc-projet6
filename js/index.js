import App from "./App";
import "../style/index.scss";
import $ from "jquery";
import Player from "./classes/Player";
import Weapon from "./classes/Weapon";
import Potion from "./classes/Potion";
import Obstacle from "./classes/Obstacle";
import choicePlayerHTML from "../choixPlayer.js";

let nbPlayer = 0;
let players = [];
let univers = "";

$(document).ready(function() {
	$("#nbPlayer").change(() => {
		nbPlayer = $("#nbPlayer").val();
		if (nbPlayer > 1 && nbPlayer < 5) {
			showPlayerChoice(nbPlayer);
		}
		for (let index = 1; index <= nbPlayer; index++) {
			$("#btn-valider-player" + index).click(() => {
				validPlayer(index + "");
			});
		}
	});

	$("#btn-start-game").click(() => {
		univers = $("input[type=radio][name=univers]:checked").val();
		let newGrid = $("<div class='grid " + univers + "'></div>");
		$(".world").append($(newGrid));
		console.log("player, univers", players, univers);
		if (players && univers) {
			let app = new App(players, univers);
			render(app.grid);
		}
	});
});
function showPlayerChoice(nbPlayer) {
	if ($(".container-choix-one-player").length) {
		$(".container-choix-one-player").remove();
	}
	for (let i = 1; i <= nbPlayer; i++) {
		let container = $("<div class='container-choix-one-player'></div>");
		let sousContainer = $("<div class='container-choix-one-player" + i + "'></div>");
		container.append($(sousContainer));
		let title = $("<h2>Joueur " + i + "</h2>");
		let name = $("<label for='player" + i + "'>Votre nom</label> <input type='text' id='player" + i + "name' name='player" + i + "'></input>");
		let choice = showChoicePlayer(i);
		sousContainer.append($(title));
		sousContainer.append($(name));
		sousContainer.append($(choice));
		$(".section-choix-player").append(sousContainer);
	}
}
function render(grid) {
	let cellSize = $(".world").width() / grid.length;
	for (let y = 0; y < grid.length; y++) {
		const line = grid[y];
		let newLine = $("<div class='line'></div>");
		$(".grid").append(newLine);
		for (let x = 0; x < line.length; x++) {
			const cell = line[x];
			let newCase = $("<div class='case ' style='width:" + cellSize + "px;height:" + cellSize + "px'></div>");
			if (cell.object instanceof Player) {
				renderPlayer(cell, newCase);
			}
			if (cell.object instanceof Obstacle) {
				renderPlayer(cell, newCase);
			}
			if (cell.object instanceof Weapon) {
			}
			if (cell.object instanceof Potion) {
			}

			newLine.append(newCase);
		}
	}
}

function renderPlayer(cell, newCase) {
	console.log("Cell", cell);
	//let image = $("<img src='../images/player1.jpg' alt='player'>");
	let image = $("<div class='img-player-grid " + cell.object.imageGrid + " '></div>");
	newCase.append(image);
}

function validPlayer(numPlayer) {
	//let playerName = $("#player" + numPlayer + "name").val();
	//let playerHero = $("input[type=radio][name=player" + numPlayer + "]:checked").val();
	let playerName = "Marina";
	let playerHero = 2;
	//playerHero = playerHero.substr(playerHero.length - 2);
	//playerHero = playerHero.substr(0, 1);
	let player = new Player(playerName, playerHero);
	players.push(player);
	$(".container-choix-one-player" + numPlayer).slideUp();
}
function showChoicePlayer(playerNumber) {
	let choice =
		"<div class='d-flex flex-row container-choix-player'>" +
		"<div class='d-flex flex-column checkbox-player'>" +
		"<input type='radio' id='player1" +
		playerNumber +
		"' name='player" +
		playerNumber +
		"' value='player1" +
		playerNumber +
		"' hidden>" +
		"<label for='player1" +
		playerNumber +
		"' class='label-player player1'></label>" +
		"<span class='tooltiptext'>Le biker romain</span>" +
		"</div>" +
		"<div class='d-flex flex-column checkbox-player'>" +
		"<input type='radio' id='player2" +
		playerNumber +
		"' name='player" +
		playerNumber +
		"' value='player2" +
		playerNumber +
		"' hidden>" +
		"<label for='player2" +
		playerNumber +
		"' class='label-player player2'></label>" +
		"<span class='tooltiptext'>La guerrière à la gargouille</span>" +
		"</div>" +
		"<div class='d-flex flex-column checkbox-player'>" +
		"<input type='radio' id='player3" +
		playerNumber +
		"' name='player" +
		playerNumber +
		"' value='player3" +
		playerNumber +
		"' hidden>" +
		"<label for='player3" +
		playerNumber +
		"' class='label-player player3'></label>" +
		"<span class='tooltiptext'>Le pirate de l'espace</span>" +
		"</div>" +
		"<div class='d-flex flex-column checkbox-player'>" +
		"<input type='radio' id='player4" +
		playerNumber +
		"' name='player" +
		playerNumber +
		"' value='player4" +
		playerNumber +
		"' hidden>" +
		"<label for='player4" +
		playerNumber +
		"' class='label-player player4'></label>" +
		"<span class='tooltiptext'>L'homme des cavernes aveugle</span>" +
		"</div>" +
		"<div class='d-flex flex-column checkbox-player'>" +
		"<input type='radio' id='player5" +
		playerNumber +
		"' name='player" +
		playerNumber +
		"' value='player5" +
		playerNumber +
		"' hidden>" +
		"<label for='player5" +
		playerNumber +
		"' class='label-player player5'></label>" +
		"<span class='tooltiptext'>Le soldat français</span>" +
		"</div>" +
		"<div class='d-flex flex-column checkbox-player'>" +
		"<input type='radio' id='player6" +
		playerNumber +
		"' name='player" +
		playerNumber +
		"' value='player6" +
		playerNumber +
		"' hidden>" +
		"<label for='player6" +
		playerNumber +
		"' class='label-player player6'></label>" +
		"<span class='tooltiptext'>L'as de coeur</span>" +
		"</div>" +
		"</div>" +
		"<button class='form-control btn-valider-player my-3' id='btn-valider-player" +
		playerNumber +
		"'>Prêt</button>";
	return choice;
}
