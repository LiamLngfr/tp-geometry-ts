import GeometryVisitor from "./GeomtryVisitor";
import LineString from "./LineString";
import Point from "./Point";
import WktWriter from "./WktWriter";

export default class WktVisitor implements GeometryVisitor{
    private buffer : string;
    
    visitPoint(point: Point) {
        var writer = new WktWriter();
        this.buffer = writer.write(point);
        console.log(this.buffer);
    }

    visitLineString(linestring: LineString) {
        var writer = new WktWriter();
        this.buffer = writer.write(linestring);
        console.log(this.buffer);
    }

    getResult():string {
        return this.buffer;
    }

}