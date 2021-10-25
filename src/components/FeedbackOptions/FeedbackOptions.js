import PropTypes from 'prop-types';
import './FeedbackOptions.css';

export default function FeedbackOptions({ options, handleIncrement }) {
  return (
    <>
      {options.map(option => (
        <button
          className="clickButton"
          key={option}
          type="button"
          onClick={() => handleIncrement(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
};
