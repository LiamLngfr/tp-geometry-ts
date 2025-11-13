import Geometry from "./Geometry";
import Point from "./Point";

export default class LineString implements Geometry{
    private points: Array<Point>;

    constructor(points?: Array<Point>){
        if (!points || points.length <= 1){
            this.points = []
        } else {
            this.points = points
        }
    }

    getNumPoints():number{
        return this.points ? this.points.length : 0;
    }

    getPointN(n:number): Point{
        return this.points[n];
    }

    getType(): string{
        return "LineString";
    }

    isEmpty(): boolean {
        return this.points.length == 0 ? true : false
    }
}