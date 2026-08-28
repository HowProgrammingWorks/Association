class Point {
  constructor(readonly x: number, readonly y: number) {}
}

class Line {
  constructor(readonly a: Point, readonly b: Point) {}

  get length() {
    const { a, b } = this;
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    const distance = Math.sqrt(dx ** 2 + dy ** 2);
    return distance;
  }
}

// Usage

const p1 = new Point(0, 0);
const p2 = new Point(10, 10);
const line = new Line(p1, p2);
console.log({ line });
console.log('Length:', line.length);
