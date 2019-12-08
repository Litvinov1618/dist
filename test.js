const Point = require('./modules/point');
const Line = require('./modules/line');
const test = require('ava');

// Point tests
test(
  'instances created with no errors', t => {
    new Point(1,1);
    t.pass()
  }
);

test(
  'throws error if one of arguments missed', t => {
    t.throws(() => new Point(1));
  }
);

test(
  'throws error if we create class without arguments', t=> {
    t.throws(() => new Point());
  }
);

test(
  'throws error if one of arguments` type is not a number', t => {
    t.throws(() => new Point(1, 'smth'));
    t.throws(() => new Point(3, true));
    t.throws(() => new Point(4, undefined));
    t.throws(() => new Point(8, null));
    t.throws(() => new Point(11, {}));
    
    t.throws(() => new Point('smth', 15));
    t.throws(() => new Point(true, 22));
    t.throws(() => new Point(undefined, 789));
    t.throws(() => new Point(null, 4));
    t.throws(() => new Point({}, 88));
  }
);

test(
  'throws error if one of arguments` is NaN', t => {
    t.throws(() => new Point(5555, NaN));
    t.throws(() => new Point(NaN, 51));
    t.throws(() => new Point('smth' * 4, 12));
    t.throws(() => new Point(12, 14 * 'smth'));
  }
)

test(
  'throws error if one of arguments is negative number',
  t => {
    t.throws(() => new Point(-44, 4));
    t.throws(() => new Point(10, -4));
  }
);

test(
  'saves given values', t => {
    const p = new Point(54,999);
    t.is(p.getX(), 54);
    t.is(p.getY(), 999);
  }
);

test(
  'returns instance of Point class', t => {
    const p = new Point(1,2);
    t.truthy(p instanceof Point);
  }
);

test(
  'stringify values', t => {
    const p = new Point(14,22);
    t.is(p.toString(), 'Point( x: 14, y: 22 )')
  }
);

// Line tests
test(
  'instances created with no errors in Line', t => {
    const p1 = new Point(12, 2);
    const p2 = new Point(3, 44);
    new Line(p1,p2);
    t.pass()
  }
);

test(
  'not throws error if argument is fractional', t => {
    const p1 = new Point(1.54,2);
    const p2 = new Point(2,3.44);
    t.notThrows(() => new Line(p1,p2))
  }
);

test(
  'works correct if one of arguments is large', t => {
    const p1 = new Point(26666666, 2);
    const p2 = new Point(2, 48181984);
    const line = new Line(p1, p2);
    t.is(line.getLength(), 55069178)
  }
);

test(
  'throws error if one of arguments of Line missed', t => {
    const p1 = new Point(12, 2)
    t.throws(() => new Line(p1));
  }
);

test(
  'throws error if create class without arguments in Line', t=> {
    t.throws(() => new Line());
  }
);

test(
  'accepts only class Point as argument', t => {
    const notP1 = {x: 1, y: 2};
    const p2 = new Point(3, 44);
    t.throws(() => new Line(notP1,p2))
  }
);

test(
  'accepts only objects as argument', t => {
    const notP1 = 'string';
    const p2 = new Point(3, 44);
    t.throws(() => new Line(notP1,p2))
  }
);

test(
  'accepts only class Point as setStartPoint of setEndPoint', t => {
    const p1 = new Point(35, 53);
    const p2 = new Point(3, 44);
    const line = new Line(p1,p2);
    t.throws(() => line.setEndPoint({x: 1,y: 2}));
    t.throws(() => line.setStartPoint('string'));
  }
);

test(
  'gets an class Point', t=> {
    const p1 = new Point(35, 53);
    const p2 = new Point(3, 44);
    const line = new Line(p1,p2);
    t.is(line.getStartPoint().constructor.name, 'Point')
  }
);

test(
  'geLength() returns number', t => {
    const p1 = new Point(12, 7);
    const p2 = new Point(55, 77);
    const line = new Line(p1,p2);
    t.is(typeof line.getLength(), 'number')
  }
)