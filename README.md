# Master-React-js

This is a repository for recording my understanding of `React`.

## If you have trouble running `npm start`

In `package.json`file, change codes below
````package.json:json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
````
to
```package.json:json
    "scripts": {
        "start": "NODE_ENV=production node_modules/react-scripts/bin/react-scripts.js start",
        "build": "NODE_ENV=production node_modules/react-scripts/bin/react-scripts.js build",
        "test": "NODE_ENV=production node_modules/react-scripts/bin/react-scripts.js test",
        "eject": "NODE_ENV=production node_modules/react-scripts/bin/react-scripts.js eject"
    },
```
then run `npm start`, you can probably solve this problem.

Happy Hacking!
