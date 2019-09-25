import World from "./classes/World";
import config from "./conf.json";

export default class App {
	constructor(nbPlayer, univers) {
		this.initWorld(nbPlayer, univers);
	}

	initWorld(nbPlayer, univers) {
		this.world = new World(nbPlayer, univers);
		this.grid = this.world.generateWorld();
	}
}
