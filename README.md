# smashgg-results
Summarizes tournament results in a concise manner

## Pre-requisites
- Node.js

## Installation
1. Clone this repo (or download an archive)
1. Install dependencies with `npm ci` or `npm install`
1. [Create a smash.gg API token](https://developer.smash.gg/docs/authentication) and put it in a file called `SMASHGG_TOKEN`
1. `node index.js [tournament slug]`

## Example
`node index.js full-moon-9` gives the following output:

```
Full Moon 9 - Blazblue Central Fiction top 8/17

1st: @OmniSScythe
2nd: Quina
3rd: @BoltOfShadow
4th: @DawnofScrubs
5th: @NYC_Tomahawk
5th: @BasedTuxedoMask
7th: @CrisisEdgeBB
7th: @Tempest_Tim

Full standings: https://smash.gg/tournament/full-moon-9/events/blazblue-central-fiction/standings
---------
Full Moon 9 - Melty Blood Actress Again Current Code top 3/14

1st: F O X (@MakotoScrub)
2nd: Mahouko
3rd: Zero (@Serozero00)

Full standings: https://smash.gg/tournament/full-moon-9/events/melty-blood-actress-again-current-code/standings
---------
Full Moon 9 - Million Arthur Arcana Blood top 8/23

1st: @OmniSScythe
2nd: Mahouko
3rd: @AyoItsDave
4th: @omgitzmellz
5th: @BoltOfShadow
5th: @Injectoh
7th: @LoFi_Yokai
7th: @HARD_BREAD

Full standings: https://smash.gg/tournament/full-moon-9/events/million-arthur-arcana-blood/standings
---------
Full Moon 9 - The King of Fighters XIV top 3/14

1st: KCO | Marco Polo (@KCOMarcoPolo)
2nd: Shadow780
3rd: PAG | Animonk

Full standings: https://smash.gg/tournament/full-moon-9/events/the-king-of-fighters-xiv/standings
---------
Full Moon 9 - Under Night In-Birth Exe Late(st) top 8/47

1st: Redblade
2nd: @nyczbrandon
3rd: @Sometimes_Fendo
4th: @HARD_BREAD
5th: LTP
5th: @foxof42
7th: @EJayCV
7th: @LoFi_Yokai

Full standings: https://smash.gg/tournament/full-moon-9/events/under-night-in-birth-exe-late-st/standings
```

`npm run start -- full-moon-9` will do the same.

Be sure to yell at all the players that still haven't linked their Twitter accounts to smash.gg!
