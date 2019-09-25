import Cell from "./Cell";
import Player from "./Player";

export default class World {
	constructor(players, univers) {
		this.players = [{ nom: "machin", ptVie: 10 }, { nom: "truc", ptVie: 12 }];
		this.univers = univers;
		this.nbWeapon = this.players.length;
		this.nbObject = this.players.length;
		this.worldSizeY = this.players.length * 5;
		this.worldSizeX = this.players.length * 5;
		this.grid = [];
	}
	generateWorld() {
		for (let y = 0; y < this.worldSizeY; y++) {
			let line = [];
			for (let x = 0; x < this.worldSizeX; x++) {
				line.push(new Cell(this.univers, {}));
			}
			this.grid.push(line);
		}
		this.placePlayers();
		console.log("grid", this.grid);
		return this.grid;
	}

	placePlayers() {
		for (let i = 0; i < this.players.length; i++) {
			const player = this.players[i];
			this.placeOnePlayer(player);
		}
	}
	placeOnePlayer(player) {
		let x = Math.floor(Math.random() * Math.floor(this.worldSizeX));
		let y = Math.floor(Math.random() * Math.floor(this.worldSizeY));
		if (this.isFreeCell(x, y)) {
			let newPlayer = new Player(player.nom, player.ptVie);
			let newCell = new Cell(this.univers, newPlayer);
			this.updateCell(x, y, newCell);
		} else {
			console.log("je repasse");
			this.placeOnePlayer(player);
		}
	}
	isFreeCell(x, y) {
		let cell = this.grid[x][y];
		if (cell.object.nom) {
			return false;
		} else {
			return true;
		}
	}
	placeObjects() {}
	placeObstacles() {}
	updateCell(x, y, cell) {
		// todo gérer les erreurs
		this.grid[x][y] = cell;
	}
}
