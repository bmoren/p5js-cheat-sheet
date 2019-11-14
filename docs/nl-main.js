// Terms to translate
var terms = {
	"width": "breedte",
	"height": "hoogte",
	"stop": "stop",
	"start": "start",
	"true": "waar",
	"false": "onwaar",
	"continue_program": "programma\ngaat verder",
	"test": "conditie",
	"statements": "programmacode"
};

// Actual sketch codes
var canvasSize = 220;
var p5Pink = "#ed225d";

var gridSketch = function(p){
	var canvas;

	p.setup = function(){
		canvas = p.createCanvas(canvasSize, canvasSize);
		canvas.parent("grid-canvas");
		p.strokeWeight(0.25);
		p.translate(canvasSize/15, canvasSize/15);

		var gridSize = canvasSize - 2 * canvasSize / 15;
		for(var x=0; x<=10; x++){
			p.line(gridSize / 10 * x, 0, gridSize / 10 * x, gridSize);
		}
		for(var y=0; y<=10; y++){
			p.line(0, gridSize / 10 * y, gridSize, gridSize / 10 * y);
		}

		p.noStroke();
		p.fill("#000000");
		p.ellipse(0, 0, gridSize/20, gridSize/20);

		p.textFont("Fira Code");
		p.textAlign(p.LEFT, p.TOP);
		p.text("(0,0)", 5, 5);
	};
};

var lineSketch = function(p){
	var canvas;

	p.setup = function(){
		canvas = p.createCanvas(canvasSize, canvasSize);
		canvas.parent("line-canvas");
		p.strokeWeight(0.25);
		p.translate(canvasSize/15, canvasSize/15);

		var gridSize = canvasSize - 2 * canvasSize / 15;
		for(var x=0; x<=10; x++){
			p.line(gridSize / 10 * x, 0, gridSize / 10 * x, gridSize);
		}
		for(var y=0; y<=10; y++){
			p.line(0, gridSize / 10 * y, gridSize, gridSize / 10 * y);
		}

		p.noStroke();
		p.fill("#000000");
		var x1 = gridSize / 10 * 4;
		var y1 = gridSize / 10 * 3;
		var x2 = gridSize / 10 * 7;
		var y2 = gridSize / 10 * 7;
		p.ellipse(x1, y1, gridSize/20, gridSize/20);
		p.ellipse(x2, y2, gridSize/20, gridSize/20);
		p.stroke("#000000");
		p.strokeWeight(2);
		p.line(x1, y1, x2, y2);

		p.textFont("Fira Code");
		p.noStroke();
		p.textAlign(p.RIGHT, p.BOTTOM);
		p.text("(x1,y1)", x1-5, y1-5);

		p.textAlign(p.CENTER, p.TOP);
		p.text("(x2,y2)", x2+5, y2+10);
	};
};

var ellipseSketch = function(p){
	var canvas;

	p.setup = function(){
		canvas = p.createCanvas(canvasSize, canvasSize);
		canvas.parent("ellipse-canvas");
		p.strokeWeight(0.25);
		p.push();
		p.translate(canvasSize/15, canvasSize/15);

		var gridSize = canvasSize - 2 * canvasSize / 15;
		for(var x=0; x<=10; x++){
			p.line(gridSize / 10 * x, 0, gridSize / 10 * x, gridSize);
		}
		for(var y=0; y<=10; y++){
			p.line(0, gridSize / 10 * y, gridSize, gridSize / 10 * y);
		}
		p.pop();

		var x1 = p.width/2;
		var y1 = p.width/2;
		p.stroke("#000000");
		p.strokeWeight(2);
		p.fill(p5Pink);
		p.ellipse(x1, y1, gridSize / 10 * 6.5, gridSize / 10 * 6.5);

		p.noStroke();
		p.fill("#000000");
		p.ellipse(x1, y1, gridSize/20, gridSize/20);

		p.textFont("Fira Code");
		p.noStroke();
		p.textAlign(p.CENTER, p.BOTTOM);
		p.text("(x1,y1)", x1, y1-10);

		p.push();
		p.translate(p.width/2, p.height/2 + (gridSize / 10 * 6.5)/2 + 7);
		p.textAlign(p.CENTER, p.TOP);
		p.text(terms.width, 0, 0);
		p.pop();

		p.push();
		p.translate(p.width/2, p.height/2);
		p.rotate(-p.PI/2);
		p.textAlign(p.CENTER, p.TOP);
		p.text(terms.height, 0, (gridSize / 10 * 6.5)/2 + 7);
		p.pop();
	};
};

