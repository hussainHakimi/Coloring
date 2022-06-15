const canvas = document.getElementById('color');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.strokeStyle = '#BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 50;
    ctx.globalCompositeOperation = 'multiply';

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;

    function draw(e) {
      if(!isDrawing) return;
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.beginPath();
      // strat form
      ctx.moveTo(lastX, lastY);
      // end in
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();

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
