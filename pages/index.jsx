import ButtonPrimary from "../components/UI/theme-button/button-primary/button-primary";
import stylesheet from "../styles/pages/home.module.css";

const Home = () => {
  return (
    <div className={stylesheet.container}>
      <div>Home Index</div>
      <ButtonPrimary />
    </div>
  );
};

export default Home;
