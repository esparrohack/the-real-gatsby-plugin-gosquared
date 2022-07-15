# The Real Gosquared Gatsby Plugin

Cus the other one don't work :roll_eyes:

## Install
- `yarn add esparrohack/gatsby-plugin-gosquared`
- or `npm install --save esparrohack/gatsby-plugin-gosquared`

## Usage
In your gatsby-config.js file:

```js
plugins: [
  {
    resolve: `gatsby-plugin-gosquared`,
    options: {
      token: process.env.YR_GOSQUARED_TOKEN, // will yell at you if you forget
      anonymizeIP: process.env.GOSQUARED_ANON_IP, // defaults to false
      trackLocal: process.env.GOSQUARED_TRACK_LOCAL, // defaults to false
    },
  },
]
```
