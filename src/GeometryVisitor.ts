import LineString from "./LineString";
import Point from "./Point";


export default interface GeometryVisitor {
    visitPoint(point: Point): string;

    visitLineString(linestring: LineString): string;
}