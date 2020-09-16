const getPostOptions = function (body) {
  return {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json'
    }
  };
};

const sendPostRequest = function (url, body) {
  return fetch(url, getPostOptions(body)).then(res => res.json());
};

export default sendPostRequest;
