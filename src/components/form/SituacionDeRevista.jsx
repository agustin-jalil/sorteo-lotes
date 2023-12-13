import styled from 'styled-components';
import PropTypes from 'prop-types';

const FieldsetInputForm = styled.fieldset `
    display: flex;
    flex-direction: column;
    margin-top:25px;
    margin-bottom:150px;
    width:100%;
    height:7.5%;
`
const Datos = styled.legend `
  border: none;
  text-decoration:underline darkblue; 
  margin-top: 1rem;
  margin-bottom: 1rem;
`
const Alerta = styled.p`
  font-size:17.5px;
  border-radius: 10px;
  text-align:center;
  border: 2px solid darkred;
  color: darkred;
`
const UnOrderList = styled.ul`
 width:100%;
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction:column;
`
const Lista = styled.li`
width:100%;
display:flex;
align-items:center;
justify-content:start;
font-size:20px;
margin-top:25px;
margin-bottom:25px;
input[type="checkbox"] {
    width: 17px;
    height: 17px;
  }
`
const LabelLista = styled.label`
   
`
const InputLista = styled.input`
  margin: 25px;
`
;


function SituacionDeRevista ({
    revistaH1,
    alerta,
    displayAlert,
}) {
    return(
        <>
            <FieldsetInputForm>
                <Datos><h1>{revistaH1}</h1></Datos>
                <>
                    <UnOrderList>
                        <Lista className="checkbox">
                                <InputLista type="checkbox" name="checkbox1" />
                            <LabelLista>
                                Autonomo
                            </LabelLista>
                        </Lista>
                        <Lista className="checkbox">
                                <InputLista type="checkbox" name="checkbox1" /> 
                            <LabelLista>
                                Beca - Catamarca Ciudad Trabaja
                            </LabelLista>
                        </Lista>
                        <Lista className="checkbox">
                                <InputLista type="checkbox" name="checkbox1" /> 
                            <LabelLista>
                                Contrato de obra
                            </LabelLista>
                        </Lista>
                        <Lista className="checkbox">
                                <InputLista type="checkbox" name="checkbox1" /> 
                            <LabelLista>
                                Planta Permanente
                            </LabelLista>
                        </Lista>
                        <Lista className="checkbox">
                                <InputLista type="checkbox" name="checkbox1" /> 
                            <LabelLista>
                                Planta no permanente
                            </LabelLista>
                        </Lista>
                    </UnOrderList>
                    {displayAlert !== false &&
                        <Alerta className="help-block error alert alert-danger" role="alert">
                        {alerta}
                        </Alerta>
                    }
                </>
            </FieldsetInputForm>
        </>
    );
}


SituacionDeRevista.propTypes = {
  
    revistaH1: PropTypes.string.isRequired,
    alerta: PropTypes.string.isRequired,
    displayAlert:PropTypes.bool.isRequired,
    UnOrderList: PropTypes.element,
    Lista: PropTypes.element,
    LabelLista:PropTypes.element,
    InputLista:PropTypes.element,
};
export default SituacionDeRevista;