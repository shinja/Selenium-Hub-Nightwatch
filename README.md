
Docker Compose of Selenium Hub & Nightwatch. 

## Requirements
* docker
* docker-compose
* node.js



## Run Standalone Debug

Put your script in work/tests/.

```bash
$ npm run alone-start:debug

$ vncviewer localhost #password is 'secret'

$ npm run alone-nightwatch


$ npm run alone-stop #stop standalone selenium server
```

## Run Selenium Hub Docker

```bash
$ npm run compose-start

$ npm run compose-scale

$ npm run compose-nightwatch
```
