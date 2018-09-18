export function countify(el) {
  el.innerHTML = `
   <div>
      <button>0</button>
    </div>
  `;

  const button = el.querySelector('button');
  button._count = 0;
  button.addEventListener('click', () => {
    button._count++;
    button.textContent = button._count;
  });
}
