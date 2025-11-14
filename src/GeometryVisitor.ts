import LineString from "./LineString";
import Point from "./Point";


export default interface GeometryVisitor<ResultType> {
    visitPoint(point: Point): ResultType;

    visitLineString(linestring: LineString): ResultType;
}