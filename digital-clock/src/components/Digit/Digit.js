import '../../App.css';

const Digit = ({ number }) => {
  let topStyle = '';
  let bottomStyle = '';

  switch (number) {
    case '0':
      topStyle = 'zeroTop';
      bottomStyle = 'zeroBottom';
      break;
    case '1':
      topStyle = 'oneTop';
      bottomStyle = 'oneBottom';
      break;
    case '2':
      topStyle = 'twoTop';
      bottomStyle = 'twoBottom';
      break;
    case '3':
      topStyle = 'threeTop';
      bottomStyle = 'threeBottom';
      break;
    case '4':
      topStyle = 'fourTop';
      bottomStyle = 'fourBottom';
      break;
    case '5':
      topStyle = 'fiveTop';
      bottomStyle = 'fiveBottom';
      break;
    case '6':
      topStyle = 'sixTop';
      bottomStyle = 'sixBottom';
      break;
    case '7':
      topStyle = 'sevenTop';
      bottomStyle = 'sevenBottom';
      break;
    case '8':
      topStyle = 'eightTop';
      bottomStyle = 'eightBottom';
      break;
    case '9':
      topStyle = 'nineTop';
      bottomStyle = 'nineBottom';
      break;

    default:
      topStyle = 'zeroTop';
      bottomStyle = 'zeroBottom';
      break;
  }
  return (
    <div className="digitWrapper">
      <div className="numberWrapper">
        <div className={`number ${topStyle}`}></div>
        <div className={`number ${bottomStyle}`}></div>
      </div>
    </div>
  );
};

export default Digit;
