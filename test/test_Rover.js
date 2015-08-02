require("should");
var Rover = require('../lib/Rover.js');
var Area = require('../lib/Area.js');
var area = new Area('5 5');

describe("InstanceOf", function () {
    var rover = new Rover(area);

    it("rover should be an instance of Rover", function () {
        rover.should.be.an.instanceof(Rover);
    });

    it("rover should be an instance of Object", function () {
        rover.should.be.an.instanceof(Object);
    });
});


describe("Position", function () {
    var rover = new Rover(area);
    rover.setPosition('1 2 N');
    it("rover position commands should be equal with 1 2 N", function () {
        rover.positionCommand.should.be.equal('1 2 N');
    });

    rover.setCommands('LMLMLMLMM');
    it("rover move commands should be equal with LMLMLMLMM", function () {
        rover.moveCommands.should.be.equal('LMLMLMLMM');
    });

    it("rover position should be equal with 1 3 N", function () {
        rover.getPosition().should.be.equal('1 3 N');
    });
});

describe("Position", function () {
    var rover = new Rover(area);
    rover.setPosition('3 3 E');
    it("rover position commands should be equal with 3 3 E", function () {
        rover.positionCommand.should.be.equal('3 3 E');
    });

    rover.setCommands('MMRMMRMRRM');
    it("rover move commands should be equal with MMRMMRMRRM", function () {
        rover.moveCommands.should.be.equal('MMRMMRMRRM');
    });

    it("rover position should be equal with 5 1 E", function () {
        rover.getPosition().should.be.equal('5 1 E');
    });
});

describe("Position", function () {
    var rover = new Rover(area);
    rover.setPosition('3 3 N');
    it("rover position commands should be equal with 3 3 N", function () {
        rover.positionCommand.should.be.equal('3 3 N');
    });

    rover.setCommands('MMM');
    it("rover move commands should be equal with MMM", function () {
        rover.moveCommands.should.be.equal('MMM');
    });

    it("rover position should be equal with RIP", function () {
        rover.getPosition().should.be.equal('RIP');
    });
});