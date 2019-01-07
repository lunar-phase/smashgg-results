//import { GraphQLClient } from 'graphql-request';
const fs = require('fs');
const fetch = require("node-fetch");
const { GraphQLClient } = require('graphql-request');

const standingsQuery = `
query StandingsQuery($slug: String) {
  tournament(slug: $slug){
    name
    slug
    events {
      id
      name
      slug
      numEntrants
      standings(query: {
        page: 1
        perPage: 8
        sortBy: "standing"
      }){
        nodes{
          standing
          entrant{
            name
            participants {
              playerId
              connectedAccounts
            }
          }
        }
      }
    }
  }
}
`;

const TOKEN = fs.readFileSync('SMASHGG_TOKEN', 'utf8').trim();
const ENDPOINT = 'https://api.smash.gg/gql/alpha';
const NUM_PLACINGS = 3;

const slug = process.argv[2];

async function main() {
  const graphQLClient = new GraphQLClient(ENDPOINT, {
    headers: { authorization: `Bearer ${TOKEN}` },
  });

  const tournamentData = await graphQLClient.request(standingsQuery, { slug });
  const t = tournamentData.tournament;
  const messages = [];
  for (const e of t.events) {
    const intro = `Congratulations to our ${e.name} top ${NUM_PLACINGS} at ${t.name}!`;
    let placings = e.standings.nodes.slice(0, NUM_PLACINGS)
      .map(async s => {
        const id = s.entrant.participants[0].playerId;
        const name = s.entrant.name;
        const twitter = await getTwitterHandle(id);
        const placing = ordinal(s.standing);
        return `${placing}: ${name}${twitter ? ` (@${twitter})` : ''}`;
      });
    placings = await Promise.all(placings);
    messages.push(`${intro}

${placings.join('\n')}

https://smash.gg/${e.slug.replace('/event/', '/events/')}/standings`);
  }
  console.log(messages.join('\n---------\n'));
}

async function getTwitterHandle(playerId) {
  const resp = await fetch(`https://api.smash.gg/player/${playerId}`);
  const json = await resp.json();
  console.log
  return json.entities.player.twitterHandle;
}

function ordinal(i) {
  const abs = Math.abs(i);
  const rem = abs % 10;
  const isTeen = Math.floor(abs % 100 / 10) == 1;

  let suffix = 'th';
  if (!isTeen) {
    switch (rem) {
      case 1:
        suffix = 'st';
        break;
      case 2:
        suffix = 'nd';
        break;
      case 3:
        suffix = 'rd';
        break;
    }
  }
  return i + suffix;
}

main().catch(error => console.error(error));
