const BoilingVerdict = ({ temperature }) => {
  if (temperature >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
};

export default BoilingVerdict;
