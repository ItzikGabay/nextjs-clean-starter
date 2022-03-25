// eslint-disable-next-line max-len
import ButtonPrimary from '../components/UI/theme-button/button-primary/button-primary';
import stylesheet from '../styles/pages/home.module.css';

const Home = () => {
  const test = 0;

  return (
    <div className={stylesheet.container}>
      <div>Home Index {test}</div>
      <ButtonPrimary />
    </div>
  );
};

export default Home;
