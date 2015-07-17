# EuropeanInnovation


# Bluemix

The app is running in Bluemix: http://navia.mybluemix.net/
If you want to have our own version make sure you bind mongolab to your app and run:
> cf se <app-name> MONGO_DB <mongo-db-uri>

Make sure you have Node.js installed and npm, the node package manager.

Make sure you have mongodb installed.  Open a terminal and from the project folder run

> npm update


Open a different terminal and from the project folder run 

> mongod


In the first terminal run

> node app.js

or

> nodejs app.js

(whichever node command is the right one for your setup)
