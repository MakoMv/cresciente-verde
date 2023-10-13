let slider;
let treeLength = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, 200, treeLength);
  slider.position(20, 20);
  slider.style('width', '200px');
  slider.input(updateTree);
}

function draw() {
  background(0, 100, 0); // Fondo verde oscuro
  translate(width / 2, height);
  stroke(139, 69, 19); // Color marrón para el tronco
  strokeWeight(5);

  // Dibuja el tronco del árbol
  line(0, 0, 0, -treeLength);

  // Llama a la función para dibujar las ramas
  drawBranch(treeLength);
}

function drawBranch(branchLength) {
  if (branchLength > 4) {
    // Dibuja la rama derecha
    push();
    rotate(PI / 5);
    line(0, 0, 0, -branchLength * 0.67);
    translate(0, -branchLength * 0.67);
    drawBranch(branchLength * 0.67);
    pop();

    // Dibuja la rama izquierda
    push();
    rotate(-PI / 5);
    line(0, 0, 0, -branchLength * 0.67);
    translate(0, -branchLength * 0.67);
    drawBranch(branchLength * 0.67);
    pop();
  }
}

function updateTree() {
  treeLength = slider.value();
}
