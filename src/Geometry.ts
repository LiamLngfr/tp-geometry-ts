import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";

export default interface Geometry {
    getType(): string;
    isEmpty(): boolean;
    translate(dx: number, dy: number): void;
    clone(): Geometry;
    getEnvelope(): Envelope;
    accept<ResultType>(visitor: GeometryVisitor<ResultType>): ResultType;
    asText(): string
}