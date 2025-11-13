import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test Translate", () => {
    it("translate empty", ()=>{
        var p1 = new Point();
        var p2 = new Point();
        var ls2 = new LineString([p1,p2]);
        p1.translate(1,1);
        ls2.translate(1,1);
        expect(p1.x()).to.deep.equal(Number.NaN);
        expect(ls2.getPointN(0).x()).to.deep.equal(Number.NaN)
    });

    it("translate with value", ()=>{
        var p1 = new Point([1,2]);
        var p2 = new Point([2.2,3.5]);
        var ls = new LineString([p1,p2]);
        p1.translate(1,1);
        ls.translate(1,1);
        expect(p1.x()).to.equal(3);
        expect(p1.y()).to.equal(4);
        expect(ls.getPointN(0).x()).to.equal(3);
        expect(ls.getPointN(1).y()).to.equal(4.5)
    });


})