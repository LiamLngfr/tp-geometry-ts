import Envelope from "./Envelope";
import GeometryVisitor from "./GeomtryVisitor";

export default interface Geometry {
    getType(): string;
    isEmpty(): boolean;
    translate(dx: number, dy: number): void;
    clone(): Geometry;
    getEnvelope(): Envelope;
    accept(visitor:GeometryVisitor) : string;
}