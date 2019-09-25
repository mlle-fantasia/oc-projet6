import Cell from "./Cell";

export default class Grid {
	constructor() {}

	generateCells(worldSizeX, worldSizeY) {
		// todo: utiliser des for pour générer  monTableau
		let grid = [];
		for (let y = 0; y < worldSizeY.length; y++) {
			const line = worldSizeY[y];
			for (let x = 0; x < worldSizeX.length; x++) {
				const cell = worldSizeX[x];
				grid.push = new cell();
			}
		}
		return grid;
		/* var monTableau = new Array(worldSizeX);
		for (var i = 0; i < worldSizeX; i++) {
			monTableau[i] = new Array(worldSizeY);
		}
		return monTableau; */
	}

	placePlayers() {}
	placeObjects() {}
	placeObstacles() {}
	updateCell(x, y, cell) {
		// todo gérer les erreurs
		monTableau[x][y] = cell;
	}
}
