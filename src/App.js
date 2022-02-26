

import 'bootstrap/dist/css/bootstrap.rtl.min.css';

import Header from './components/Header';
import FooterPage from './components/FooterPage';

function App() {
  return (
    <div style={{direction: "rtl"}}>
     <Header />
     <main className='py-3'></main>
     <FooterPage/>
    </div>
  );
}

export default App;
