import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";


export default class EnvelopeBuilder implements GeometryVisitor<void>{
    private points: Array<Coordinate> = [];
    insert(coordinate: Coordinate) {
        this.points.push(coordinate);
    }

    visitPoint(point: Point): void {
        this.insert(point.getCoordinate());
    }

    visitLineString(linestring: LineString): void {
        for(let i = 0; i<linestring.getNumPoints(); i++){
            this.visitPoint(linestring.getPointN(i))
        }
    }

    build(): Envelope {
        if (this.points.length > 0) {

            var xMin = this.points[0][0];
            var yMin = this.points[0][1];
            var xMax = this.points[0][0];
            var yMax = this.points[0][1];

            for (let i = 1; i < this.points.length; i++) {
                var xTemp = this.points[i][0];
                var yTemp = this.points[i][1];
                if (xTemp < xMin) { xMin = xTemp }
                if (yTemp < yMin) { yMin = yTemp }
                if (xTemp > xMax) { xMax = xTemp }
                if (yTemp > yMax) { yMax = yTemp }
            }
            var bottomLeft = [xMin, yMin]
            var topRight = [xMax, yMax]
            return new Envelope(bottomLeft, topRight)
        } else {
            return new Envelope()
        }
    }
}