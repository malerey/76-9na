let operaciones = [
  { monto: 100, categoria: 'salidas', tipo: 'gasto' },
  { monto: 200, categoria: 'alquiler', tipo: 'ganancia' },
  { monto: 5000, categoria: 'loteria', tipo: 'ganancia' },
  { monto: 10000, categoria: 'auto', tipo: 'ganancia' },
  { monto: 1000, categoria: 'salidas', tipo: 'ganancia' },
  { monto: 2000, categoria: 'alquiler', tipo: 'gasto' },
  { monto: 500, categoria: 'loteria', tipo: 'gasto' },
  { monto: 100, categoria: 'auto', tipo: 'gasto' },
  { monto: 1000, categoria: 'salidas', tipo: 'ganancia' },
  { monto: 2000, categoria: 'alquiler', tipo: 'gasto' },
  { monto: 500, categoria: 'loteria', tipo: 'gasto' },
  { monto: 100, categoria: 'auto', tipo: 'gasto' },
];

const categorias = ['salidas', 'alquiler', 'loteria', 'auto'];

const convertirOperacionesAHTML = (array) => {
  console.log(array[0])
  const html = array.reduce((acc, curr, index) => {
    return (
      acc +
      `
    <div class="operacion is-flex">
      <p>${curr.tipo}</p>
      <p>${curr.monto}</p>
      <p>${curr.categoria}</p>
      <button class="boton-eliminar" id="boton-eliminar-${index}">Eliminar</button>
      <button class="boton-editar" id="boton-editar-${index}">Editar</button>
    </div>
    `
    );
  }, '');

  const listaOperaciones = document.querySelector('#lista-operaciones');

  listaOperaciones.innerHTML = html;

  crearBotonesEliminar();
  crearBotonesEditar();
};

const crearFormularioEditar = (id) => {
  const formEdicion = document.querySelector("#form-editar")
  const objeto = operaciones[id]
  
  formEdicion.innerHTML = `
  <form id="form-editar-operaciones">
  <label>Categoria
    <input type="text" value="${objeto.categoria}" id="input-categoria">
    </label>
    <label>Monto
    <input type="number" value="${objeto.monto}" id="input-monto">
    </label>
    <button type="button">Cancelar</button>
    <input type="submit" value="Editar" id="cancelar-edicion">
  </form>
  `

  const formEditarOperacion = document.querySelector("#form-editar-operaciones")
  const inputCategoria = document.querySelector("#input-categoria")
  const inputMonto = document.querySelector("#input-monto")
  const formCancelar = document.querySelector("#cancelar-edicion")


  formCancelar.onclick = () => {
    // ocultar el formulario 
  }

  formEditarOperacion.onsubmit = (e) => {
    e.preventDefault()

    const valorMonto = Number(inputMonto.value)
    const valorCategoria = inputCategoria.value

    objeto.monto = valorMonto
    objeto.categoria = valorCategoria
    convertirOperacionesAHTML(operaciones)
  }

}

const crearBotonesEditar = () => {
  const botonesEditar = document.querySelectorAll('.boton-editar');
  for (let i = 0; i < botonesEditar.length; i++) {
    botonesEditar[i].onclick = () => {
      const idRecortado = botonesEditar[i].id.slice(13)
      idDelBoton = Number(idRecortado);

      crearFormularioEditar(idDelBoton)
    };
  }
};

const crearBotonesEliminar = () => {
  const botonesEliminar = document.querySelectorAll('.boton-eliminar');
  for (let i = 0; i < botonesEliminar.length; i++) {
    botonesEliminar[i].onclick = () => {
      const idRecortado = botonesEliminar[i].id.slice(15)
      idDelBoton = Number(idRecortado);
      const arrayFiltrado = operaciones.filter((elemento, index) => {
        return index !== idDelBoton;
      });
      operaciones = arrayFiltrado;
      convertirOperacionesAHTML(arrayFiltrado);
    };
  }
};

convertirOperacionesAHTML(operaciones);

