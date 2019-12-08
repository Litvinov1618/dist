/*
 * Line - класс, который хранит информацию об отрезке на графике
 */
class Line {
  constructor(startPoint, endPoint) {
    if(!startPoint || !endPoint) throw new Error('No arguments');
    if(
      startPoint.constructor.name !== 'Point' || endPoint.constructor.name !== 'Point'
    ) throw new Error('Argument is not class Point');
    this._startPoint = startPoint;
    this._endPoint = endPoint;
  }
  /*
   * Возвращает длинну отрезка
   */
  getLength() {
    const x2 = this._endPoint.getX();
    const x1 = this._startPoint.getX();
    
    const y2 = this._endPoint.getY();
    const y1 = this._startPoint.getY();
    
    const result = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2));
    return Math.round(result);
  }
  /*
   * Возвращает точку начала отрезка (обьект класса Point)
   */
  getStartPoint() {
    return this._startPoint
  }
  /*
   * Возвращает точку конца отрезка (обьект класса Point)
   */
  getEndPoint() {
    return this._endPoint
  }
  /*
   * Изменяет точку начала отрезка
   */
  setStartPoint(point) {
    if(
      point.constructor.name !== 'Point' || point.constructor.name !== 'Point'
    ) throw new Error('Argument is not class Point');
    this._startPoint = point;
  }
  /*
   * Изменяет точку конца отрезка
   */
  setEndPoint(point) {
    if(
      point.constructor.name !== 'Point' || point.constructor.name !== 'Point'
    ) throw new Error('Argument is not class Point');
    this._endPoint = point;
  }
}

module.exports = Line;