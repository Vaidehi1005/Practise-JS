class Rectangle{
   constructor(height,width){
    this.height=height
    this.width=width
   }

   getArea(){
     return this.height * this.width
   }
}

let r1 = new Rectangle(14,56)
console.log(r1.getArea())