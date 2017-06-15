   var can =  document.getElementById('canvas1');
    can.onclick = function(e){
        alert((e.clientX - can.offsetLeft)+":" + (e.clientY - can.offsetTop));
    }
   var object = { //初始化
                 init: function() {
                     //棋盘外框
                    var canvas1 = document.getElementById("canvas1");
                      this.ctx = canvas1.getContext("2d");
                      this.ctx.fillStyle = '#F7E1A4';
                      this.ctx.fillRect(0, 0, 900, 1000)
                      this.ctx.fill();                      
  
                      this.ctx.lineWidth = 5;
                      this.ctx.strokeStyle = "#C3A365";
                      this.ctx.strokeRect(50, 50, 800, 900);
                      
           

                      this.row();
                      this.cols();
                      this.drawFont();                    

                      this.center(150, 250);
                      this.center(750, 250);
                      this.center(50, 350);
                      this.center(250, 350);
                      this.center(450, 350);
                      this.center(650, 350);
                      this.center(850, 350);
                      this.center(850, 650);
                      this.center(650, 650);
                      this.center(450, 650);
                      this.center(250, 650);
                     this.center(50, 650);
                      this.center(750, 750);
                     this.center(150, 750);
                     this.ctx.fillStyle = '#F7E1A4';
                     this.ctx.fillRect(0, 0, 49, 1000);
                     this.ctx.fillRect(851, 0, 49, 1000);
                     this.ctx.fill();   
                     
                     //棋子初始化
                     this.drawChess(data);
  
                  },
                  //此方法用来画棋盘线
                 LineDrawing: function(mx, my, lx, ly) {
                      this.ctx.beginPath();
                      this.ctx.moveTo(mx, my);
                      this.ctx.lineTo(lx, ly);
                     this.ctx.stroke();
                  },
                  //棋盘行
                  row: function() {
                      for(var i = 50; i <= 950; i += 100) {
                          this.ctx.beginPath();
                          this.ctx.moveTo(50, i);
                          this.ctx.lineTo(850, i);
                          this.ctx.stroke();
                      }
                  },
                  //棋盘列
                  cols: function() {
                      for(var i = 50; i <= 850; i += 100) {
                          this.ctx.beginPath();
                          this.ctx.moveTo(i, 50);
                          this.ctx.lineTo(i, 950);
                          this.ctx.stroke();
                      }
                      //清除指定的矩形区域
                      this.ctx.clearRect(51, 450, 799, 100);
                      //斜线
                      this.LineDrawing(350, 50, 550, 250);
                      this.LineDrawing(350, 750, 550, 950);
                      //反斜线
                      this.LineDrawing(550, 50, 350, 250);
                      this.LineDrawing(550, 750, 350, 950);
                  },
                  //坐标的中心点
                  center: function(x, y) {
                      this.ctx.lineWidth = 5;
                      //左上
                      this.LineDrawing(x - 10, y - 30, x - 10, y - 8);
                      this.LineDrawing(x - 10, y - 10, x - 30, y - 10);
                      //右上
                      this.LineDrawing(x + 10, y - 30, x + 10, y - 8);
                      this.LineDrawing(x + 10, y - 10, x + 30, y - 10);
                      //左下
                      this.LineDrawing(x - 10, y + 30, x - 10, y + 8);
                      this.LineDrawing(x - 10, y + 10, x - 30, y + 10);
                     //右下
                     this.LineDrawing(x + 10, y + 30, x + 10, y + 8);
                     this.LineDrawing(x + 10, y + 10, x + 30, y + 10);
                 },
                 drawChess:function(data){                
                 	for(var item in data.positon)
                 	{
                 	this.ctx.beginPath();
					this.ctx.arc(data.positon[item].row,data.positon[item].col,40,0,Math.PI*2,true);
					this.ctx.fillStyle = '#E8C58F';		
					this.ctx.fill();
					this.ctx.strokeStyle = '#D1BDA9';
					this.ctx.stroke();
			
				 	this.ctx.font = "normal normal bold 40px Arial";    
			    	this.ctx.fillStyle = data.positon[item].color;
			  	    this.ctx.fillText(data.positon[item].name ,data.positon[item].row - 20, data.positon[item].col - (-13));
                 	}

                 },
                 drawFont: function() {
                   this.ctx.lineWidth = 1;
                    
                     this.ctx.fillStyle = '#000'
                     this.ctx.font = "60px microsoft yahei";
                     this.ctx.save(); 
                     
                     this.ctx.translate(canvas1.width / 2, canvas1.height / 2);
                     var radian = Math.PI / 2; 
                     this.ctx.rotate(radian); 
                     
                     
                     this.ctx.fillText("楚", -30, -270);
                     this.ctx.fillText("河", -30, -150);
                     this.ctx.restore(); 
                     this.ctx.save();
                    
                     this.ctx.translate(canvas1.width / 2, canvas1.height / 2);
                     var radian = Math.PI / -2; 
                     this.ctx.rotate(radian);
                     this.ctx.fillText("汉", -30, -270);
                    this.ctx.fillText("界", -30, -150);
                     this.ctx.restore();
                 },
                 getChess:function(x,y){
                 	
                 }
             };