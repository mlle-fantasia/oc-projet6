import Object from "./Object";
const TYPE = "obstacle";
export default class Obstacle extends Object {
	constructor(univers) {
		super(TYPE, univers);
		//this.type = super.definition();
	}
}
