import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class LogGeometryVisitor implements GeometryVisitor {
    visitPoint(point: Point): string {
        var string = "Je suis un point "
        if (point.isEmpty()) {
            string += "vide";
            console.log(string);
            return string;
        } else {
            string += "avec x=" + point.x() + " et y=" + point.y()
            console.log(string);
            return string;
        }
    }

    visitLineString(linestring: LineString): string {
        var string = "Je suis une polyligne ";
        if (linestring.isEmpty()) {
            string += "vide";
            console.log(string);
            return string;
        } else {
            string += "définie par " + linestring.getNumPoints() + " points";
            console.log(string)
            return string
        }
    }
}