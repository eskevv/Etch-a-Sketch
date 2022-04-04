const grid = document.querySelector('.sketch');
const clear = document.querySelector('.tools #clear');
const rgbChecked = document.querySelector('#cRGB');

const size_label = document.querySelector('#sSize');
const size_slider = document.querySelector('#sizeSlider');
const border_label = document.querySelector('#sBorder');
const border_slider = document.querySelector('#borderSlider');
let useRGB = false;
let max_width = 578;
grid.style.width = `${max_width}px`;
border_label.textContent = 'Borders: ' + border_slider.value + 'px';

createGrid();

size_slider.addEventListener('change', () => {
   createGrid(1);
});

size_slider.addEventListener('input', () => {
   let grid_size = size_slider.value;
   size_label.textContent = 'Grid: ' + grid_size + 'x' + grid_size;
});

border_slider.addEventListener('change', () => {
   let border = border_slider.value;
   changeBorder(border);
});

border_slider.addEventListener('input', () => {
   let border = border_slider.value;
   border_label.textContent = 'Borders: ' + border + 'px';
});

rgbChecked.addEventListener('change', () => {
   useRGB = !useRGB;
});

clear.addEventListener('click', clearGrid);

function changeBorder(border) {
   const grid_size = size_slider.value;
   const outer_border = `${border * 2}px solid rgb(52, 55, 58)`;
   const num_tiles = grid_size * grid_size;
   const cell_size = ((max_width - border * 2) / grid_size) - (border * 2);
   border_label.textContent = 'Borders: ' + border + 'px';

   const cells = document.querySelectorAll('.sketch div');

   for (let i = 0; i < num_tiles; i++) {
      cells[i].style.width = `${cell_size}px`;
      cells[i].style.height = `${cell_size}px`;
      cells[i].style.border = `${border}px solid rgb(52, 55, 58)`
      if (i >= num_tiles - grid_size) {
         cells[i].style.borderBottom = outer_border;
      }
      if (i >= 0 && i < grid_size) {
         cells[i].style.borderTop = outer_border;
      }
      if (i % grid_size === 0) {
         cells[i].style.borderLeft = outer_border;
      }
      if (i % grid_size === grid_size - 1) {
         cells[i].style.borderRight = outer_border;
      }
   }
}

function createGrid() {
   const cell_borderSize = border_slider.value;
   const grid_size = size_slider.value;
   const outer_border = `${cell_borderSize * 2}px solid rgb(52, 55, 58)`;
   const num_tiles = grid_size * grid_size;
   const cell_size = ((max_width - cell_borderSize * 2) / grid_size) - (cell_borderSize * 2);
   size_label.textContent = 'Grid: ' + grid_size + 'x' + grid_size;

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
   cells.forEach(c => c.style.backgroundColor = '');
}

function changeColor() {
   const level = this.getAttribute('id');

   if (useRGB) {
      const R = Math.floor(Math.random() * 256);
      const G = Math.floor(Math.random() * 256);
      const B = Math.floor(Math.random() * 256);
      this.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
   } else {
      if (this.style.backgroundColor !== '') {
         this.setAttribute('id', 'filledOne');
      }
      this.style.backgroundColor = '';
   }

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
         this.setAttribute('id', 'filledSeven');
         break;
      case 'filledSeven':
         this.setAttribute('id', 'filledEight');
         break;
      case 'filledEight':
         this.setAttribute('id', 'filledNine');
         break;
      case 'filledNine':
         this.setAttribute('id', 'filledNine');
         break;
      default:
         this.setAttribute('id', 'filledOne');
         break;
   }
}