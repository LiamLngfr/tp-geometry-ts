import "mocha";
import { expect } from "chai";
import EnvelopeBuilder from "../src/EnvelopeBuilder.ts";
import Envelope from "../src/Envelope.ts";
import Coordinate from "../src/Coordinate.ts";



describe("test Envelope", () => {
    it("EnvelopeBuilder create envelope", () => {
        var eb = new EnvelopeBuilder();
        eb.insert([1,2]);
        eb.insert([4,5]);
        eb.insert([-1,-2])
        var e = eb.build();
        expect(e.isEmpty()).to.equal(false);
        expect(e.getXmax()).to.deep.equal(4);
        expect(e.getYmax()).to.deep.equal(5);
        expect(e.getXmin()).to.deep.equal(-1);
        expect(e.getYmin()).to.deep.equal(-2);
        expect(e.toString()).to.deep.equal("[-1,-2,4,5]");
        
    });

    it("Envelope constructor", () => {
        var e = new Envelope([1,2],[4,5]);
        expect(e.isEmpty()).to.equal(false);
        expect(e.toString()).to.deep.equal("[1,2,4,5]");        
    });

    it("Envelope empty", () => {
        var e = new Envelope();
        expect(e.isEmpty()).to.equal(true);
        var eb = new EnvelopeBuilder();
        e = eb.build();
        expect(e.isEmpty()).to.equal(true)
    });


})