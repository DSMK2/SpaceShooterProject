// Global values per script since typing Math.PI/180 repeatedly gets old
var 
DEGTORAD = Math.PI/180,
RADTODEG = 180/Math.PI;

/* Todos: Pass box2d creation to a webworker, passback entity ID to main script */

/**
* Source: http://strd6.com/2010/08/useful-javascript-game-extensions-clamp/
* Returns a number whose value is limited to the given range.
*
* Example: limit the output of this computation to between 0 and 255
* (x * 255).clamp(0, 255)
*
* @param {Number} min The lower boundary of the output range
* @param {Number} max The upper boundary of the output range
* @returns A number in the range [min, max]
* @type Number
 */
Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};

/**
* Source: http://stackoverflow.com/questions/1820862/obj-c-linear-interpolation-between-two-numbers
*/
Math.lerp = function(from, to, t) {
	return from + (to - from) * t
}

Math.nearestAngle = function(from, to)
{
	var angle_delta = to-from
	while(angle_delta < -Math.PI) { angle_delta += 360*Math.PI/180; }
	while(angle_delta > Math.PI) { angle_delta -= 360*Math.PI/180; }
	
	return angle_delta;
}