import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import '../styles/layout.css';

const Layout: React.FC = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default Layout;
