export default class Field {
	GROUND = "ground";
	ROCK = "rock";
	isAccessibled(field) {
		if (Field.GROUND === field) return false;
		if (Field.ROCK === field) return true;
	}
}
