import Geometry from "./Geometry";
import Point from "./Point";
import LineString from "./LineString";


export default class WktWriter{

    write(geometry:Geometry): string {
        if ( geometry instanceof Point ){
            if(!geometry.isEmpty()){
                const coord = geometry.getCoordinate();
                const x = coord[0];
                const y = coord[1];

                return "POINT(" + x + " " + y + ")"; 
            } else {
                return "POINT EMPTY"
            }

            

        }else if ( geometry instanceof LineString ){
            if(!geometry.isEmpty()){
                var result = "LINESTRING("
                var point = geometry.getPointN(0);
                const coord = point.getCoordinate();
                const x = coord[0];
                const y = coord[1];
                result += x + " " + y

                
                for(let i =1; i<geometry.getNumPoints(); i++) {
                    var point = geometry.getPointN(i);
                    const coord = point.getCoordinate();
                    const x = coord[0];
                    const y = coord[1];
                    result += "," + x + " " + y

                }
                
                return result + ")"
            } else {
                return "LINESTRING EMPTY"
            }


        }else{
            throw new TypeError("geometry type not supported");
        }   
    }


}