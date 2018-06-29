# frontend-starter-react-redux-typescript

trans-loader project with react-redux & typescript

## Use typescript

Open with your editor. (I recommend vscode to work typescript default)

TODO: Now you have to ignore `An import path cannot end with a '.ts' extension.` error.

---

Starter project for frontend learner or handy playground with [trans-loader](https://github.com/mizchi/trans-loader)

`trans-loader@0.1.1`

**Do not use it for production**

## How to develop

Clone this repo and run static server you love.

```
$ git clone git@github.com:mizchi/frontend-starter.git --depth 1 --single-branch master
$ cd frontend-starter

# node
$ npm install -g http-server
$ http-server -p 8000

# ruby
$ ruby -run -e httpd . -p 8000

# ptyhon3
$ python3 -m http.server 8000
```

and open http://localhost:8000

Edit your code and reload.

You can import `npm` modules by ES Modules syntax

```
import React from 'react'
```

Enjoy!

## Version with package.json

In default, trans-loader load latest version on npm.

you can indicate version with package.json's dependencies field.

```
{
  "dependencies": {
    "react": "16.4.1",
    "react-dom": "16.4.1"
  }
}
```

## LICENSE

MIT
