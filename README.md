# broway.js

## File structure:
**client/** – Any files inside any directories named client are purely client-side, and will not be loaded by the server. We will add code for event handlers here.

**server/** – Conversely, any files inside any directories named server are purely server-side, and will not be sent to the client. We will add code we don’t want the users to see here, such as code for password authentication.

**public/** – We will place assets that needs to be served as-is to the client in this directory. You can reference them as if they are in the root directory. So public/img/kittens.png can be accessed in your HTML files as img/kittens.png. We will put images, robot.txt, favicon.ico files here.

**private/** – Like public/, private/ houses assets which should only be accessed by the server via the Assets API.

## Models:

### Message:
- Type (Enum):
    - VIDEO - Youtube
    - VIDEO - Vimeo
    - TEXT
    - IMAGE
- Author (String)
- Origin (String)
- Data (String)
- TimeStamp (Date)
- Seen (Bool)
