# TuneQuest

Welcome to TuneQuest, a music guessing game that will put your music knowledge to the test! 
Inspired by the board game Hitster, TuneQuest brings the excitement and challenge of guessing iconic tracks right to your table.
Are you a music aficionado? A casual listener? Or just someone who loves a good challenge? TuneQuest has something for everyone. 
With the whole Spotify library to choose from, there's always a new challenge awaiting you.
How well do you know your favorite artists' discographies? 
Can you pinpoint the exact year that legendary albums were released? 
TuneQuest will push your memory and musical knowledge to the limit as you compete against friends or test your skills solo.

## Important Notes

Due to the Spotify API restrictions, the game can only be played by users with a Spotify Premium account.

## Hosted Version

You can play the game at [https://tunequest.rofln.de](https://tunequest.rofln.de) or just self-host your own version.
Currently the API Client is in development mode and I have not stress tested the limitations of the Spotify API in development mode.
If you encounter any issues, please let me know by opening an issue or a pull request.

## Create your own Cards
You can create your own cards using the [card creator tool](https://github.com/effem/tunequest-card-creator).

## Getting Started

If you want to run this project, you need to create a `.env` file in the root of the project with the following content:

```env
SPOTIFY_AUTHORIZE_URL=https://accounts.spotify.com/authorize
SPOTIFY_API_TOKEN_URL=https://accounts.spotify.com/api/token
SPOTIFY_REDIRECT_URI=http://localhost:3000/player
SPOTIFY_CLIENT_SECRET=xxx
SPOTIFY_CLIENT_ID=xxx
SPOTIFY_SCOPES=user-modify-playback-state streaming user-read-email user-read-private
TUNEQUEST_CREATE_URL=http://localhost:5173
```

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

To build the project:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

To run the non development server:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

## Docker

Build the docker image:
```bash
docker build -t tunequest .
```

Create the following `docker-compose.yaml` file:
```dockerfile
services:
  tunequest:
    container_name: tunequest
    image: tunequest
    restart: unless-stopped
    ports:
      - 3000:3000
```

Run the docker image with docker compose:
```bash
docker-compose up -d
```

# TODO
- [ ] Add compatibility with the original Hitster cards
  - This is a painstaking process, as the original Hitster cards are not available online and I have to manually type them in.
  - I will start with the cards I own and if you want to help me, please let me know.
- [ ] Add better error handling
- [ ] Improve the Docker Image to not bake in some of the environment variables
- [ ] Publish Docker image to Docker Hub
  - If someone wants to help me with this, please let me know.
