const canvas = document.getElementById('color');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 50;
context.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
  if(!isDrawing) return;
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  // strat form
  context.moveTo(lastX, lastY);
  // end in
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if(heu > 360){
    heu = 0;
  }
}
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}); 
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
