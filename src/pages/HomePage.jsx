import Cta from '../components/Cta';
import Feedback from '../components/Feedback';
import Header from './../components/Header';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <h1>Welcome to the home page!</h1>
      </main>
      <Feedback />
      <Cta />
    </>
  );
};

export default HomePage;
