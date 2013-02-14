# CD-test

Testing out the deployment toolchain from substack and nodejitsu.

## Deployment overview

	┌───────────┐
	|  machine  │
	└─────┬─────┘
	      ├─ image: OS, nodejs or mongo, etc.
	      ├─ configuration: ports, names, etc. via ENV
	      ├─ data: db import in case of mongo appliance
	      └─ code: the app(s) to run

## substack and nodejitsu comparison
### substack toolchain

 - `fleet` -- drone and process management
 - `seaport` -- service and port management
 - `bouncy` -- optional, routing

### nodejitsu toolchain

 - `pkgcloud` -- image management (abstracted for rackspace, amazon and joyent)
 - `haibu` -- drone, port and process management
 - `haibu-carapace` -- process wrapper
 - `forever` -- process restarting
