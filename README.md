# broway.io

## How to
The app as a seeder.js script that will inject some fake messages and demo the application capabilities.
To configure and use real data go to /settings to enable and configure the Slack and Meetup integrations.

### Slack
The Slack integration will listen to a channel and send every message starting with 'bro:' to the app. If the content is an URL with an image it will display it. If the URL is to a youtube video it will automatically play it. Any other message will be displayed as plain text.

### Meetup
The Meetup integration will automatically find all meetups near you and display them on the screen.

## File structure:
**client/** – Any files inside any directories named client are purely client-side, and will not be loaded by the server. We will add code for event handlers here.

**server/** – Conversely, any files inside any directories named server are purely server-side, and will not be sent to the client. We will add code we don’t want the users to see here, such as code for password authentication.

**public/** – We will place assets that need to be served as-is to the client in this directory. You can reference them as if they are in the root directory. So public/img/kittens.png can be accessed in your HTML files as img/kittens.png. We will put images, robot.txt, favicon.ico files here.

**private/** – Like public/, private/ houses assets which should only be accessed by the server via the Assets API.

## Models:

### Message:
- Type (Enum):
    - video/youtube
    - text
    - image
- Author (String)
- Origin (Object):
    - type (Enum):
        - slack
        - meetup
    - meta (Object)
- Data (String)
- Timestamp (Date)
