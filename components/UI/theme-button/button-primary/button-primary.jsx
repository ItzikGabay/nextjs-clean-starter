import stylesheet from './button-primary.module.css';

const ButtonPrimary = ({}) => {
  const a = 0;
  return (
    <button className={stylesheet.button_primary__container}>
      <span className={stylesheet.button_primary__container_label}>
        Button Primary
      </span>
    </button>
  );
};

export default ButtonPrimary;
