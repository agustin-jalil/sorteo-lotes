import styled from 'styled-components';
import PropTypes from 'prop-types';

const FieldsetInputForm = styled.fieldset `
    display: flex;
    flex-direction: column;
`
const Datos = styled.legend `
  border: none;
  text-decoration:underline darkblue; 
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const SectionLabel = styled.legend`
  font-size:25px;
  margin-top: 15px;
  margin-bottom: 25px;
`

const InputDatos = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  font-size: 25px;
  color: #767676;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius:15px;    
  text-align: start;
  cursor: pointer;
  padding: 25px;
  

  &:focus {
    /* Add focus styles here */
    border-color: lightblue; /* Change border color on focus */
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0px 0px 5px 1px rgba(173, 216, 230, 1);
    -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0px 0px 5px 1px rgba(173, 216, 230, 1);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0px 0px 5px 1px rgba(173, 216, 230, 1);
    outline: none;
    transition: border-color ease-in-out 0.30s, box-shadow ease-in-out 0.30s;
  }

  &[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }

  /* WebKit-based browsers (Chrome, Safari) */
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
`
const Alerta = styled.p`
  font-size:17.5px;
  margin-top:10px;
  margin-bottom:10px;
  border-radius: 10px;
  text-align:center;
  border: 2px solid darkred;
  color: darkred;
`

const ATagForm = styled.a `
  cursor:pointer;
  width:100%;
  height:35px;
  display:flex;
  align-items:center;
  justify-content:start;
  font-size:large;
  margin-top:5px;
  margin-bottom:10px;
  
`
const PTagForm = styled.p`
  font-size:large;
`


function DatosPersonales ({datosH1,
  section,
  sectionCuil, 
  alertaUno,
  alertaDos,
  pTagForm,
  aTagForm, 
  aTagTitle,
  InputNombre,
  InputCuil,
}) {
    return(
        <>
            <FieldsetInputForm>
                <Datos><h1>{datosH1}</h1></Datos>
                    <SectionLabel htmlFor="">
                      {section}
                    </SectionLabel>

                  <>
                    <InputDatos type={InputNombre} required aria-required="true" />
                    <Alerta className="help-block error alert alert-danger" role="alert">
                    {alertaUno}
                    </Alerta>
                  </>

                    <SectionLabel htmlFor="">
                      {sectionCuil}
                    </SectionLabel>
                    <PTagForm>
                      {pTagForm}
                    </PTagForm>

                  <ATagForm href={aTagForm} target="_blank" rel="noopener noreferrer">
                    {aTagTitle}
                  </ATagForm>

                  <>
                    <InputDatos type={InputCuil} required aria-required="true" />
                    <Alerta className="help-block error alert alert-danger" role="alert">
                    {alertaDos}
                    </Alerta>
                  </>
            </FieldsetInputForm>
        </>
    );
}


DatosPersonales.propTypes = {
    datosH1: PropTypes.string.isRequired,
    nombreH1: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired,
    sectionCuil:PropTypes.string.isRequired,
    cuilH1: PropTypes.string.isRequired,
    alertaUno: PropTypes.string.isRequired,
    alertaDos: PropTypes.string.isRequired,
    pTagForm: PropTypes.string.isRequired, // Corrected from PropTypes.string.isRequered
    aTagForm: PropTypes.string.isRequired,
    aTagTitle: PropTypes.string.isRequired,
    InputNombre: PropTypes.string.isRequired,
    InputCuil: PropTypes.number.isRequired, 
  };
export default DatosPersonales;