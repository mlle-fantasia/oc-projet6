export default class Object {
	constructor(type, univers) {
		this.type = type;
		this.imageGrid = univers + "Grid";
		this.imageImg = univers + "Img";
	}
	get_type() {
		return this.type;
	}
	get_imageGrid() {
		return this.imageGrid;
	}
	get_imageImg() {
		return this.imageImg;
	}
	definition() {
		return `${this.type} : je suis un objet`;
	}
}
