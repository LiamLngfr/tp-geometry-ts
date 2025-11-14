import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";
import WktWriter from "../src/WktWriter";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import WktVisitor from "../src/WktVisitor"

describe("test LineString", ()=> {
    it("test default constructor", ()=>{
        const ls = new LineString();
        expect(ls.getType()).to.equal("LineString");
        expect(ls.getNumPoints()).to.equal(0);
        expect(ls.getPointN(1)).to.equal(undefined);
        expect(ls.isEmpty()).to.equal(true);
        
    });
    it("test constructor with ONE point", () =>{
        const p = new Point([1,1]);
        const ls = new LineString([p]);
        expect(ls.getType()).to.equal("LineString");
        expect(ls.getNumPoints()).to.equal(0);
        expect(ls.getPointN(0)).to.equal(undefined);
        expect(ls.isEmpty()).to.equal(true);
    });

    it("test constructor with points", ()=>{
        const p1 = new Point([1.0,2.0]);
        const p2 = new Point([2.5,12.1]);
        const ls = new LineString([p1, p2]);
        expect(ls.getType()).to.equal("LineString");
        expect(ls.getNumPoints()).to.equal(2);
        expect(ls.getPointN(0)).to.equal(p1);
        expect(ls.isEmpty()).to.equal(false);
    });
    it("copy empty", () => {
        const ls= new LineString();
        const copy = ls.clone()
        expect(copy.isEmpty()).to.equal(true)

    })

    it("copy not empty", () => {
        const p1 = new Point([-1,-1])
        const p2 = new Point([2,1]);
        const ls = new LineString([p1,p2]);
        const copy = ls.clone();
        ls.translate(1,2);
        expect(ls.getPointN(0).x()).to.deep.equal(0);
        expect(ls.getPointN(0).y()).to.deep.equal(1);
        expect(copy.getPointN(0).x()).to.deep.equal(-1);
        expect(copy.getPointN(0).y()).to.deep.equal(-1);
    });

    it("envelope creation", () => {
        const p1 = new Point([-1,-1])
        const p2 = new Point([2,1]);
        const ls = new LineString([p1,p2]);
        const e = ls.getEnvelope()
        expect(e.isEmpty()).to.equal(false);
        expect(e.toString()).to.deep.equal("[-1,-1,2,1]")

    });

    it("wkt writer creation", () => {
        const p1 = new Point([1.0,0.0]);
        const p2 = new Point([2.4,3.9]);
        const ls1 = new LineString([p1, p2])
        const ls2 = new LineString()
        const w = new WktWriter();
        expect(w.write(ls1)).to.deep.equal("LINESTRING(1 0,2.4 3.9)")
        expect(w.write(ls2)).to.deep.equal("LINESTRING EMPTY")
    });

    it("WktVisitor creation", () => {
        const p1 = new Point([1.0,0.0]);
        const p2 = new Point([2.4,3.9]);
        const ls1 = new LineString([p1, p2])
        const ls2 = new LineString();
        const wktVisitor = new WktVisitor();
        ls1.accept(wktVisitor)
        expect(wktVisitor.getResult()).to.deep.equal("LINESTRING(1 0,2.4 3.9)");
        ls2.accept(wktVisitor)
        expect(wktVisitor.getResult()).to.deep.equal("LINESTRING EMPTY");
    });


    it("LogGeometryVisitor creation", () => {
        const p1 = new Point([1.0,0.0]);
        const p2 = new Point([2.4,3.9]);
        const ls1 = new LineString([p1,p2]);
        const ls2 = new LineString() 
        const lgv = new LogGeometryVisitor();
        expect(ls1.accept(lgv)).to.deep.equal("Je suis une polyligne définie par 2 points");
        expect(ls2.accept(lgv)).to.deep.equal("Je suis une polyligne vide");

    });

});