const Loader = ({ isLoading }) => {
  if (isLoading) {
    return <div className="loader-container">Loading...</div>;
  }
  return null;
};

export default Loader;
