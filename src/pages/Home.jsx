import { Container } from 'react-bootstrap';
import CardArtikelkComponent from '../components/CardArtikelkComponent';
import CardCategoriesComponent from '../components/CardCategoriesComponent';
import CarouselComponent from '../components/CarouselComponent';

const Home = () => {
  return (
    <div style={{ backgroundColor: 'grey', minHeight: '100vh' }}>
      <Container className="py-5">
        <CarouselComponent />
        <CardCategoriesComponent />
        <CardArtikelkComponent />
      </Container>
    </div>
  );
};

export default Home;
