import styled from 'styled-components'

export const StyleContainerView = styled.div`
  width: 100%;
  height: calc(100vh - 72px);
  max-width: 550px;
  margin: 0 auto;
  margin-top: 72px;
  padding: 20px

`

export const StyleForm = styled.form`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const StyleLabel = styled.input`
  width: 100%;
  height: 28px;
  margin: 12px 0 20px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
`

export const StyleButton = styled.button`
  width: 100%;
  height: 40px;
  margin: 12px 0 20px 0;
  border-radius: 4px;
  color: #fff;
  background-color: #54297f;
  border: none;
`