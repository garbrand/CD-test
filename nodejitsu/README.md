# Nodejitsu

## Getting started

Install `haibu` globally so you get access to the CLI:

	npm install haibu -g
	
Start up a haibu server (it will claim port 9002 by default):

	haibu

## Preparing your app

Haibu reads `package.json` for some configuration of your app. The following attributes are required to be present in the root package.json:

```javascript
{
	// credentials:
	"name": "name-of-the-app",
	"user": "name-of-the-user-who-started-the-drone",
	// where to deploy the app from:
	// git
	"repository": {
		"type": "git",
		"url": "http://path/to/git/server/repo"
	},
	// local
	"repository": {
		"type": "local",
		"directory": "/path/to/application"
	},
	// tar
	"repository": {
		"type": "tar",
		"url": "http://path/to/archive.tar"
	},
	// zip
	"repository": {
		"type": "zip",
		"url": "http://path/to/archive.zip"
	}
}
```

Alternatively, an application can be installed from an npm package. See the [documentation][npm] for details.


## Deploying
	
There are multiple ways to deploy with haibu. The simplest way is to use a push deploy on the RESTful api (which also allows you to integrate with a non-node system). For a node system you can programmatically deploy using the haibu api.

Deploying using push deploy. `cd` into the folder holding the root of your app, then tar and post.

	cd path/to/your/app
	tar -cz . | curl -XPOST -sSNT- localhost:9002/deploy/username/appname
	
Alternatively, if you do not want to pipe the output to curl but want to keep the package around:

	cd path/to/your/app
	tar -czf app.tgz .
	curl -XPOST -sSNT app.tgz localhost:9002/deploy/username/appname
	
If the deploy was successfull, a drone will be spawned and the process will be started. The post should reply with a json giving you all the information of the running process, including `port`, `pid` and `env`.

# Notes and tips

## more options
Looking at the tests and [fixtures][fix] of haibu, it takes more options from package.json then the docs reveal. This might have to do with the nodejitsu eco system, but it warrants further exploration. Especially how they wire up sub domains.

```javascript
{
     "resource": "App",
     "name": "test",
     "subdomain":"test",
     "state": "stopped",
     "maxDrones": 1,
     "drones": [],
     "directories": {
       "home": "hellonode"
     },
     "repository": {
       "type": "git",
       "url": "https://github.com/Marak/hellonode.git",
       "branch": "master"
     },
     "scripts": {
       "start": "server.js"
     }
  }
```



[npm]: https://github.com/nodejitsu/haibu#npm "Installing an app from an npm package"
[fix]: https://github.com/nodejitsu/haibu/blob/master/test/fixtures/apps.js "More options"