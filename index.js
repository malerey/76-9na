let operaciones = [
  { monto: 100, categoria: 'salidas', tipo: 'gasto' },
  { monto: 200, categoria: 'alquiler', tipo: 'ganancia' },
  { monto: 5000, categoria: 'loteria', tipo: 'ganancia' },
  { monto: 10000, categoria: 'auto', tipo: 'ganancia' },
  { monto: 1000, categoria: 'salidas', tipo: 'ganancia' },
  { monto: 2000, categoria: 'alquiler', tipo: 'gasto' },
  { monto: 500, categoria: 'loteria', tipo: 'gasto' },
  { monto: 100, categoria: 'auto', tipo: 'gasto' },
];

const categorias = ['salidas', 'alquiler', 'loteria', 'auto'];

const convertirOperacionesAHTML = array => {
  const html = array.reduce((acc, curr, index) => {
    return (
      acc +
      `
    <div class="operacion is-flex">
      <p>${curr.tipo}</p>
      <p>${curr.monto}</p>
      <p>${curr.categoria}</p>
      <button class="boton-eliminar" id="${index}">Eliminar</button>
      <button class="boton-editar">Editar</button>
    </div>
    `
    );
  }, '');

  const listaOperaciones = document.querySelector('#lista-operaciones');

  listaOperaciones.innerHTML = html;

  crearBotonesEliminar();
};

const crearBotonesEliminar = () => {
  const botonesEliminar = document.querySelectorAll('.boton-eliminar');
  for (let i = 0; i < botonesEliminar.length; i++) {
    botonesEliminar[i].onclick = () => {
      idDelBoton = Number(botonesEliminar[i].id);
      const arrayFiltrado = operaciones.filter((elemento, index) => {
        return index !== idDelBoton;
      });
      operaciones = arrayFiltrado;
      convertirOperacionesAHTML(arrayFiltrado);
    };
  }
};

convertirOperacionesAHTML(operaciones);
