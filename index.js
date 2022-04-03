const grid = document.querySelector('.sketch');
const cell_borderSize = 2;
const max_width = (16 + cell_borderSize) * 16 + cell_borderSize;
grid.style.maxWidth = `${max_width}px`;

for (let i = 0; i < 256; i++) {
   const square = document.createElement('div');
   square.addEventListener('mouseover', changeColor);
   if (i >= 240) {
      square.style.borderBottom = `${cell_borderSize}px solid rgb(92, 108, 129)`;
   }
   if (i >= 0 && i < 16) {
      square.style.borderTop = `${cell_borderSize}px solid rgb(92, 108, 129)`;
   }
   if (i % 16 === 0) {
      square.style.borderLeft = `${cell_borderSize}px solid rgb(92, 108, 129)`;
   }
   if (i % 16 === 15) {
      square.style.borderRight = `${cell_borderSize}px solid rgb(92, 108, 129)`;
   }
   grid.appendChild(square);
}

function changeColor() {
   const level = this.getAttribute('id');

   switch (level) {
      case 'filledOne':
         this.setAttribute('id', 'filledTwo');
         break;
      case 'filledTwo':
         this.setAttribute('id', 'filledThree');
         break;
      case 'filledThree':
         this.setAttribute('id', 'filledThree');
         break;
      default :
         this.setAttribute('id', 'filledOne');
         break;
   }
}