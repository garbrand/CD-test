# App

Playing around with `fleet` and `seaport`.

You'll need the following folder structure:

	root
		app
		drone1
		drone2
		hub

In the `root`, fire up the main `fleet` server process called a hub:

	fleet hub --port=7000 --secret=beepboop
	
In the directories `drone1` and `drone2`, start a drone:

	fleet drone --hub=localhost:7000 --secret=beepboop
	
In a new terminal, fire up a `seaport` hub:

	seaport listen 7070
	
To deploy the app from `app`, make sure the folder is a git repo. `git init` and commit. Then cd into the folder and run:

	fleet deploy
	
In the processes, you should see the drones receive the code. Now fire up some processes (repeat the command):

	fleet spawn -- node index.js
	
You can now list the processes running on drones by:

	fleet ps
	
List registered processes by running:

	seaport show localhost:7070