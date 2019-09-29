import Cell from "./Cell";
import Obstacle from "./Obstacle";
import $ from "jquery";
import Player from "./Player";
import Utils from "./Utils";
import config from "../conf.json";

export default class World {
	constructor(players, univers) {
		console.log("univers", univers);
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
		this.placeObstacles();
		this.placeWeapons();
		this.placeAccessories();

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
		if (Utils.isFreePlayerCell(x, y, this.grid)) {
			//let newPlayer = new Player(player.nom, player.ptVie);
			let newCell = new Cell(this.univers, player);
			this.updateCell(x, y, newCell);
		} else {
			this.placeOnePlayer(player);
		}
	}

	placeWeapons() {
		for (let i = 0; i < this.players.length; i++) {
			this.placeOneWeapon();
		}
	}
	placeOneWeapon() {}
	placeObstacles() {
		for (let i = 0; i < config.nbObstacles; i++) {
			this.placeOneObstacle();
		}
	}
	placeOneObstacle() {
		let x = Math.floor(Math.random() * Math.floor(this.worldSizeX));
		let y = Math.floor(Math.random() * Math.floor(this.worldSizeY));
		if (Utils.isFreeCell(x, y, this.grid)) {
			let newObstacle = new Obstacle(this.univers);
			console.log(newObstacle);
			let newCell = new Cell(this.univers, newObstacle);
			this.updateCell(x, y, newCell);
		} else {
			this.placeOneObstacle();
		}
	}
	placeAccessories() {}
	/* placeOneObject(objectType, player) {
		let x = Math.floor(Math.random() * Math.floor(this.worldSizeX));
		let y = Math.floor(Math.random() * Math.floor(this.worldSizeY));
		if (Utils.isFreeCell(x, y, this.grid)) {
			let newObject;
			switch (objectType) {
				case "player":
					newObject = new Player(this.univers, player);
					break;
				case "obstacle":
					newObject = new Obstacle(this.univers);
					break;
			}
			let newCell = new Cell(this.univers, newObject);
			this.updateCell(x, y, newCell);
		} else {
			this.placeOneObject(objectType);
		}
	} */
	updateCell(x, y, cell) {
		// todo gérer les erreurs
		this.grid[x][y] = cell;
	}
}
