import React, { useState } from 'react';
import Form from './Form';
import Table from './Table';

const TableApp = () => {
  // Creamos dos variables de estado: data y dataToEdit
  const [data, setData] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  // Función para agregar nuevos datos al estado data
  const createData = (formData) => {
    // Creamos un nuevo objeto newData con un identificador único (id) y la fecha actual
    const newData = {
      id: Date.now(), 
      date: new Date().toLocaleDateString(),
      ...formData
    };
    // Agregamos el nuevo objeto newData al estado data
    setData([...data, newData]);
  };

  // Función para actualizar datos existentes en el estado data
  const updateData = (formData) => {
    // Recorremos los datos en el estado data y buscamos el objeto que coincide con el id del formulario
    // Luego, actualizamos los datos de ese objeto con los nuevos datos del formulario

    const updatedData = data.map((el) => {  //Se declara una variable para almacenar la nueva lista de datos actualizados
                                           // Se utiliza el método map() para recorrer cada elemento 'el' en la lista 'data' y crear una nueva lista con las modificaciones realizadas.
      if (el.id === formData.id) { //verifica si id es igual al id del formulario actuzalizado
        return {
          ...el, 
          ...formData

           //si los id coinciden , se crea un nuevo objeto para copiar todas las propiedades del producto existente (el)
          //y todas las propiedades del objeto 'FormData'.  reemplaza las propiedades existentes con las nuevas propiedades del formulario actualizado.
        };
      }
      return el; //Si los id no coinciden, se devuelve el elemento original sin modificaciones.
    });
    // Actualizamos el estado data con los datos actualizados
    setData(updatedData);
  };

  // Función para eliminar datos del estado data
  const deleteData = (id) => {
    // Mostramos una confirmación para asegurarnos de que el usuario desea eliminar los datos
    const isDelete = window.confirm(`Estás seguro que deseas eliminar el registro con ID '${id}'?`);
    if (isDelete) {
      // Filtramos los datos en el estado data y eliminamos el objeto que coincide con el id
      const updatedData = data.filter((el) => el.id !== id);
      // Actualizamos el estado data con los datos actualizados (sin el objeto eliminado)
      setData(updatedData);
    }
  };

  // Renderizamos el componente principal TableApp
  return (
    <div>
      <h2 className='tituloApp'>Almacén de Productos</h2>
      <Form createData={createData} updateData={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
      <Table data={data} setDataToEdit={setDataToEdit} deleteData={deleteData} />
    </div>
  );
};

export default TableApp;


/* 

Form: 

createData:  función que se encarga de crear nuevos datos en la lista data.
updateData: función que se encarga de actualizar los datos que ya existen en la lista data.
dataToEdit: variable que contiene los datos del elemento que se está editando actualmente.
setDataToEdit: Es una función que se utiliza para actualizar el valor de dataToEdit y así permitir la edición de los datos.


Table: 

data: lista que contiene los datos de los productos.
setDataToEdit:  función que se utiliza para actualizar el valor de dataToEdit y así permitir la edición de los datos.
deleteData:  función que se encarga de eliminar datos de la lista data.


*/

