import { useState, useEffect } from 'react';
import Iconbar from './IconBar';
import LotesCrear from '../lotescrear/LotesCrear';
import Personal from '../personal/Personal';
import Ganadores from '../ganadores/Ganadores';
import Adjudicaron from '../adjudicaron/Adjudicaron';

const Admin = () => {
  const [activeComponent, setActiveComponent] = useState('lotesCrear'); // Set 'lotesCrear' as the default component

  const handleIconClick = (icon) => {
    // Handle icon click event here
    if (icon === 'home' || icon === '1') {
      setActiveComponent('lotesCrear');
    } else if (icon === 'cog' || icon === '3') {
      setActiveComponent('lista');
    } else if (icon === 'user' || icon === '2') {
      setActiveComponent('personal');
    } else if (icon === 'dollar' || icon === '4') {
      setActiveComponent('Adjudicaron');
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check if the pressed key is 1, 2, 3, or 4
      if (event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4') {
        setActiveComponent(event.key === '1' ? 'lotesCrear' : event.key === '3' ? 'lista' : event.key === '2' ? 'personal' : 'Adjudicaron');
      }
    };

    // Add event listener for key presses
    document.addEventListener('keypress', handleKeyPress);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <main className="Admin">
      <Iconbar handleIconClick={handleIconClick} />
      <div className="Admin-container">
        {activeComponent === 'lotesCrear' && <LotesCrear />}
        {activeComponent === 'personal' && <Personal />}
        {activeComponent === 'lista' && <Ganadores />}
        {activeComponent === 'Adjudicaron' && <Adjudicaron />}
      </div>
    </main>  
  );
};

export default Admin;
