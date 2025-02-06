# Agify Frame

This is a Farcaster frame that will try to guess someone's age based on their name.

## Development

### Prerequisites

To develop within this project, you will need:

* [Node](https://nodejs.org/en/download) (v20 or above)
* [Yarn](https://yarnpkg.com/getting-started/install)
* [ngrok](https://download.ngrok.com/downloads/)

## Running Locally

* Start the server using `yarn dev`
* Run ngrok using `ngrok http http://localhost:3000`
  * Note that you *will* need a paid ngrok subscription due to the interstitial page the free tier employs, which breaks frame previews
* Navigate to the frames playground here: https://warpcast.com/~/developers/frames
  * When prompted, empty the URL provided by ngrok

## Building the Application

Run `yarn run build`. This will create an `out/` directory at the root of the project containing the static site assets to be deployed.