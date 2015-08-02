/**
 * test_Area.js
 * @author Vivian
 * @version 1.0.0
 * copyRight 2014-2015, gandxiaowei@gmail.com all rights reserved.
 */
var should = require("should");
var Area = require('../lib/Area.js');

describe("InstanceOf", function () {
    var area = new Area('5 5');

    it("area should be an instance of Area", function () {
        area.should.be.an.instanceof(Area);
    });

    it("area should be an instance of Object", function () {
        area.should.be.an.instanceof(Object);
    });
});


describe("limit", function () {
    var area = new Area('5 5');

    it("area max x should be an number : 5", function () {
        area.x.should.be.exactly(5).and.be.a.Number();
    });

    it("area max y should be an number : 5", function () {
        area.y.should.be.exactly(5).and.be.a.Number();
    });

    it("point (2,2) is out of area should be false", function () {
        area.isOut(2, 2).should.be.false();
    });

    it("point (-2,2) is out of area should be true", function () {
        area.isOut(-2, 2).should.be.ok();
    });

    it("point (2,6) is out of area should be true", function () {
        area.isOut(2, 6).should.be.ok();
    });
});