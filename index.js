const grid = document.querySelector('.sketch');
const clear = document.querySelector('.tools #clear')
const size_label = document.querySelector('.slider label')
const size_slider = document.querySelector('#sizeSlider')

const cell_borderSize = 2;
const border_style = `${cell_borderSize}px solid rgb(52, 55, 58)`;

createGrid();

size_slider.addEventListener('change', () => {
   createGrid();
})

size_slider.addEventListener('input', () => {
   let grid_size = size_slider.value;
   size_label.textContent = grid_size + 'x' + grid_size;
})

clear.addEventListener('click', clearGrid);

function createGrid() {
   let grid_size = size_slider.value;
   let max_width = (16 + cell_borderSize) * grid_size + cell_borderSize;
   let num_tiles = grid_size * grid_size;

   size_label.textContent = grid_size + 'x' + grid_size;
   grid.style.width = `${max_width}px`;
   while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
   }
   for (let i = 0; i < num_tiles; i++) {
      const square = document.createElement('div');
      square.addEventListener('mouseover', changeColor);
      if (i >= num_tiles - grid_size) {
         square.style.borderBottom = border_style;
      }
      if (i >= 0 && i < grid_size) {
         square.style.borderTop = border_style;
      }
      if (i % grid_size === 0) {
         square.style.borderLeft = border_style;
      }
      if (i % grid_size === grid_size - 1) {
         square.style.borderRight = border_style;
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
         this.setAttribute('id', 'filledThree');
         break;
      default:
         this.setAttribute('id', 'filledOne');
         break;
   }
}