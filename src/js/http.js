export default function fetchData(url) {
  const parts = url.split('/user/');

  if (parts[1]) {
    return JSON.stringify({status: 'ok', level: parts[1]});
  }
  return JSON.stringify({status: 'bad'});
}