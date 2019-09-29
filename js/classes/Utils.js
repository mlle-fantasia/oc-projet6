export default class Utils {
	constructor() {}
	static isFreeCell(x, y, grid) {
		let cell = grid[x][y];
		if (cell.object.type) {
			return false;
		} else {
			return true;
		}
	}
	static isFreePlayerCell(x, y, grid) {
		// pour un grille carrée
		let cellEmpty = this.isFreeCell(x, y, grid);
		if (!cellEmpty) return false;
		let cell = grid[x][y];
		let cellLeft, cellRight, cellTop, cellBottom;
		x > 0 ? (cellLeft = grid[x - 1][y]) : (cellLeft = grid[x][y]);
		x < grid.length - 1 ? (cellRight = grid[x + 1][y]) : (cellRight = grid[x][y]);
		y > 0 ? (cellTop = grid[x][y - 1]) : (cellTop = grid[x][y]);
		y < grid.length - 1 ? (cellBottom = grid[x][y + 1]) : (cellBottom = grid[x][y]);
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
}
