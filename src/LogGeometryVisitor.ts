import GeometryVisitor from "./GeomtryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class LogGeometryVisitor implements GeometryVisitor{
    visitPoint(point: Point) {
        var string = "Je suis un point "
        if(point.isEmpty()){
        string += "vide";
        console.log(string);
        return string;
        } else {
        string += "avec x=" + point.x() + " et y=" + point.y()
        console.log(string);
        return string;
        }
    }

    visitLineString(linestring: LineString) {
        var string = "Je suis une polyligne ";
        if(linestring.isEmpty()){
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