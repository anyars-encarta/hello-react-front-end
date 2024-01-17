import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRandomMessage } from '../redux/actions';
import '../styles/Greeting.css';

const Greeting = ({ randomMessage, fetchRandomMessage }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        await fetchRandomMessage();
        setIsLoading(false);
      } catch (error) {
        throw new Error('Error fetching data:', error);
      }
    };

    fetchMessage();
  }, [fetchRandomMessage]);

  useEffect(() => {
    if (countdown === 0) {
      fetchRandomMessage();
      setCountdown(10);
    } else {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [countdown, fetchRandomMessage]);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="greeting-content">
      <h1>Greeting of the day</h1>
      <p>
        &quot;
        {randomMessage}
        &quot;
      </p>
      <h2>
        Greeting changes in:
        {' '}
        <span>{countdown}</span>
      </h2>
    </div>
  );
};

Greeting.propTypes = {
  randomMessage: PropTypes.string.isRequired,
  fetchRandomMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  randomMessage: state.randomMessage,
});

export default connect(mapStateToProps, { fetchRandomMessage })(Greeting);
