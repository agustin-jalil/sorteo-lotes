import styled from 'styled-components';
import DatosPersonales from './DatosPersonales';
import Domicilio from './Domicilio';
import LugarDeTrabajo from './LugarDeTrabajo';
import SituacionDeRevista from './SituacionDeRevista';
import DatosContacto from './DatosContacto';
import PropiedadGrupo from './PropiedadGrupo';
import FamiliarCargo from './FamiliarCargo';

const FormMain = styled.main`
  font-family: "Encode Sans",Arial,sans-serif;
  height: 87.5%;
  width: 100%;
  display: flex; 
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  margin-bottom:15px;
  `;

const FormContainer = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const FormH1 = styled.h1`
  /* Styles for h1 */
  margin-top:0.5em;
  margin-bottom:0.5em;
  text-decoration: underline darkblue;
`;

const FormH2 = styled.h2`
  /* Styles for h1 */
  width:90%;
  margin-top:0.5em;
  margin-bottom:0.5em;
  text-align:center;
`;

const FormTerrenos = styled.form`
  /* Styles for the form */
  width: 90%;
  max-height:auto;
`;

const CardRequisitos = styled.div `
  border-radius: 25px;
  border: 1px solid #ddd;
  padding-bottom: 20px;
  box-shadow: 0px 0px 10px 0px lightgrey;
  margin-block:10px;
`

const Paragraph = styled.p`
  font-size:medium;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align:center;
`

const BotonFinalizar = styled.button`
  height:50px;
  width:200px;
  border-radius:15px;
  margin-top: 30px;
  border: 1px solid yellow;
  background-color:lightblue;
  color: #0f2554;
  text-align:center;
  font-size: x-large;
  transition: ease-in-out 0.3s;

  &:hover{
    color: lightblue;
    background-color:#0f2554;
  }
`
const CardRequisitosH2 = styled.h2`
  text-align:center;
`
const CardRequisitosH3 = styled.h3`
  text-align:center;
`
function Form() {

  return (
    <>
      <FormMain>
        <FormContainer>
          <FormH1>Mi terreno</FormH1>
          <FormH2>Operatoria de la Caja Municipal de Crédito - Programa Mi Terreno Zona Sur #TuCapital</FormH2>
          <FormTerrenos action="#" method="post">
            <CardRequisitos>
              <CardRequisitosH2>Requisitos fundamentales para aplicar al crédito.</CardRequisitosH2>
              <CardRequisitosH3>1.       Certificado emitido
                  por la Dir. Gral.  del Registro de la Propiedad
                  que acredite no tener una propiedad a su nombre en la provincia. Formulario
                  F-03
              </CardRequisitosH3>
              <CardRequisitosH3>2.       Garantía personal 
              </CardRequisitosH3>
            </CardRequisitos>
            <Paragraph>
              Todos los datos consignados en el presente formulario
              tendrán el carácter de declaración jurada.
            </Paragraph>
            <DatosPersonales
              datosH1='Datos Personales'
              section='Nombre y Apellido'
              alertaUno='Ingresa tu Nombre y Apellido'
              sectionCuil='Cuil'
              pTagForm='Sin guiones ni barras.'
              aTagForm='https://www.anses.gob.ar/consultas/constancia-de-cuil'
              aTagTitle='Consulta tu Cuil'
              alertaDos='Ingresá tu Cuil
              /Tu Cuil tiene un formato no válido'
              InputNombre="text" // Set the input type for Nombre
              InputCuil="text" // Set the input type for Cuil
            >
            </DatosPersonales>
            <Domicilio
              domicilioH1='Domicilio'
              section='Codigo Postal:'
              alerta= 'ingresa tu Calle'
            >
            </Domicilio>
            <Domicilio
              section='Calle:'
              alerta= 'ingresa tu Calle'
            >
            </Domicilio>
            <Domicilio
              section='Numero de Calle:'
              alerta= 'ingresa tu Numero de Calle'
            >
            </Domicilio>
            <Domicilio
              section='Piso:'
              displayAlert={false}
            >
            </Domicilio>
            <Domicilio
              section='Departamento:'
              displayAlert={false}
            >
            </Domicilio>
            <DatosContacto
              datoscontactoH1='Datos de Contacto'
              sectionNumero = 'Teléfono móvil:'
              section= 'Dirección de correo electrónico:'
              alerta='Ingresa tu Correo Electronico'
            >
            </DatosContacto>
            <LugarDeTrabajo
              LugarDeTrabajoH1='Lugar de Trabajo'
              section='Especificar lugar de trabajo'
              alerta='Ingresa lugar de trabajo'
            >
            </LugarDeTrabajo>
            <SituacionDeRevista
              revistaH1='Situacion de Revista'
            >
            </SituacionDeRevista>
            <PropiedadGrupo
              PropiedadGrupoH1='Propiedad a su nombre'
            >
            </PropiedadGrupo>
            <PropiedadGrupo
              PropiedadGrupoH1='Grupo Familiar'
            >
            </PropiedadGrupo>

            <FamiliarCargo 
              FamiliarCargoH1='Si tiene un Familiar a Cargo'
              section='Especificar'
            >
            </FamiliarCargo>
            <BotonFinalizar>Finalizar</BotonFinalizar>
          </FormTerrenos>
        </FormContainer>
      </FormMain>
    </>
  );
}

export default Form;
