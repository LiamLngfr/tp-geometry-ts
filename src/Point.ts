import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeomtryVisitor";

export default class Point implements Geometry {
  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
    this.coordinate = coordinate || [];
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return this.coordinate.length > 0 ? this.coordinate[0] : Number.NaN;
  }

  y(): number {
    return this.coordinate.length > 1 ? this.coordinate[1] : Number.NaN;
  }

  getType(): string {
    return "Point";
  }

  isEmpty(): boolean {
    return this.coordinate.length < 2;
  }

  translate(dx: number, dy: number): void {
    this.coordinate[0] += dx;
    this.coordinate[1] += dy;
  }

  clone(): Point {
    return this.isEmpty() ? new Point() : new Point([this.x(), this.y()])
  }

  getEnvelope(): Envelope {
    const eb = new EnvelopeBuilder();
    eb.insert(this.coordinate);
    return eb.build();

  }

  accept(visitor: GeometryVisitor): string {
    return visitor.visitPoint(this);
  }

}
