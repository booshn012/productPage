import logo from './logo.svg';
import Header from './components/header';
import SideMenu from './components/sidemenu';
import ProductList from './components/product-list';
import RecentlyViewed from './components/recentlyviewed';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './App.css';

function App() {
  return (
    <>
     <Header />
      <div className='appcontainer'>
      <img  className="banner-img" src="/list-banner.png" />
       <div  className='img-title'><h1>Shop</h1></div>
       <div className='img-text1'>DeWalt Power Detect Technology Marks the Brand’s</div>
       <div className='img-text2'>  Entry in Advanced 20V Max Tools</div>
      </div>
     
      <Container fluid>
        <Row>
          <Col md={3}> <SideMenu /></Col>
          <Col md={9}><ProductList /></Col>
        </Row>
      </Container>

      <RecentlyViewed />
      
      
     </>
  );
}

export default App;
