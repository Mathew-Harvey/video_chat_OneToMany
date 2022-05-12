## Deployed App
Deployed app: https://vide-chat-one-to-many.herokuapp.com/  

## Usage
* Run npm install.
* Add your firebase config details to Server/firebase.js. 
* Run "npm start devStart" to start the app locally - (if this fails after a while run 'npm install' again)
 
 ## Setup your own firebase realtime datastore
 * Navigate to: https://firebase.google.com/
 * Log in with a google account
 * go to console
 * add project
 * enter arbitary name
 * disable google analytics
 * create project
 * Click the webapp ( </> ) icon to add an app 
 * enter arbitary name
 * uncheck firebase hosting offer
 * click register app
 * continue to console
 * click 'Authentication' in left hand menu
 * click 'get started'
 * click on the cog icon to the right of 'project overview'
 * see Web API Key - copy this and paste it into the Server/firebase.js code
 * click on realtime database
 * click on create database
 * select geo location
 * start in test mode - can edit the rules to remove the read write permission expiry
 * copy the link at the time of database window - looks like : https://xxxx-xxxx-default-rtdb.asia-southeast1.firebasedatabase.app/
 * Paste it into the Server/firebase.js code
 * You now have linked your database
