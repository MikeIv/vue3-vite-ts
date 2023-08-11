export default defineEventHandler(async () => {
  const { data } = await $fetch(
    'https://api.currencyapi.com/v3/latest?apikey=utghBBzQf1aLyalFsZUdcYBTh6ySd7GfEHa6VZzI&currencies=EUR%2CUSD%2CCAD',
  );

  return data;
});
