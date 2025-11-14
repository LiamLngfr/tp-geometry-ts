import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import WktWriter from "../src/WktWriter";
import LogGeometryVisitor from "../src/LogGeometryVisitor"


describe("test Point", () => {

    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
        expect(p.getType()).to.equal("Point");
        expect(p.isEmpty()).to.equal(true);
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
        expect(p.isEmpty()).to.equal(false);

    });

    it("copy empty", () => {
        const p = new Point();
        const copy = p.clone();
        expect(copy.isEmpty()).to.equal(true)
    });

    it("copy not empty", () => {
        const p = new Point([-1,-1])
        const copy = p.clone()
        p.translate(1,1);
        expect(p.x()).to.deep.equal(0);
        expect(p.y()).to.deep.equal(0);
        expect(copy.x()).to.deep.equal(-1);
        expect(copy.y()).to.deep.equal(-1)
    });

    it("envelope creation", () => {
        const p1 = new Point([-1,-1]);
        const e = p1.getEnvelope();
        expect(e.isEmpty()).to.equal(false);
        expect(e.toString()).to.deep.equal("[-1,-1,-1,-1]");
    });

    it("empty envelope creation", ()=>{
        const p1 = new Point();
        const e = p1.getEnvelope();
        expect(e.isEmpty()).to.equal(true);
        expect(e.toString()).to.deep.equal("[undefined,undefined,undefined,undefined]")
        expect(isFinite(e.getXmax())).to.equal(false);
    });

    it("wkt writer creation", () => {
        const p1 = new Point([1.0,0.0]);
        const p2 = new Point();
        const w = new WktWriter();
        expect(w.write(p1)).to.deep.equal("POINT(1 0)")
        expect(w.write(p2)).to.deep.equal("POINT EMPTY")


    });


    it("LogGeometryVisitor creation", () => {
        const p1 = new Point([1,5]);
        const p2 = new Point();
        const lgv = new LogGeometryVisitor();
        expect(p1.accept(lgv)).to.deep.equal("Je suis un point avec x=1 et y=5");
        expect(p2.accept(lgv)).to.deep.equal("Je suis un point vide");
    });
});

