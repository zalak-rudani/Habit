export const fetchGetCall = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/comments',
    {
      method: 'GET',
    },
  );

  const jsonResponse = await response.json();
  return jsonResponse;
};

export const postApiCall = async data => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/comments',
    {
      method: 'POST',
      body: JSON.stringify(data),
    },
  );
  const jsonResponse = await response.json();
  return jsonResponse;
};
