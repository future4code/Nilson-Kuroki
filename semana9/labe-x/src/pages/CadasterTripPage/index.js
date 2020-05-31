import React from 'react'
import styled from 'styled-components'
import logo from '../../image/Logo.png'
import {useForm} from '../../customHooks/useForm'
import Paper from '@material-ui/core/Paper';
import {useParams} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'
import axios from 'axios'
import InputLabel from '@material-ui/core/InputLabel';
import {ButtonBack} from '../../components/ButtonBack'

const ContainerCadasterTripPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #5d66ea;
    height: 100vh;
`

const ImgLogo = styled.img`
    max-height: 17vh;
    margin-bottom: 20px;
`

const PaperStyled = styled(Paper)`
    width: 65vw;
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
`
const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const CadasterTripPage = props => {
    
    const pathParams = useParams()
    const {form, onChange} = useForm({
        name: '',
        age: '',
        applicationText: '',
        profession: '',
        country: undefined
    })
    const handleInputChange = event => {
        const { value, name } = event.target;
        onChange(name, value);
    };
    const cadastrarUsuario = () => {
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/nilson-julian/trips/${pathParams.idTrip}/apply`, body, {
            headers: {
                'Content-type': 'application/json'
            }
        }).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    }
    
    return(
        <ContainerCadasterTripPage>
            <ImgLogo src={logo} alt="logo"/>
            <ButtonBack/>
            <PaperStyled>
                <h3><b>Viagem: </b>{pathParams.nameTrip}</h3>
                <h2>Cadastro</h2>
                <FormStyled>
                    <TextField 
                        name='name' 
                        value={form.name} 
                        inputProps={{ pattern: "[A-Za-z ]{3,}", title:"O nome deve ter no minimo 3 letras" }}
                        label='name' 
                        type='text' 
                        onChange={handleInputChange} 
                        required
                    />
                    <TextField 
                        name='age' 
                        type='number' 
                        onChange={handleInputChange} 
                        value={form.age} 
                        label='idade' 
                        inputProps={{min: "18"}}
                        required
                    />
                    <TextField 
                        name='profession' 
                        value={form.profession} 
                        label='profissão'
                        inputProps={{ pattern: "[A-Za-z ]{10,}", title:"O nome deve ter no minimo 10 letras" }}
                        type='text' 
                        onChange={handleInputChange} 
                        required
                    />
                    <TextField 
                        name='applicationText' 
                        value={form.applicationText} 
                        inputProps={{ pattern: "{30,}" }}
                        type='text' 
                        onChange={handleInputChange} 
                        label="Motivo"
                        rows={4}
                        required
                    />
                    <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                    <Select name='country'
                    onChange={handleInputChange}
                    required
                    >
                        <MenuItem value="Albânia">Albânia</MenuItem>
                        <MenuItem value="África do Sul">África do Sul</MenuItem>
                        <MenuItem value="Alemanha">Alemanha</MenuItem>
                        <MenuItem value="Andorra">Andorra</MenuItem>
                        <MenuItem value="Angola">Angola</MenuItem>
                        <MenuItem value="Anguilla">Anguilla</MenuItem>
                        <MenuItem value="Antigua">Antigua</MenuItem>
                        <MenuItem value="Arábia Saudita">Arábia Saudita</MenuItem>
                        <MenuItem value="Argentina">Argentina</MenuItem>
                        <MenuItem value="Armênia">Armênia</MenuItem>
                        <MenuItem value="Aruba">Aruba</MenuItem>
                        <MenuItem value="Austrália">Austrália</MenuItem>
                        <MenuItem value="Áustria">Áustria</MenuItem>
                        <MenuItem value="Azerbaijão">Azerbaijão</MenuItem>
                        <MenuItem value="Bahamas">Bahamas</MenuItem>
                        <MenuItem value="Bahrein">Bahrein</MenuItem>
                        <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                        <MenuItem value="Barbados">Barbados</MenuItem>
                        <MenuItem value="Bélgica">Bélgica</MenuItem>
                        <MenuItem value="Benin">Benin</MenuItem>
                        <MenuItem value="Bermudas">Bermudas</MenuItem>
                        <MenuItem value="Botsuana">Botsuana</MenuItem>
                        <MenuItem value="Brasil" selected>Brasil</MenuItem>
                        <MenuItem value="Brunei">Brunei</MenuItem>
                        <MenuItem value="Bulgária">Bulgária</MenuItem>
                        <MenuItem value="Burkina Fasso">Burkina Fasso</MenuItem>
                        <MenuItem value="botão">botão</MenuItem>
                        <MenuItem value="Cabo Verde">Cabo Verde</MenuItem>
                        <MenuItem value="Camarões">Camarões</MenuItem>
                        <MenuItem value="Camboja">Camboja</MenuItem>
                        <MenuItem value="Canadá">Canadá</MenuItem>
                        <MenuItem value="Cazaquistão">Cazaquistão</MenuItem>
                        <MenuItem value="Chade">Chade</MenuItem>
                        <MenuItem value="Chile">Chile</MenuItem>
                        <MenuItem value="China">China</MenuItem>
                        <MenuItem value="Cidade do Vaticano">Cidade do Vaticano</MenuItem>
                        <MenuItem value="Colômbia">Colômbia</MenuItem>
                        <MenuItem value="Congo">Congo</MenuItem>
                        <MenuItem value="Coréia do Sul">Coréia do Sul</MenuItem>
                        <MenuItem value="Costa do Marfim">Costa do Marfim</MenuItem>
                        <MenuItem value="Costa Rica">Costa Rica</MenuItem>
                        <MenuItem value="Croácia">Croácia</MenuItem>
                        <MenuItem value="Dinamarca">Dinamarca</MenuItem>
                        <MenuItem value="Djibuti">Djibuti</MenuItem>
                        <MenuItem value="Dominica">Dominica</MenuItem>
                        <MenuItem value="EUA">EUA</MenuItem>
                        <MenuItem value="Egito">Egito</MenuItem>
                        <MenuItem value="El Salvador">El Salvador</MenuItem>
                        <MenuItem value="Emirados Árabes">Emirados Árabes</MenuItem>
                        <MenuItem value="Equador">Equador</MenuItem>
                        <MenuItem value="Eritréia">Eritréia</MenuItem>
                        <MenuItem value="Escócia">Escócia</MenuItem>
                        <MenuItem value="Eslováquia">Eslováquia</MenuItem>
                        <MenuItem value="Eslovênia">Eslovênia</MenuItem>
                        <MenuItem value="Espanha">Espanha</MenuItem>
                        <MenuItem value="Estônia">Estônia</MenuItem>
                        <MenuItem value="Etiópia">Etiópia</MenuItem>
                        <MenuItem value="Fiji">Fiji</MenuItem>
                        <MenuItem value="Filipinas">Filipinas</MenuItem>
                        <MenuItem value="Finlândia">Finlândia</MenuItem>
                        <MenuItem value="França">França</MenuItem>
                        <MenuItem value="Gabão">Gabão</MenuItem>
                        <MenuItem value="Gâmbia">Gâmbia</MenuItem>
                        <MenuItem value="Gana">Gana</MenuItem>
                        <MenuItem value="Geórgia">Geórgia</MenuItem>
                        <MenuItem value="Gibraltar">Gibraltar</MenuItem>
                        <MenuItem value="Granada">Granada</MenuItem>
                        <MenuItem value="Grécia">Grécia</MenuItem>
                        <MenuItem value="Guadalupe">Guadalupe</MenuItem>
                        <MenuItem value="Guam">Guam</MenuItem>
                        <MenuItem value="Guatemala">Guatemala</MenuItem>
                        <MenuItem value="Guiana">Guiana</MenuItem>
                        <MenuItem value="Guiana Francesa">Guiana Francesa</MenuItem>
                        <MenuItem value="Guiné-bissau">Guiné-bissau</MenuItem>
                        <MenuItem value="Haiti">Haiti</MenuItem>
                        <MenuItem value="Holanda">Holanda</MenuItem>
                        <MenuItem value="Honduras">Honduras</MenuItem>
                        <MenuItem value="Hong Kong">Hong Kong</MenuItem>
                        <MenuItem value="Hungria">Hungria</MenuItem>
                        <MenuItem value="Iêmen">Iêmen</MenuItem>
                        <MenuItem value="Ilhas Cayman">Ilhas Cayman</MenuItem>
                        <MenuItem value="Ilhas Cook">Ilhas Cook</MenuItem>
                        <MenuItem value="Ilhas Curaçao">Ilhas Curaçao</MenuItem>
                        <MenuItem value="Ilhas Marshall">Ilhas Marshall</MenuItem>
                        <MenuItem value="Ilhas Turks & Caicos">Ilhas Turks & Caicos</MenuItem>
                        <MenuItem value="Ilhas Virgens (brit.)">Ilhas Virgens (brit.)</MenuItem>
                        <MenuItem value="Ilhas Virgens(amer.)">Ilhas Virgens(amer.)</MenuItem>
                        <MenuItem value="Ilhas Wallis e Futuna">Ilhas Wallis e Futuna</MenuItem>
                        <MenuItem value="Índia">Índia</MenuItem>
                        <MenuItem value="Indonésia">Indonésia</MenuItem>
                        <MenuItem value="Inglaterra">Inglaterra</MenuItem>
                        <MenuItem value="Irlanda">Irlanda</MenuItem>
                        <MenuItem value="Islândia">Islândia</MenuItem>
                        <MenuItem value="Israel">Israel</MenuItem>
                        <MenuItem value="Itália">Itália</MenuItem>
                        <MenuItem value="Jamaica">Jamaica</MenuItem>
                        <MenuItem value="Japão">Japão</MenuItem>
                        <MenuItem value="Jordânia">Jordânia</MenuItem>
                        <MenuItem value="Kuwait">Kuwait</MenuItem>
                        <MenuItem value="Latvia">Latvia</MenuItem>
                        <MenuItem value="Líbano">Líbano</MenuItem>
                        <MenuItem value="Liechtenstein">Liechtenstein</MenuItem>
                        <MenuItem value="Lituânia">Lituânia</MenuItem>
                        <MenuItem value="Luxemburgo">Luxemburgo</MenuItem>
                        <MenuItem value="Macau">Macau</MenuItem>
                        <MenuItem value="Macedônia">Macedônia</MenuItem>
                        <MenuItem value="Madagascar">Madagascar</MenuItem>
                        <MenuItem value="Malásia">Malásia</MenuItem>
                        <MenuItem value="Malaui">Malaui</MenuItem>
                        <MenuItem value="Mali">Mali</MenuItem>
                        <MenuItem value="Malta">Malta</MenuItem>
                        <MenuItem value="Marrocos">Marrocos</MenuItem>
                        <MenuItem value="Martinica">Martinica</MenuItem>
                        <MenuItem value="Mauritânia">Mauritânia</MenuItem>
                        <MenuItem value="Mauritius">Mauritius</MenuItem>
                        <MenuItem value="México">México</MenuItem>
                        <MenuItem value="Moldova">Moldova</MenuItem>
                        <MenuItem value="Mônaco">Mônaco</MenuItem>
                        <MenuItem value="Montserrat">Montserrat</MenuItem>
                        <MenuItem value="Nepal">Nepal</MenuItem>
                        <MenuItem value="Nicarágua">Nicarágua</MenuItem>
                        <MenuItem value="Niger">Niger</MenuItem>
                        <MenuItem value="Nigéria">Nigéria</MenuItem>
                        <MenuItem value="Noruega">Noruega</MenuItem>
                        <MenuItem value="Nova Caledônia">Nova Caledônia</MenuItem>
                        <MenuItem value="Nova Zelândia">Nova Zelândia</MenuItem>
                        <MenuItem value="Omã">Omã</MenuItem>
                        <MenuItem value="Palau">Palau</MenuItem>
                        <MenuItem value="Panamá">Panamá</MenuItem>
                        <MenuItem value="Papua-nova Guiné">Papua-nova Guiné</MenuItem>
                        <MenuItem value="Paquistão">Paquistão</MenuItem>
                        <MenuItem value="Peru">Peru</MenuItem>
                        <MenuItem value="Polinésia Francesa">Polinésia Francesa</MenuItem>
                        <MenuItem value="Polônia">Polônia</MenuItem>
                        <MenuItem value="Porto Rico">Porto Rico</MenuItem>
                        <MenuItem value="Portugal">Portugal</MenuItem>
                        <MenuItem value="Qatar">Qatar</MenuItem>
                        <MenuItem value="Quênia">Quênia</MenuItem>
                        <MenuItem value="Rep. Dominicana">Rep. Dominicana</MenuItem>
                        <MenuItem value="Rep. Tcheca">Rep. Tcheca</MenuItem>
                        <MenuItem value="Reunion">Reunion</MenuItem>
                        <MenuItem value="Romênia">Romênia</MenuItem>
                        <MenuItem value="Ruanda">Ruanda</MenuItem>
                        <MenuItem value="Rússia">Rússia</MenuItem>
                        <MenuItem value="Saipan">Saipan</MenuItem>
                        <MenuItem value="Samoa Americana">Samoa Americana</MenuItem>
                        <MenuItem value="Senegal">Senegal</MenuItem>
                        <MenuItem value="Serra Leone">Serra Leone</MenuItem>
                        <MenuItem value="Seychelles">Seychelles</MenuItem>
                        <MenuItem value="Singapura">Singapura</MenuItem>
                        <MenuItem value="Síria">Síria</MenuItem>
                        <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                        <MenuItem value="St. Kitts & Nevis">St. Kitts & Nevis</MenuItem>
                        <MenuItem value="St. Lúcia">St. Lúcia</MenuItem>
                        <MenuItem value="St. Vincent">St. Vincent</MenuItem>
                        <MenuItem value="Sudão">Sudão</MenuItem>
                        <MenuItem value="Suécia">Suécia</MenuItem>
                        <MenuItem value="Suiça">Suiça</MenuItem>
                        <MenuItem value="Suriname">Suriname</MenuItem>
                        <MenuItem value="Tailândia">Tailândia</MenuItem>
                        <MenuItem value="Taiwan">Taiwan</MenuItem>
                        <MenuItem value="Tanzânia">Tanzânia</MenuItem>
                        <MenuItem value="Togo">Togo</MenuItem>
                        <MenuItem value="Trinidad & Tobago">Trinidad & Tobago</MenuItem>
                        <MenuItem value="Tunísia">Tunísia</MenuItem>
                        <MenuItem value="Turquia">Turquia</MenuItem>
                        <MenuItem value="Ucrânia">Ucrânia</MenuItem>
                        <MenuItem value="Uganda">Uganda</MenuItem>
                        <MenuItem value="Uruguai">Uruguai</MenuItem>
                        <MenuItem value="Venezuela">Venezuela</MenuItem>
                        <MenuItem value="Vietnã">Vietnã</MenuItem>
                        <MenuItem value="Zaire">Zaire</MenuItem>
                        <MenuItem value="Zâmbia">Zâmbia</MenuItem>
                        <MenuItem value="Zimbábue">Zimbábue</MenuItem>
                    </Select>
                    <Button type={'submit'} onClick={cadastrarUsuario}>Cadastrar</Button>
                </FormStyled>
            </PaperStyled>
        </ContainerCadasterTripPage>
    )
}
export default CadasterTripPage