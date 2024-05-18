# PhotoTagging-Backend
This is the backend for PhotoTagging-Frontend, which contains the tracking and character click functionalities.

## Installation
* Clone the repository using `git clone`
* `cd` into the PhotoTagging-Backend directory
* Create a .env file in the root of the project, and add the variables MONGO_URI and TOKEN_SECRET
* MONGO_URI needs to store the connection string for a MongoDB cluster, with the WheresWaldo database i.e `MONGO_URI="mongodb+srv://<username>:<password>@cluster0...mongodb.net/WheresWaldo?retryWrites=true&w=majority&appName=Cluster0"`
* TOKEN_SECRET can store any text, preferably a long string, i.e `TOKEN_SECRET="adw21-23r2r-3t423-hg122"`
* Run `npm i` to install the required dependencies
* Run `npm run dev` to start the backend
