import styled from 'styled-components';
import Feature from './components/Feature';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Service from './components/service';
import Price from './components/Price';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  //background-color: red;
`
const IntoShape = styled.div`
width: 100%;
height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(67% 0%, 100% 0%, 100% 100% , 55% 100%);
  z-index: -1;
  background-color: crimson;
`
const FeatureShape = styled.div`
width: 100%;
height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(00% 0%, 55% 0%, 33% 100% , 0% 100%);
  z-index: -1;
  background-color: pink;
`
const ServiceShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon( 0% 0%, 33% 0%, 33% 100% , 0% 100%);
  z-index: -1;
  background-color: #f88497;
`
const PriceShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon( 33% 0%, 100% 0%, 100% 100% , 67% 100%);
  z-index: -1;
  background-color: crimson;
`
const App = () => {
  const SmallerScreen = window.screen.width <= 480 ? true : false;
  return(
    <>
     <Container>
      <Navbar/>
      <Intro/>
      <IntoShape/>
    </Container>
    <Container>
      <Feature/>
      <FeatureShape/>
    </Container>
    <Container>
      <Service/>
      {!SmallerScreen && <ServiceShape/>}
    </Container>
    <Container>
      <Price/>
      <PriceShape/>
    </Container>
    <Container>
      <Contact/>
      <Footer/>
    </Container>
    </>
  )
};

export default App;