import React from 'react'
import styled from "styled-components"

function Seccion() {
    return (
        <Wrap>
            <ItemText>
                <h1>Model S</h1>
                <p>Pidelo online</p>
            </ItemText>

            <Botones>
                <ButtonGroup>
                    <LeftButton>Pedido nuevo</LeftButton>
                    <RigthButton>Inventario existente</RigthButton>
                </ButtonGroup>
                <Flecha src="tesla\public\imagenes\down-arrow.svg" />
            </Botones>
        </Wrap>
    )
}

export default Seccion
const Wrap = styled.div`
width: 100vw;
heigth; 100vh;
background-size: cover;
background-image: url('tesla/public/imagenes/model-s.jpg');
background-position:center;
background-repeat: no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between; //alineamiento vertical
align-items: center;


`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`
const ButtonGroup = styled.div`
  display: flex;
  margin-botton: 30px;
`
const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width: 256px;
color: white;
display:flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase:
font-size: 12px;
cusor: pointer;
margin:8px;

40.36

`
const RigthButton = styled(LeftButton)``

const Flecha = styled.img`
  margin-top: 20px;
  heigth: 40px;
`

const Botones = styled.div``