var rectSketch = function(p){
	var canvas;

	p.setup = function(){
		canvas = p.createCanvas(canvasSize, canvasSize);
		canvas.parent("rect-canvas");
		p.strokeWeight(0.25);
		p.textFont("Fira Code");
		p.push();
		p.translate(canvasSize/20, canvasSize/15);

		var gridSize = canvasSize - 2 * canvasSize / 15;
		for(var x=0; x<=10; x++){
			p.line(gridSize / 10 * x, 0, gridSize / 10 * x, gridSize);
		}
		for(var y=0; y<=10; y++){
			p.line(0, gridSize / 10 * y, gridSize, gridSize / 10 * y);
		}

		var x1 = gridSize / 10 * 2;
		var y1 = gridSize / 10 * 2;
		p.stroke("#000000");
		p.strokeWeight(2);
		p.fill(p5Pink);
		p.rect(x1, y1, gridSize / 10 * 5, gridSize / 10 * 5);

		p.noStroke();
		p.fill("#000000");
		p.ellipse(x1, y1, gridSize/20, gridSize/20);

		p.noStroke();
		p.textAlign(p.CENTER, p.BOTTOM);
		p.text("(x1,y1)", x1, y1-10);
		p.pop();

		p.push();
		p.translate(p.width/2, p.height/2);
		p.textAlign(p.CENTER, p.TOP);
		p.text(terms.width, -10, (gridSize/10*5) / 2);
		p.pop();

		p.push();
		p.translate(p.width/2, p.height/2);
		p.rotate(-p.PI/2);
		p.text(terms.height, -10, (gridSize/10*5) / 2 + 7);
		p.pop();
	};
};

var arcSketch = function(p){
	var canvas;

	p.setup = function(){
		canvas = p.createCanvas(canvasSize, canvasSize);
		canvas.parent("arc-canvas");
		p.strokeWeight(0.25);
		p.textFont("Fira Code");
		p.push();
		p.translate(canvasSize/15, canvasSize/15);

		var gridSize = canvasSize - 2 * canvasSize / 15;
		for(var x=0; x<=10; x++){
			p.line(gridSize / 10 * x, 0, gridSize / 10 * x, gridSize);
		}
		for(var y=0; y<=10; y++){
			p.line(0, gridSize / 10 * y, gridSize, gridSize / 10 * y);
		}
		p.pop();

		p.push();
		var x1 = 0;
		var y1 = 0;
		p.fill(p5Pink);
		p.stroke("#000000");
		p.strokeWeight(2);
		p.translate(p.width/2, p.height/2);
		p.arc(x1, y1, gridSize / 10 * 7.5, gridSize / 10 * 7.5, p.PI / 2, 2 * p.PI);

		p.noStroke();
		p.fill("#000000");
		p.ellipse(0, 0, gridSize/20, gridSize/20);
		p.pop();

		p.push();
		p.translate(p.width/2, p.height/2);
			p.textFont("Fira Code");
			p.textAlign(p.CENTER, p.BOTTOM);
			p.text("(x1,y1)", 0, -10);

			p.textAlign(p.CENTER, p.TOP);
			p.text(terms.width, 0, gridSize / 10 * 7.5 / 2 + 5);

			p.text(terms.stop, gridSize / 10 * 6.5 / 4, 3)

			p.push();
				p.rotate(p.PI/2);
				p.text(terms.start, gridSize / 10 * 7.5 / 4, 3);
			p.pop();

			p.push();
				p.rotate(-p.PI/2);
				p.textAlign(p.CENTER, p.BOTTOM);
				p.text(terms.height, 0, -gridSize / 10 * 7.5 / 2 - 5);
			p.pop();
		p.pop();
	};
};

