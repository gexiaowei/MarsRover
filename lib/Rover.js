var Area = require('./Area.js');
/**
 * index.js
 * @author Vivian
 * @version 1.0.0
 * copyRight 2014-2015, gandxiaowei@gmail.com all rights reserved.
 */

/**
 * 方向
 * @type {{N: number, E: number, S: number, W: number}}
 */
var direction = {
    N: 1,
    E: 2,
    S: 3,
    W: 4
};

/**
 * 探测器
 * @param area
 * @constructor
 */
function Rover(area) {
    this.area = area;
}

/**
 * 设置命令
 * @param commands
 */
Rover.prototype.setCommands = function (commands) {
    var self = this;
    for (var i = 0; i < commands.length; i++) {
        self.processCommand(commands[i]);
    }
    this.moveCommands = commands;
};

/**
 * 处理命令
 * @param command
 */
Rover.prototype.processCommand = function (command) {
    var self = this;
    switch (command) {
        case 'L':
            self.turnLeft();
            break;
        case 'R':
            self.turnRight();
            break;
        case 'M':
            self.move();
            break;
        default :
            throw new Error('no such command:' + command);
    }
};

/**
 * 左转
 */
Rover.prototype.turnLeft = function () {
    this.facing = (this.facing - 1) < direction.N ? direction.W : this.facing - 1;
};


/**
 * 右转
 */
Rover.prototype.turnRight = function () {
    this.facing = (this.facing + 1) > direction.W ? direction.N : this.facing + 1;
};


/**
 * 前进
 */
Rover.prototype.move = function () {
    var self = this;
    switch (this.facing) {
        case direction.N:
            self.y++;
            break;
        case direction.E:
            self.x++;
            break;
        case direction.S:
            self.y--;
            break;
        case direction.W:
            self.x--;
            break;
        default:
            break;
    }
};

/**
 * 设置位置信息
 * @param position
 */
Rover.prototype.setPosition = function (position) {
    var positionParams = position.split(' ');
    if (positionParams.length !== 3) {
        throw new Error('Error Position');
    }
    this.x = positionParams[0];
    this.y = positionParams[1];
    this.facing = direction[positionParams[2]];
    if (!this.x.match(/\d+/)) {
        throw  new Error('Error Position x');
    }

    if (!this.y.match(/\d+/)) {
        throw  new Error('Error Position y');
    }

    if (!this.facing) {
        throw new Error('Error Facing Command');
    }

    this.positionCommand = position;
};

/**
 * 获取位置信息
 */
Rover.prototype.getPosition = function () {
    if (this.area.isOut(this.x, this.y)) {
        return 'RIP';
    } else {
        var directionString = "";
        switch (this.facing) {
            case direction.N:
                directionString = 'N';
                break;
            case direction.S:
                directionString = 'S';
                break;
            case direction.E:
                directionString = 'E';
                break;
            case direction.W:
                directionString = 'W';
                break;
            default :
                break;
        }
        return this.x + ' ' + this.y + ' ' + directionString;
    }
};

module.exports = Rover;