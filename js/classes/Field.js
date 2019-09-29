export default class Field {
	FIELDS = [
		{ univers: "forest", accessible: "grass", inaccessible: "tree" },
		{ univers: "salt", accessible: "salt-desert", inaccessible: "salt-tat" },
		{ univers: "ice", accessible: "ice", inaccessible: "iceberg" },
		{ univers: "ocean", accessible: "ocean", inaccessible: "waste" }
	];
	GROUND = "ground";
	ROCK = "rock";
	isAccessibled(field) {
		if (Field.GROUND === field) return false;
		if (Field.ROCK === field) return true;
	}
}
