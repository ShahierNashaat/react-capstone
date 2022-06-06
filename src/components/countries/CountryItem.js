import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryItem = (props) => {
  const { country, backgroundColor, date } = props;

  return (
    <Link to={`/${country.name}/${date}`} style={{ backgroundColor }}>
      <div className="country">
        <i className="fas fa-map-marker-alt fa-4x" />
        <div>
          <span>{country.name}</span>
          <span>{country.today_confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
        </div>
        <i className="fas fa-arrow-circle-right" />
      </div>
    </Link>
  );
};

CountryItem.defaultProps = {
  country: {
    name: '',
    today_confirmed: 0,
  },
  backgroundColor: '',
  date: '',
};

CountryItem.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    today_confirmed: PropTypes.number,
  }),
  backgroundColor: PropTypes.string,
  date: PropTypes.string,
};

export default CountryItem;