var vertexSketch = function(p){
	var canvas;

	p.setup = function(){
		canvas = p.createCanvas(canvasSize, canvasSize);
		canvas.parent("vertex-canvas");
		p.strokeWeight(0.25);
		p.translate(canvasSize/15, canvasSize/15);

		var gridSize = canvasSize - 2 * canvasSize / 15;
		for(var x=0; x<=10; x++){
			p.line(gridSize / 10 * x, 0, gridSize / 10 * x, gridSize);
		}
		for(var y=0; y<=10; y++){
			p.line(0, gridSize / 10 * y, gridSize, gridSize / 10 * y);
		}

		var x1 = gridSize / 10 * 2;
		var y1 = gridSize / 10 * 2;
		var x2 = gridSize / 10 * 7;
		var y2 = gridSize / 10 * 6;
		var x3 = gridSize / 10 * 2;
		var y3 = gridSize / 10 * 7;

		p.fill(p5Pink);
		p.stroke("#000000");
		p.strokeWeight(2);
		p.beginShape();
			p.vertex(x1, y1);
			p.vertex(x2, y2);
			p.vertex(x3, y3);
		p.endShape(p.CLOSE);

		p.noStroke();
		p.fill("#000000");
		p.ellipse(x1, y1, gridSize/20, gridSize/20);
		p.ellipse(x2, y2, gridSize/20, gridSize/20);
		p.ellipse(x3, y3, gridSize/20, gridSize/20);

		p.textAlign(p.CENTER, p.BOTTOM);
		p.textFont("Fira Code");
		p.text("(x1,y1)", x1, y1 - 7);

		p.textAlign(p.CENTER, p.TOP);
		p.text("(x2,y2)", x2, y2 + 10);
		p.text("(x3,y3)", x3, y3 + 7);
	};
};

var ifelseSketch = function(p){
	var canvas;

	p.setup = function(){
		canvas = p.createCanvas(150, 170);
		canvas.parent("ifelse-canvas");
		p.scale(0.7);
		p.translate(5, 5);

		p.noFill();
		// test
		p.beginShape();
			p.vertex(90, 0);
			p.vertex(170, 20);
			p.vertex(90, 40);
			p.vertex(10, 20);
		p.endShape(p.CLOSE);

		// statements
		p.rect(10, 90, 160, 50);

		// true
		p.line(90, 40, 90, 90);

		// continue program
		p.line(90, 140, 90, 190);

		// false
		p.line(90, 160, 190, 160);
		p.line(190, 160, 190, 20);
		p.line(190, 20, 170, 20);

		// arrows
		p.fill("#000000");
		p.triangle(90, 90, 80, 80, 100, 80);
		p.triangle(90, 190, 80, 180, 100, 180);

		// text
		p.textFont("Fira Code");
		p.text(terms.true, 100, 65);
		p.push();
		p.translate(195,60);
		p.rotate(p.PI/2);
		p.textAlign(p.CENTER, p.BOTTOM);
		p.text(terms.false, 0, 0);
		p.pop();
		p.textAlign(p.CENTER, p.TOP);
		p.text(terms.continue_program, 90, 200);

		p.textStyle(p.BOLD);
		p.textAlign(p.CENTER, p.CENTER);
		p.text(terms.test, 90, 20);
		p.text(terms.statements, 90, 115);
	};
};

new p5(gridSketch);
new p5(lineSketch);
new p5(ellipseSketch);
new p5(rectSketch);
new p5(arcSketch);
new p5(vertexSketch);
new p5(ifelseSketch);