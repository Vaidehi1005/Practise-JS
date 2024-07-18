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
  
  let rectangle = new Rectangle(4, 5);
  console.log(rectangle.getArea()); // 20
  console.log(rectangle.getPerimeter()); // 18