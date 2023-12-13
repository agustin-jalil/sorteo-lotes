import styled from 'styled-components';
import PropTypes from 'prop-types';

const FieldsetInputForm = styled.fieldset `
    display: flex;
    flex-direction: column;
    margin-top:25px;
    margin-bottom:25px;
    width:100%;
`
const Datos = styled.legend `
  border: none;
  text-decoration:underline darkblue; 
  margin-top: 1rem;
  margin-bottom: 1rem;
`
const AreaRadio = styled.div`
    height: 100px;
    widht:50%;
    display: flex;
    align-items:center;
    justify-content:start;
    padding: 25px;
    font-size: large;
`

const InputRadio = styled.input`
    display:flex;
    align-items:center;
    justify-content:center;
    height:25px;
    width:25px;
    margin:none;
`;

const LabelRadio = styled.label`
    margin:50px;
`
function PropiedadGrupo ({PropiedadGrupoH1,

}) {
    return(
        <>
            <FieldsetInputForm>
                <Datos><h1>{PropiedadGrupoH1}</h1></Datos>
                    <AreaRadio>
                        <InputRadio type="radio" id="soltero/a" name="Grupo-familiar" value="soltero/a" checked/>
                        <LabelRadio for="soltero/a">Soltero/a</LabelRadio>
                    </AreaRadio>
            </FieldsetInputForm>
        </>
    );
}


PropiedadGrupo.propTypes = {
  PropiedadGrupoH1: PropTypes.string.isRequired,
  AreaRadio: PropTypes.element,
  InputRadio: PropTypes.string.isRequired,
  LabelRadio: PropTypes.string.isRequired,


};
export default PropiedadGrupo;