// Base
import React, { useEffect, useState } from 'react'
import axios from 'axios'

//Utils
import { url } from '../utils/url'


// Styles
import {
  StyleContainerView,
  StyleTable,
  StyleImageTable,
  StyleButton
} from '../styles/StyleListado'

const Listado = () => {
  const [listado, setListado] = useState([])
  const getData = async () => {
    const res = await axios.get(url)
    console.log(res)
    setListado(res.data)
  }

  const deleteData = async (id) => {
    await axios.delete(`${url}/${id}`)
    getData()
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <StyleContainerView>
      <StyleTable>
        <thead>
          <tr>
            <th>Nombre Jugador</th>
            <th>Apellido Jugado</th>
            <th>Número</th>
            <th>Posición</th>
            <th>Imagen</th>
            <th>Acción</th>
          </tr>
        </thead>

        <tbody>
          {
            listado.map(item => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.apellidos}</td>
                <td>{item.numero}</td>
                <td>{item.posicion}</td>
                <td><StyleImageTable src={item.imagen} alt={item.name}/></td>
                <td>
                  <StyleButton onClick={() => deleteData(item.id)}>
                    Eliminar
                  </StyleButton>
                </td>
              </tr>
            ))
          }
        </tbody>
      </StyleTable>

    </StyleContainerView>
  )
}

export default Listado
