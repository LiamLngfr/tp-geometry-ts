import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test LineString", ()=> {
    it("test default constructor", ()=>{
        const ls = new LineString();
        expect(ls.getType()).to.equal("LineString");
        expect(ls.getNumPoints()).to.equal(0);
        expect(ls.getPointN(1)).to.equal(undefined);
        
    });
    it("test constructor with ONE point", () =>{
        const p = new Point([1,1]);
        const ls = new LineString([p]);
        expect(ls.getType()).to.equal("LineString");
        expect(ls.getNumPoints()).to.equal(0);
        expect(ls.getPointN(0)).to.equal(undefined);
    });

    it("test constructor with points", ()=>{
        const p1 = new Point([1.0,2.0]);
        const p2 = new Point([2.5,12.1]);
        const ls = new LineString([p1, p2]);
        expect(ls.getType()).to.equal("LineString");
        expect(ls.getNumPoints()).to.equal(2);
        expect(ls.getPointN(0)).to.equal(p1);
    });


})