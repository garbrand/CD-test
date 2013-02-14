# App

Playing around with `fleet` and `seaport`.

## Getting started:

### Preparation
Start with installing the CLI of fleet and seaport: `npm install -g fleet seaport`

You'll need the following folder structure:

	root
		CD-test (the app you want to deploy)
		drone1
		drone2
		hub
		
### Start the management processes
In the `root`, fire up the main `fleet` server process called a hub:

	fleet hub --port=7000 --secret=beepboop
	
In a new terminal, fire up a `seaport` hub:

	seaport listen 7070


### Start the drones
In the directories `drone1` and `drone2`, start a drone:

	fleet drone --hub=localhost:7000 --secret=beepboop
	

### Deploy the app
To deploy the app from `app`, make sure the folder is a git repo. (If you check out this repo, the next steps will all have done already.) `git init` and commit. Use fleet to set the remote if you want to (this will generate the `fleet.json` file), then cd into the folder and run:

	fleet deploy
	
Now install all node packages from `package.json` on all drones:

	fleet exec --drone==* -- npm install

### Spawn the app
In the processes, you should see the drones receive the code. Now fire up some processes (repeat the command):

	fleet spawn -- node index.js
	
This command spawns a process on the first available drone that isn't running the process yet. Alternatively, spawn the process on all drons with:


	
You can now list the processes running on drones by:

	fleet ps
	
List registered processes by running:

	seaport show localhost:7070
	
## Tips:

Don't forget to read the nice help, for instance `fleet help spawn`.