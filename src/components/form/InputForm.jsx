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
const LegendForm = styled.legend `
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
const SectionLabel = styled.label`
  font-size:30px;
  margin-top: 15px;
  margin-bottom: 15px;
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
const NumeroDeTelefonoArea = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  display:flex;
  flex-direction:row;
  align-items:start;
  justify-content:center;
`

const NumeroDeTelefonoInputZero = styled.input`
  display: block;
  width: 65%;
  height: 50px;
  font-size: 25px;
  color: #767676;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0px 15px 15px 0px;
  cursor: pointer;
  padding: 20px;


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

const AlertaNumeroZero = styled.p`
  font-size:17.5px;
  margin-top:10px;
  margin-bottom:10px;
  border-radius: 10px;
  border: 2px solid darkred;
  color: darkred;
  width: 100%; 
`
const AreaZero = styled.div`
  width:15%;
  display:flex;
  flex-direction:column;
  align-items:start;
  justify-content:center;
  padding:5px;
`
const NumeroDeTelefonoZero = styled.label`
  width: 35%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:25px;
  background-color: lightgrey;
  height: 50px;
  padding: 5px;
  border-radius: 15px 0px 0px 15px;
`
const AlertaNumeroQuince = styled.p`
  font-size:17.5px;
  margin-top:10px;
  margin-bottom:10px;
  border-radius: 10px;
  text-align:center;
  border: 2px solid darkred;
  color: darkred;
  width: 100%;
`
const AreaQuince = styled.div`
  padding:5px;
  width:85%;
  display:flex;
  flex-direction:column;
  align-items:start;
  justify-content:center;
`
const NumeroDeTelefonoQuince = styled.label`
  width: 10%;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:25px;
  background-color: lightgrey;
  height:50px;
  padding: 5px;
  border-radius: 15px 0px 0px 15px;
`
const NumerosArea = styled.div`
  width:100%;
  display:flex;
  align-items:start;
  justify-content:start;
`

const NumeroDeTelefonoInputQuince = styled.input`
  display: block;
  width: 90%;
  height: 50px;
  font-size: 25px;
  color: #767676;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0px 15px 15px 0px;
  cursor: pointer;
  padding: 20px;


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

function InputForm ({datosH1,
  legendFormH1, 
  alerta,
  section,
  pTagForm,
  aTagForm, 
  aTagTitle,
  displayInputNumero,
  displayInputDatos,
  displaySection,
  displayDatosH1,
  displayLegendFormH1,
  displayPTagForm,
  displayATagForm,
  InputDatosType,
}) {
    return(
        <>
            <FieldsetInputForm>
                {displayDatosH1 !== false && <Datos><h1>{datosH1}</h1></Datos>}
                {displayLegendFormH1 !== false && <LegendForm><h1>{legendFormH1}</h1></LegendForm>}
                
                {displayPTagForm !== false &&
                    <PTagForm>
                      {pTagForm}
                    </PTagForm>
                }

                {displayATagForm !== false && (
                  <ATagForm href={aTagForm} target="_blank" rel="noopener noreferrer">
                    {aTagTitle}
                  </ATagForm>
                )}

                {displayInputDatos !== false && (
                  <>
                    <InputDatos type={InputDatosType} required aria-required="true" />
                    <Alerta className="help-block error alert alert-danger" role="alert">
                    {alerta}
                    </Alerta>
                  </>
                )}
                {displayInputNumero !== false &&
                  <NumeroDeTelefonoArea>
                      <AreaZero>
                        <NumerosArea>
                          <NumeroDeTelefonoZero>0</NumeroDeTelefonoZero>
                          <NumeroDeTelefonoInputZero type="number" required aria-required="true"/>
                        </NumerosArea>
                        
                        <AlertaNumeroZero className="help-block error alert alert-danger" role="alert">
                              Ingresá tu numero de Telefono.
                        </AlertaNumeroZero>
                      </AreaZero>
                      <AreaQuince>
                          <NumerosArea>
                            <NumeroDeTelefonoQuince>15</NumeroDeTelefonoQuince>
                            <NumeroDeTelefonoInputQuince type="number" required aria-required="true"/>
                          </NumerosArea>
                          <AlertaNumeroQuince className="help-block error alert alert-danger" role="alert">
                                Ingresá tu numero de Telefono.
                          </AlertaNumeroQuince>
                      </AreaQuince>
                  </NumeroDeTelefonoArea>
                }

                {displaySection !== false && (
                  <>
                    <SectionLabel htmlFor="">
                      {section}
                    </SectionLabel>
                    <InputDatos type={InputDatosType} required aria-required="true" />
                    <Alerta className="help-block error alert alert-danger" role="alert">
                      {alerta}
                    </Alerta>
                  </>
                )}
            </FieldsetInputForm>
        </>
    );
}


InputForm.propTypes = {
    datosH1: PropTypes.string.isRequired,
    legendFormH1: PropTypes.string.isRequired,
    alerta: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired,
    pTagForm: PropTypes.string.isRequired, // Corrected from PropTypes.string.isRequered
    aTagForm: PropTypes.string.isRequired,
    displayInputNumero: PropTypes.number.isRequired,
    displayInputZero: PropTypes.number.isRequired,
    aTagTitle: PropTypes.string.isRequired,
    displayInputDatos: PropTypes.string.isRequired,
    displayInputSection: PropTypes.string.isRequired,
    InputDatosType: PropTypes.string,
    displaySection: PropTypes.string.isRequired,
    displayDatosH1: PropTypes.element.isRequired,
    displayLegendFormH1: PropTypes.element.isRequired,
    displayPTagForm: PropTypes.element.isRequired,
    displayATagForm: PropTypes.element.isRequired,
  };
export default InputForm;