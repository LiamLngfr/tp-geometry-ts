import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import AbstractGeometry from "./AbstractGeometry";

export default class LineString extends AbstractGeometry {
    private points: Array<Point>;

    constructor(points?: Array<Point>) {
        super();
        if (!points || points.length <= 1) {
            this.points = []
        } else {
            this.points = points
        }
    }

    getNumPoints(): number {
        return this.points.length;
    }

    getPointN(n: number): Point {
        return this.points[n];
    }

    getType(): string {
        return "LineString";
    }

    isEmpty(): boolean {
        return this.points.length == 0;
    }

    translate(dx: number, dy: number): void {
        for (let point of this.points) {
            point.translate(dx, dy);
        }
    }

    clone(): LineString {
        if (this.isEmpty()) {
            return new LineString();
        } else {
            var lPoints = [];
            for (let point of this.points) {
                lPoints.push(point.clone())
            }
            return new LineString(lPoints)
        }
    }

    getEnvelope(): Envelope {
        const eb = new EnvelopeBuilder();
        for (let point of this.points) {
            eb.insert(point.getCoordinate())
        }
        return eb.build()
    }

    accept(visitor: GeometryVisitor): string {
        return visitor.visitLineString(this)
    }

    

}