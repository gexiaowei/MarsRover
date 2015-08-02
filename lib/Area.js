/**
 * Area.js
 * @author Vivian
 * @version 1.0.0
 * copyRight 2014-2015, gandxiaowei@gmail.com all rights reserved.
 */
/**
 * 活动区域
 * @param maxX
 * @param maxY
 * @constructor
 */
function Area(areaCommand) {
    var areaParams = areaCommand.split(' ');
    if (areaParams.length != 2) {
        throw  new Error('Error Area Command');
    }

    var x = areaParams[0];
    var y = areaParams[1];

    if (!x.match(/\d+/)) {
        throw new Error('Area X must match number');
    }

    if (!y.match(/\d+/)) {
        throw new Error('Area Y must match number');
    }

    this.x = parseInt(x);
    this.y = parseInt(y);

}

/**
 * 检测
 * @param x
 * @param y
 * @returns {boolean}
 */
Area.prototype.isOut = function (x, y) {
    return x > this.x || x < 0 || y > this.y || y < 0;
};

module.exports = Area;