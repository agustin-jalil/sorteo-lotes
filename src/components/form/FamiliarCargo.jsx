import styled from 'styled-components';
import PropTypes from 'prop-types';

const FieldsetInputForm = styled.fieldset `
    display: flex;
    flex-direction: column;
    margin-top:25px;
    margin-bottom:25px;
`
const Datos = styled.legend `
  border: none;
  text-decoration:underline darkblue; 
  margin-top: 1rem;
  margin-bottom: 1rem;
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
const SectionLabel = styled.legend`
  font-size:25px;
  margin-top: 15px;
  margin-bottom: 25px;
`

function FamiliarCargo ({FamiliarCargoH1,
  section,
  inputDatosType,
}) {
    return(
        <>
            <FieldsetInputForm>
                <Datos><h1>{FamiliarCargoH1}</h1></Datos>
                <>
                    <SectionLabel htmlFor="">
                      {section}
                    </SectionLabel>
                    <InputDatos type={inputDatosType} required aria-required="true" />
                </>
            </FieldsetInputForm>
        </>
    );
}


FamiliarCargo.propTypes = {
  FamiliarCargoH1: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
  inputDatosType: PropTypes.string.isRequired,
};
export default FamiliarCargo;