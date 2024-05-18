# PhotoTagging-Backend
This is the backend for PhotoTagging-Frontend, which contains the tracking and character click functionalities.

## Installation
* Clone the repository using `git clone`
* `cd` into the PhotoTagging-Backend directory
* Create a .env file in the root of the project, and add the variables MONGO_URI and TOKEN_SECRET
* MONGO_URI needs to store the connection string for a MongoDB cluster, with the WheresWaldo database i.e `MONGO_URI="mongodb+srv://<username>:<password>@cluster0...mongodb.net/WheresWaldo?retryWrites=true&w=majority&appName=Cluster0"`
* TOKEN_SECRET can store any text, preferably a long string, i.e `TOKEN_SECRET="adw21-23r2r-3t423-hg122"`
* Run `npm i` to install the required dependencies
* Run `npm run dev` to start the backend on default URL `http://localhost:3000`

![image](https://github.com/amora7741/PhotoTagging-Backend/assets/104049707/b6a2a513-a938-4ca5-b136-c3d1bcf4ad6a)
![image](https://github.com/amora7741/PhotoTagging-Backend/assets/104049707/6a5382db-3e8e-4835-a5cf-3bb9ec4a95bc)
