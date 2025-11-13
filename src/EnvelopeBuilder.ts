import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder {
    private points : Array<Coordinate> = [];
    insert(coordinate: Coordinate) {
        this.points.push(coordinate);
    }

    build() : Envelope {
            if(this.points.length > 0){

            var xMin = this.points[0][0];
            var yMin = this.points[0][1];
            var xMax = this.points[0][0];
            var yMax = this.points[0][1];

            for(let i=1; i<this.points.length; i++){
                var xTemp = this.points[i][0];
                var yTemp = this.points[i][1];
                if(xTemp < xMin){xMin = xTemp}
                if(yTemp < yMin){yMin = yTemp}
                if(xTemp > xMax){xMax = xTemp}
                if(yTemp > yMax){yMax = yTemp}
            }
            var bottomLeft = [xMin, yMin]
            var topRight = [xMax, yMax] 
            return new Envelope(bottomLeft, topRight)
        } else {
            return new Envelope()
        }
    }
}