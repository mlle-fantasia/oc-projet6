export default class Cell {
	constructor(univers, object) {
		this.background = this.defineBackground(univers);
		this.object = object;
	}
	defineBackground(univers) {
		const FIELDS = { salt: "salt-desert", forest: "grass", ice: "ice", ocean: "ocean" };
		return FIELDS[univers];
	}
}

//class Fields {}
