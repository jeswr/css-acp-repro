import { getAuthenticatedFetch } from '@jeswr/css-auth-utils';
import { readJSONSync } from 'fs-extra';
import path from 'path';

async function main() {

  const details = readJSONSync(path.join(__dirname, '.community-solid-server.seed.json'))[0];

  const authFetch = await getAuthenticatedFetch({
    ...details,
    url: 'http://localhost:3010/',
  });

  const file = [
    'http://localhost:3010/ownerName/profile/card',
    'http://localhost:3010/ownerName/profile/'
  ]

  for (const url of file) {
    const card = await authFetch(url)
    console.log(card.headers.get('Link'))
    for (const auth of ['acr', 'acl']) {
      const cardAcr = await authFetch(url + '.' + auth)
      console.log(auth + '[' + url + '.' + auth + ']', cardAcr.status)
    }
  }
}

main();
