import styled from 'styled-components';
import PropTypes from 'prop-types';

const FieldsetInputForm = styled.fieldset `
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom:20px;
`
const Datos = styled.legend `
  border: none;
  text-decoration:underline darkblue; 
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const NumeroDeTelefonoArea = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  display:flex;
  flex-direction:row;
  align-items:start;
  justify-content:center;

  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center; /* Align items to the center when in column direction */
  }
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
  text-align:center;
`
const AreaZero = styled.div`
  width:auto;
  display:flex;
  flex-direction:column;
  align-items:start;
  justify-content:center;
  padding:5px;

  @media (max-width: 769px) {
    width: 100%;
  }
  @media (min-width: 769px) {
    width: 25%;
  }

`
const NumeroDeTelefonoZero = styled.label`
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:25px;
  background-color: lightgrey;
  height: 50px;
  padding: 5px;
  border-radius: 15px 0px 0px 15px;

  @media (max-width: 769px) {
    width: 25%;
  }
  @media (min-width: 769px) {
    width: 25%;
  }
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
  width: auto;
  display:flex;
  flex-direction:column;
  align-items:start;
  justify-content:center;

  @media (max-width: 769px) {
    width: 100%;
  }
  @media (min-width: 769px) {
    width: 75%;
  }

`
const NumeroDeTelefonoQuince = styled.label`
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:25px;
  background-color: lightgrey;
  height:50px;
  padding: 5px;
  border-radius: 15px 0px 0px 15px;
  
  @media (max-width: 769px) {
    width: 25%;
  }
  @media (min-width: 769px) {
    width: 25%;
  }
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
const SectionLabel = styled.legend`
  font-size:25px;
  margin-top: 15px;
  margin-bottom: 25px;
`
const CorreoElectronico = styled.div`
  display:flex;
  flex-direction:column;
  height: 15%;
  width:100%;
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

function DatosContacto ({datoscontactoH1,
    section,
    sectionNumero,
    alerta,
    InputNombre,
}) {
    return(
        <>
            <FieldsetInputForm>
                <Datos><h1>{datoscontactoH1}</h1></Datos>
                    <SectionLabel htmlFor="">
                        {sectionNumero}
                    </SectionLabel>
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

                    <CorreoElectronico>
                        <SectionLabel htmlFor="">
                            {section}
                        </SectionLabel>
                        <InputDatos type={InputNombre} required aria-required="true" />
                        <Alerta className="help-block error alert alert-danger" role="alert">
                            {alerta}
                        </Alerta>
                    </CorreoElectronico>
            </FieldsetInputForm>
        </>
    );
}


DatosContacto.propTypes = {
  datoscontactoH1: PropTypes.string.isRequired,
  section: PropTypes.element,
  sectionNumero:PropTypes.string,
  InputNombre:PropTypes.string,
  alerta:PropTypes.string,

};
export default DatosContacto;