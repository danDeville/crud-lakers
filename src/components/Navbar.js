import React from 'react'
import { Link } from 'react-router-dom'
import { StyleNavbar, StyleContainerNav, StyleLogo, StyleList, StyleListItem } from '../styles/StyleNavbar'

const Navbar = () => {
  return (
    <StyleNavbar>
      <StyleContainerNav>
        <StyleLogo
          src="https://res.cloudinary.com/dz8on44po/image/upload/v1650856011/CRUD/spaifwwl6zkhp58fm04s.png"
          alt="Logo Lakers"
        />

        <StyleList>
          <StyleListItem>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none'}}>
              Listado
            </Link>
          </StyleListItem>

          <StyleListItem>
            <Link to="/registro" style={{ color: '#fff', textDecoration: 'none'}}>
              Registro
            </Link>
          </StyleListItem>
        </StyleList>
      </StyleContainerNav>
    </StyleNavbar>
  )
}

export default Navbar