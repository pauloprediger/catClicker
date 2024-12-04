import PropTypes from 'prop-types';
import './MeowCounter.css';

const MeowCounter = ({ meowCount, meowsPerSecond }) => {
    return (
        <div className="meow-counter">
            <h1 className="meow-title">
                Meow's
                <br />
                {`${parseInt(meowCount)}`}
            </h1>
            <p className="meow-per-second">Per sec: {`${parseFloat(meowsPerSecond).toFixed(2)}`}</p>
        </div>
    );
};

MeowCounter.propTypes = {
    meowCount: PropTypes.number.isRequired,
    meowsPerSecond: PropTypes.number.isRequired,
}

export default MeowCounter;
