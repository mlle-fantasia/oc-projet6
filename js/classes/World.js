import Cell from "./Cell";
import Player from "./Player";

export default class World {
	constructor(players, univers) {
		this.players = players;
		this.univers = univers;
		this.nbWeapon = this.players.length;
		this.nbObject = this.players.length;
		this.worldSizeY = 10;
		this.worldSizeX = 10;
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
			//let newPlayer = new Player(player.nom, player.ptVie);
			let newCell = new Cell(this.univers, player);
			this.updateCell(x, y, newCell);
		} else {
			this.placeOnePlayer(player);
		}
	}
	isFreeCell(x, y) {
		let cell = this.grid[x][y];
		let cellLeft,
			cellRight,
			cellTop,
			cellBottom = cell;
		if (x < this.worldSizeX - 1) cellRight = this.grid[x + 1][y];
		if (x > 0) cellLeft = this.grid[x - 1][y];
		if (y > 0) cellTop = this.grid[x][y - 1];
		if (y < this.worldSizeY - 1) cellBottom = this.grid[x][y + 1];
		if (
			cell.object.nom ||
			(cellLeft.object && cellLeft.object.nom) ||
			(cellRight.object && cellRight.object.nom) ||
			(cellTop.object && cellTop.object.nom) ||
			(cellBottom.object && cellBottom.object.nom)
		) {
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
