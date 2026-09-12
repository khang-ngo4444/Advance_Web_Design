class Shape {
    constructor(name) {
        if (new.target === Shape) {
            throw new Error('Shape is abstract and cannot be instantiated directly');
        }
        this.name = name;
    }

    area() {
        throw new Error('area() must be implemented by subclass');
    }

    describe() {
        console.log(`${this.name} has area: ${this.area().toFixed(2)}`);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super('Rectangle');
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super('Triangle');
        this.base = base;
        this.height = height;
    }

    area() {
        return (this.base * this.height) / 2;
    }
}

const shapes = [new Circle(5), new Rectangle(4, 6), new Triangle(3, 8)];

shapes.forEach(shape => shape.describe());

try {
    new Shape('Invalid');
} catch (err) {
    console.log(`Error: ${err.message}`);
}
