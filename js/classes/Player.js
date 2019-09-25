export default class Player {
	constructor(nom, playerNum) {
		const tabVariablePlayer = { ptVie: [10, 12, 14, 10, 12, 13], force: [10, 12, 14, 10, 12, 13] };
		this.nom = nom;
		this.playerNum = playerNum;
		this.image = "player" + playerNum;
		this.imageGrid = "player" + playerNum + "figure";
		this.ptVie = tabVariablePlayer.ptVie[playerNum - 1];
	}
}
