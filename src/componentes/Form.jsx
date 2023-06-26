import React, { useState, useEffect } from 'react';
import '../estilos/ProductoAgregar.css';
import '../estilos/Botones.css'
import '../estilos/inputForm.css'

// Se define el estado inicial del formulario

const initialForm = {
  category: "",
  productName: "",
  quantity: "",
  unitPrice: ""
};

// Componente FORM . Acepta 4 propiedades pasadas como argumentosexplci

const Form = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm); //usamos usestate para guardar y manejar la info del formulario
                                                // esta funcion inicializa el formulario con unos valores iniciales.

  useEffect(() => {  // permite ejecutar un código específico en ciertos momentos durante el ciclo de vida del componente
                    // En este caso, se ejecutará cuando cambie el valor de dataToEdit.
    
      if (dataToEdit) { // si tiene un valor, significa que hay informacion para editar disponible
      setForm(dataToEdit);
    } else { // Si no hay , se llama a la funcion setForm que restablece los valores con los iniciales
      setForm(initialForm);
    }
  }, [dataToEdit]); //Argumento que espeifica que variable debe observar para determinar cuando ejecutarse


    // Maneja los cambios en los campos del formulario

  const handleChange = (e) => {
    setForm({ //se usar la funcion para actualizar el estado del formulario
      ...form, // esto crea una copia del estado . Se hace para no modificar directamente el estado actual
      [e.target.name]: e.target.value, // despues de crear la copia , se agrega esta propiedad. Cada campo de entrada tiene un
                                      // un atributo name que se utiliza para identificar de manera unica ese campo
    });
  };

  // Maneja el envío del formulario , se fija de no se envie vacio

  const handleSubmit = (e) => {
    e.preventDefault();

      // Se valida que todos los campos estén completos

    if (!form.category || !form.productName || !form.quantity || !form.unitPrice) {
      alert("Falta completar datos");
      return;
    }

    if (dataToEdit) { // se verifica si tiene un valor dataToEdit 
      updateData(form); // si tiene valor , se llama a la funcion updateData pasandole de argumento form
    } else {
      createData(form); // lo mimso pero llamando otra funcion.
    }

     // Se reinicia el formulario
    handleReset();
  };

    // Reinicia el formulario
  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      {/* <h3>{dataToEdit ? "Editar" : "Agregar"}</h3> */}
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="category">Categoría:</label>
        <select id="category" name="category" value={form.category} onChange={handleChange}>
            <option value="">Seleccione una categoría</option>
            <option value="Limpieza">Limpieza</option>
            <option value="Comestibles">Comestibles</option>
            <option value="Descartables">Descartables</option>
            <option value="Bebidas">Bebidas</option>
            <option value="Electrónicos">Electrónicos</option>
            <option value="Carnes">Carnes</option>
            <option value="Frutas y Verduras">Frutas y Verduras</option>
            <option value="Panadería">Panadería</option>
            <option value="Cuidado Personal">Cuidado Personal</option>
        </select>


        <label htmlFor="productName">Producto:</label>
        <input type="text" placeholder='Ingresar Producto' className='inputs' id="productName" name="productName" value={form.productName} onChange={handleChange} />

        <label htmlFor="quantity">Cantidad:</label>
        <input type="text" placeholder='Ingresar Cantidad'  className='inputs' id="quantity" name="quantity" value={form.quantity} onChange={handleChange} />

        <label htmlFor="unitPrice">Precio unitario:</label>
        <input type="text"  placeholder='Ingresar Precio Unitario' className='inputs' id="unitPrice" name="unitPrice" value={form.unitPrice} onChange={handleChange} />

        <div className='ContenedorBotones'>
          <button className='BotonAgregar' type="submit">{dataToEdit ? "Aceptar" : "Agregar"}</button>            {/* si DataToEdit tiene valor, se devuelve Aceptar como resultado, de lo contrario Agregar */}
          <button className='BotonLimpiar' type="reset" onClick={handleReset}>Limpiar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;

