import { Routes, Route} from 'react-router-dom';
import Home from '../components/home/Home';
import Lista from '../components/lista/Lista'; // Import lista component
import Form from '../components/form/Formulario';
import Lotes from '../components/lotes/Lotes';  // Import Formulario component
import LotesId from '../components/lotes/LotesId'; 
import Ganador from '../components/ganador/Ganador';
import Admin from '../components/admin/Admin';
import Localizacion from '../components/localizacion/Localizacion';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Lista" element={<Lista/>} />
        <Route path="Formulario" element={<Form />} />
        <Route path="Lotes" element={<Lotes />} />
        <Route path="LotesId" element={<LotesId />} />
        <Route path="Ganador" element={<Ganador />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="Localizacion" element={<Localizacion />} />
    </Routes>
  );
};