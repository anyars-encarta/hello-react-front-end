export const setRandomMessage = (message) => ({
  type: 'SET_RANDOM_MESSAGE',
  payload: message,
});

export const fetchRandomMessage = () => async (dispatch) => {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/messages/random'); // Rails API URL

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();
    dispatch(setRandomMessage(data.message));
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
};
