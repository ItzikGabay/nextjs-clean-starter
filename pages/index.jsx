// eslint-disable-next-line max-len
import ButtonPrimary from '../components/UI/theme-button/button-primary/button-primary';
import stylesheet from '../styles/pages/home.module.css';

const Home = () => {
  return (
    <div className={stylesheet.container}>
      <div>Homepage is ready.</div>
      <ButtonPrimary />
    </div>
  );
};

export default Home;
