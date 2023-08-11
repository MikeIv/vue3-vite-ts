export default defineEventHandler(async () => {
  const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party';
  const token = '0845425a22e3e674a4ef51f59dca016bc1c775b5';
  const query = 'сбербанк';

  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Token ' + token,
    },
    body: JSON.stringify({ query: query }),
  };

  const { data } = await $fetch(url, options);

  return data;
});
