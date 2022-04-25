import styled from 'styled-components'

export const StyleNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 72px;
  background-color: #000;
  color: #fff;
`

export const StyleContainerNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
`

export const StyleLogo = styled.img`
  height: 60px;
  width: auto;
  object-fit: contain;
`

export const StyleList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const StyleListItem = styled.li`
  margin: 0 1rem;
`