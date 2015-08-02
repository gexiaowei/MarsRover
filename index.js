/**
 * index.js
 * @author Vivian
 * @version 1.0.0
 * copyRight 2014-2015, gandxiaowei@gmail.com all rights reserved.
 */
var Area = require('./lib/Area.js');
var Rover = require('./lib/Rover.js');

var sys = require("sys");
var stdin = process.openStdin();

var area;
var rover;

stdin.addListener("data", function (d) {
    var command = d.toString().substring(0, d.length - 1);
    if (!area) {
        try {
            area = new Area(command);
            rover = new Rover(area);
        } catch (error) {
            console.error(error);
        }
    } else if (!rover.positionCommand) {
        try {
            rover.setPosition(command);
        } catch (error) {
            console.error(error);
        }
    } else if (!rover.moveCommands) {
        try {
            rover.setCommands(command);
            done();
        } catch (error) {
            console.error(error);
        }

    }
});


function done() {
    console.log(rover.getPosition());
    process.exit();
}