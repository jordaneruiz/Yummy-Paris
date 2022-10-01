class Donuts {
    constructor(positionY, positionX){
        // this.canvas = canvas,
        // this.ctx = canvas.getContext('2d'),
        this.donutsImg = new Image(),
        // this.donuts = [{ x: 700, y: 150 }];
        this.positionX = positionX,
        this.positionY = 150,
        // this.imgWidth = 70,
        // this.imgHeight = 40,
        this.donutsXincrement = 5,
        this.donutsYincrement = 2,
        this.donutsYincrementMore = 4,
        this.donutsImg.src = "Images/donuts.png"
    }
    draw(){
        for (let i = 0; i < this.donuts.length; i++) {
            ctx.drawImage(donutsImg, this.donuts[i].x, this.donuts[i].y);
            collisionDonuts(i);
          }
     }    
}
