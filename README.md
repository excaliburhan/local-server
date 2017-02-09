# local-server
A Server Mapping Local Files Based On Node.js

### Usage

1. edit `settings.json`, set your local file directory
2. `sudo node index.js` or `sudo node index.js &` to run in background

### Notice

- the application runs at port 80

### API(in settings.json)

- localDir - the local directory
- port - server port, default is 80
- debug - console filename if it is true, default is true
