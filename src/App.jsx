import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <>
      <Header />
        <AppRouter/>
      <Footer />
    </>
  );
}

export default App;