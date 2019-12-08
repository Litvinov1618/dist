/*
 * Point - класс, который хранит информацию о точке на графике
 */
class Point {
  /*
   * x - число
   * y - число
   */
  constructor(x, y) {
    if(!x || !y) throw new Error('No arguments');
    if(typeof x !== 'number' || typeof y !== 'number') throw new Error('Argument isnt a number');
    if(x.toString() === 'NaN' || y.toString() === 'NaN') throw new Error ('Argument is a NaN');
    if(x < 0 || y < 0) throw new Error('Argument is a negative number');
    this._x = x;
    this._y = y;
  }
  getX() {
    return this._x;
  }
  getY() {
    return this._y;
  }

  toString() {
    return `Point( x: ${this._x}, y: ${this._y} )`;
  }
}

module.exports = Point;