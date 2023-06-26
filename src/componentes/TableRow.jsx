import React from "react";
import '../estilos/Botones.css';
const TableRow = ({ row, setDataToEdit, deleteData }) => {
  return (
    <tr>
      <td>{row.date}</td>
      <td>{row.category}</td>
      <td>{row.productName}</td>
      <td>{row.unitPrice}</td>
      <td>{row.quantity}</td>
      <td>{row.unitPrice * row.quantity}</td>
      <td>
      <ion-icon name="trash-outline" onClick={() => deleteData(row.id)}  style={{ color: '#FF0000' }}></ion-icon>
      <ion-icon name="create-outline" onClick={() => setDataToEdit(row)}  style={{ color: '#2196F3' }}></ion-icon>


      {/* botones con texto */}

        {/* <button  className="BotonEditar" onClick={() => setDataToEdit(row)}>Editar</button> */}
        {/* <button className="BotonEliminar" onClick={() => deleteData(row.id)}>Eliminar</button> */}
      </td>
    </tr>
  );
};

export default TableRow;
