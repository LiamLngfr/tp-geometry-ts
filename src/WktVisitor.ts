import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class WktVisitor implements GeometryVisitor<string> {

    visitPoint(point: Point): string {
        if (!point.isEmpty()) {
            const coord = point.getCoordinate();
            const x = coord[0];
            const y = coord[1];     
            return "POINT(" + x + " " + y + ")";
        } else {
            return "POINT EMPTY";
        }
    }

    visitLineString(linestring: LineString): string {
        if (!linestring.isEmpty()) {
            var result = "LINESTRING("
            var point = linestring.getPointN(0);
            const coord = point.getCoordinate();
            const x = coord[0];
            const y = coord[1];
            result += x + " " + y


            for (let i = 1; i < linestring.getNumPoints(); i++) {
                var point = linestring.getPointN(i);
                const coord = point.getCoordinate();
                const x = coord[0];
                const y = coord[1];
                result += "," + x + " " + y

            }

            return result + ")"
        } else {
            return "LINESTRING EMPTY"
        }
    }

}