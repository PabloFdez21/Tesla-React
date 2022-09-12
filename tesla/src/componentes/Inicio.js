import React from 'react'
import styled from "styled-components"
import Seccion from "./Seccion"

function Inicio() {
    return ( 
        <Container>
            <Seccion />
        </Container>
    )
}

export default Inicio

const Container = styled.div`
  heigth: 100vh;
`
