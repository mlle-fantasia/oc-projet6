export default function showChoicePlayer(numberPlayer) {
	let choice =
		"<div class='d-flex flex-row container-choix-player'>" +
		"<div class='d-flex flex-column checkbox-player'>" +
		"<input type='checkbox' id='player1" +
		numberPlayer +
		"' name='player1" +
		numberPlayer +
		"' hidden>" +
		"label for='player1" +
		numberPlayer +
		"' class='label-player player1'></label>" +
		"<span class='tooltiptext'>Le biker romain</span>" +
		"</div>" +
		"<input type='checkbox' id='player2" +
		numberPlayer +
		"' name='player2" +
		numberPlayer +
		"' hidden>" +
		"label for='player2" +
		numberPlayer +
		"' class='label-player player2'></label>" +
		"<span class='tooltiptext'>La guerrière à la gargouille</span>" +
		"</div>" +
		"<input type='checkbox' id='player3" +
		numberPlayer +
		"' name='player3" +
		numberPlayer +
		"' hidden>" +
		"label for='player3" +
		numberPlayer +
		"' class='label-player player3'></label>" +
		"<span class='tooltiptext'>Le pirate de l'espace</span>" +
		"</div>" +
		"<input type='checkbox' id='player4" +
		numberPlayer +
		"' name='player4" +
		numberPlayer +
		"' hidden>" +
		"label for='player4" +
		numberPlayer +
		"' class='label-player player4'></label>" +
		"<span class='tooltiptext'>L'homme des cavernes aveugle</span>" +
		"</div>" +
		"<input type='checkbox' id='player5" +
		numberPlayer +
		"' name='player5" +
		numberPlayer +
		"' hidden>" +
		"label for='player5" +
		numberPlayer +
		"' class='label-player player5'></label>" +
		"<span class='tooltiptext'>Le soldat français</span>" +
		"</div>" +
		"<input type='checkbox' id='player6" +
		numberPlayer +
		"' name='player6" +
		numberPlayer +
		"' hidden>" +
		"label for='player6" +
		numberPlayer +
		"' class='label-player player6'></label>" +
		"<span class='tooltiptext'>L'as de coeur</span>" +
		"</div>" +
		"</div>";
	return choice;
}
