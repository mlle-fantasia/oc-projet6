import App from "./App";
import "../style/index.scss";
import $ from "jquery";
import Player from "./classes/Player";
import Weapon from "./classes/Weapon";
import Potion from "./classes/Potion";
import Armor from "./classes/Armor";
import choicePlayerHTML from "../choixPlayer.js";

let app = new App(2, "forest");
console.log("app", app.grid);
let nbPlayer = 0;
let univers = "";

$(document).ready(function() {
	let newGrid = $("<div class='grid'></div>");
	$(".world").append($(newGrid));
	console.log("width test", $(".world").width() / 10);
	render(app.grid);
	$("#nbPlayer").change(() => {
		nbPlayer = $("#nbPlayer").val();
		if (nbPlayer > 1 && nbPlayer < 7) {
			showPlayerChoice(nbPlayer);
		}
	});
});
function showPlayerChoice(nbPlayer) {
	if ($(".container-choix-one-player").length) {
		$(".container-choix-one-player").remove();
	}
	for (let i = 0; i < nbPlayer; i++) {
		let container = $("<div class='container-choix-one-player'></div>");
		let title = $("<h2>Joueur " + (i + 1) + "</h2>");
		let name = $("<label for='player" + i + "'>Votre nom</label> <input type='text' id='player" + i + "' name='player" + i + "'></input>");
		let choice = showChoicePlayer(i + 1);
		container.append($(title));
		container.append($(name));
		container.append($(choice));
		$(".section-choix-player").append(container);
	}
}
function render(grid) {
	let cellSize = $(".world").width() / grid.length;
	let style = "grass";
	for (let y = 0; y < grid.length; y++) {
		const line = grid[y];
		let newLine = $("<div class='" + style + " line'></div>");
		$(".grid").append(newLine);
		for (let x = 0; x < line.length; x++) {
			const cell = line[x];
			let newCase = $("<div class='case' style='width:" + cellSize + "px;height:" + cellSize + "px'></div>");
			console.log("cell.object", cell.object instanceof Player);
			if (cell.object instanceof Player) {
				renderPlayer(cell, newCase);
			}
			if (cell.object instanceof Armor) {
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
	let image = $("<img src='./marina-p6/images/player1.jpg' alt='player'>");
	newCase.append(image);
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
		"</div>";
	return choice;
}
