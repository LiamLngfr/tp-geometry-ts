import Envelope from "./Envelope";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";
import WktVisitor from "./WktVisitor";

export default abstract class AbstractGeometry implements Geometry {
    abstract getType(): string;
    abstract isEmpty(): boolean;
    abstract translate(dx: number, dy: number): void;
    abstract clone(): Geometry;
    abstract getEnvelope(): Envelope;
    abstract accept(visitor: GeometryVisitor): string;


    asText(): string {
        const visitor = new WktVisitor();
        return this.accept(visitor);
    }

}