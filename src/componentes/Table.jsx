import React from 'react';
import TableRow from './TableRow';
import '../estilos/Tabla.css';

const Table = ({ data, setDataToEdit, deleteData }) => { // 3 propiedades como argumento
  return (
    <div className='TablaDatos'>
      <h3 className='TituloTabla'>Tabla de Datos</h3>
      <table className='Tabla'>
        <thead>
          <tr className='ColTabla'>
            <th>Fecha</th>
            <th>Categoría</th>
            <th>Producto</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? ( //se verifica si la lognitud de data es 0. Si es asi , se muestra el texto.
            <tr>
              <td colSpan="7">Sin datos</td>
            </tr>
          ) : (
            data.map((el) => ( //map recorre cada objeto de la lista y realiza una accion para cada uno.
                              // en este caso , es crear una fila de datos en la tabla utilizando el componente debajo.
              <TableRow
                key={el.id} //identificador unico de cada fila , es el "id"
                row={el} // objeto que representa los datos de la fila. le pasamos 'el' , que es el objeto actual del bucle
                setDataToEdit={setDataToEdit} //llamamos estas acciones
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

