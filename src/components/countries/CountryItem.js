import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountryItem = (props) => {
  const { country, backgroundColor } = props;

  return (
    <Link to={`/${country.name}`} style={{ backgroundColor }}>
      <div className="country">
        <i className="fas fa-map-marker-alt fa-4x" />
        <div>
          <span>{country.name}</span>
          <span>{country.today_confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span>
        </div>
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
};

CountryItem.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    today_confirmed: PropTypes.number,
  }),
  backgroundColor: PropTypes.string,
};

export default CountryItem;
