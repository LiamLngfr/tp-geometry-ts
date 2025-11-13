import "mocha";
import { expect } from "chai";
import Point from "../src/Point";

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
    })
});

