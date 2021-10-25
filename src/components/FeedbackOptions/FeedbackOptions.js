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
          // value={option}
          onClick={() => handleIncrement(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
}

// class oldFeedbackOptions extends Component {
//   render() {
//     const { options, handleIncrement } = this.props;
//     return (
//       <>
//         {options.map(option => (
//           <button
//             className="clickButton"
//             key={option}
//             type="button"
//             value={option}
//             onClick={() => handleIncrement(option)}
//           >
//             {option}
//           </button>
//         ))}
//       </>
//     );
//   }
// }

FeedbackOptions.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
};

// export default FeedbackOptions;
