const Point = require('./modules/point');
const Line = require('./modules/line');

const pointA = new Point(12, 2);
const pointB = new Point(2, 21);
const line = new Line(pointA, pointB);

console.log(`Точки отрезка: ${line.getStartPoint()}, ${line.getEndPoint()}`);
console.log(`Длинна отрезка: ${line.getLength()}`);

line.setStartPoint(new Point(4, 5));

console.log(`Точки отрезка: ${line.getStartPoint()}, ${line.getEndPoint()}`);
console.log(`Длинна отрезка: ${line.getLength()}`);

