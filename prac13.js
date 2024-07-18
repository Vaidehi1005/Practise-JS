class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

let rectangle = new Rectangle(29, 5);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());