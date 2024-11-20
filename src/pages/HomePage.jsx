import Cta from '../components/Cta';
import Feedback from '../components/Feedback';
import ServiceSection from '../components/ServiceSection';
import Header from './../components/Header';

const HomePage = () => {
  document.title = 'Home | Mentora';
  return (
    <>
      <Header />
      <main>
        <ServiceSection />
        <Feedback />
        <Cta />
      </main>
    </>
  );
};

export default HomePage;
