const grid = document.querySelector('.sketch');
const clear = document.querySelector('.tools #clear');
const size_label = document.querySelector('#sSize');
const size_slider = document.querySelector('#sizeSlider');
let max_width = 578;
grid.style.width = `${max_width}px`;

createGrid();

size_slider.addEventListener('change', () => {
   createGrid(1);
});

size_slider.addEventListener('input', () => {
   let grid_size = size_slider.value;
   size_label.textContent = grid_size + 'x' + grid_size;
});

clear.addEventListener('click', clearGrid);

function createGrid() {
   const cell_borderSize = 1;
   const grid_size = size_slider.value;
   const outer_border = `${cell_borderSize * 2}px solid rgb(52, 55, 58)`;
   const num_tiles = grid_size * grid_size;
   const cell_size = ((max_width - cell_borderSize * 2) / grid_size) - (cell_borderSize * 2);
   size_label.textContent = grid_size + 'x' + grid_size;

   while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
   }
   for (let i = 0; i < num_tiles; i++) {
      const square = document.createElement('div');
      square.style.width = `${cell_size}px`;
      square.style.height = `${cell_size}px`;
      square.style.border = `${cell_borderSize}px solid rgb(52, 55, 58)`
      square.addEventListener('mouseover', changeColor);
      if (i >= num_tiles - grid_size) {
         square.style.borderBottom = outer_border;
      }
      if (i >= 0 && i < grid_size) {
         square.style.borderTop = outer_border;
      }
      if (i % grid_size === 0) {
         square.style.borderLeft = outer_border;
      }
      if (i % grid_size === grid_size - 1) {
         square.style.borderRight = outer_border;
      }
      grid.appendChild(square);
   }
}

function clearGrid() {
   const cells = document.querySelectorAll('.sketch div');
   cells.forEach(c => c.setAttribute('id', ''));
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
         this.setAttribute('id', 'filledFour');
         break;
      case 'filledFour':
         this.setAttribute('id', 'filledFive');
         break;
      case 'filledFive':
         this.setAttribute('id', 'filledSix');
         break;
      case 'filledSix':
         break;
      default:
         this.setAttribute('id', 'filledOne');
         break;
   }
}