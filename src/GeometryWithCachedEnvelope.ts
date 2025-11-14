import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";

export default class GeometryWithCachedEnvelope{
    private cachedEnvelope :Envelope;
    private original: Geometry

    constructor(geom: Geometry) {            
            this.original = geom
        }
    
    getEnvelope() {
        const envelopeBuilder = new EnvelopeBuilder();
        this.cachedEnvelope = this.original.getEnvelope();
        return this.cachedEnvelope
    }
    
    getType(): string {
        return this.original.getType();
    }

    isEmpty(): boolean {
        return this.original.isEmpty()
    }

    translate(dx: number, dy:number):void {
        this.original.translate(dx, dy)
    }

    clone() {
        return this.original.clone()
    }


    accept<ResultType>(visitor: GeometryVisitor<ResultType>): ResultType {
        return this.original.accept(visitor);
    }

    asText() {
        return this.original.asText();
    }

}