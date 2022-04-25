// Base
import React,{ useState } from 'react'
import axios from 'axios'

//Utils
import { url } from '../utils/url'
import { fileUpload } from '../utils/fileUpload'

// Styles
import { StyleContainerView, StyleForm, StyleLabel, StyleButton } from '../styles/StyleRegistro'

const Registro  = () => {
  const [registrar, setRegistrar] = useState({
    nombre: '',
    apellidos: '',
    numero: '',
    posicion: '',
    imagen: ''
  })

  const handleFileUpload = ({ target }) => {
    const file = target.files[0]
    fileUpload(file)
    .then(response => {
      registrar.imagen = response
    })
    .catch(error => console.log(error))
  }

  const handleChange = ({target}) => {
    setRegistrar({
      ...registrar,
      [target.name]: target.value
    })
  }

  const handleSubmit  = async (e) => {
    e.preventDefault()
    const res = await axios.post(url, registrar)
    console.log(res)
  }

  return (
    <StyleContainerView style={{marginTop: '200px'}} >
      <StyleForm id="form" onSubmit={handleSubmit}>
        <label>Nombre</label>
        <StyleLabel type="text" name="nombre" onChange={handleChange} required/>

        <label>Apellido</label>
        <StyleLabel type="text" name="apellidos" onChange={handleChange} required/>

        <label>Número</label>
        <StyleLabel type="text" name="numero" min={0} onChange={handleChange} required/>

        <label>Posición</label>
        <StyleLabel type="text" name="posicion" onChange={handleChange} required/>

        <label>Imagen</label>
        <StyleLabel type="file" name="imagen" onChange={handleFileUpload} required/>

        <StyleButton>Guardar</StyleButton>
      </StyleForm>
    </StyleContainerView>
  )
}

export default Registro
