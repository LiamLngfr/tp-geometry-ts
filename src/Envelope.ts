import Coordinate from "./Coordinate";

export default class Envelope {
    private bottomLeft: Coordinate;
    private topRight: Coordinate;

    constructor(bottomLeft?: Coordinate, topRight?: Coordinate) {
        this.bottomLeft = bottomLeft || [-Infinity, -Infinity];
        this.topRight = topRight || [Infinity, Infinity];
    }

    isEmpty() {
        return !isFinite(this.bottomLeft[0]) &&
            !isFinite(this.bottomLeft[1]) &&
            !isFinite(this.topRight[0]) &&
            !isFinite(this.topRight[1]);
    }

    getXmin(): number {
        return this.bottomLeft[0];
    }

    getXmax(): number {
        return this.topRight[0];
    }

    getYmin(): number {
        return this.bottomLeft[1];
    }

    getYmax(): number {
        return this.topRight[1];
    }

    toString(): String {
        return "[" + this.getXmin() + "," + this.getYmin() + "," + this.getXmax() + "," + this.getYmax() + "]"
    }
}