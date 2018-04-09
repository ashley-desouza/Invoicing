# Invoicing

This README is about the Invoicing Application.

The Application is a tool to be used by sellers of a product or service to track payments from the buyers of their products or services.

The Application gives sellers the ability to log into the application, create new invoices and view a list of all the invoices that are pending from their respective clients

The following information is available in the Invoice List view -

1. The Buyer Name
2. The Buyer Email
3. The Invoice Line Items
4. The Due Date and
5. The Total Invoice Amount

## Accessing the Application

1. The Invoicing Application is available for use at [InvoiceApp](https://secret-shore-94449.herokuapp.com/)

2. Users will need to login to the Application in order to create invoices and view their list of invoices

3. Login using github credentials. Asking users to do this is a fair assumption as this exercise is required to be tracked and recorded in github.

## Directory Structure

1. The Server Side - 

    a. The Web Server is written in [NodeJS](https://nodejs.org/en/) with [ExpressJS](http://expressjs.com/) helping with Route Handling, [Mongoose](http://mongoosejs.com/) as the MongoDB ORM and [passportJS](http://www.passportjs.org/) as the authentication middleware.

    b. The server side code lives in the `server` folder.

    c. The `routes` folder contains the Application route handlers.

    d. The `middlewares` folder contains a middleware which checks if a user has been authenticated and so has permission to access the routes.

    e. The `models` folder contains the schema files for the 2 pertinent resources for this application - The `User` and `Invoice` resource. These schemas map to documents in our MongoDB instance.

    f. The `services` folder contains the `passportJS` Strategy implementation for Authenticating a User using Github.

    g. The `index.js` file is the starting point of our NodeJS process and contains the ExpressJS app instance.

2. The Client Side -

    a. The Client Application is written using [ReactJS](https://reactjs.org/). The [Create React App](https://github.com/facebook/create-react-app) project was used to help setup the React Application

    b. [Redux](https://redux.js.org/) helps with State Management and serves as the State Container

    c. [React Router](https://reacttraining.com/react-router/) was used to provide support for navigation within the React Application.

    d. The [react-dates](https://github.com/airbnb/react-dates) library was used for as the datepicker library.

    e. The [MaterializeCSS](http://materializecss.com/) Freamework was used to help style the React Application.

    f. The client side code lives in the `client` folder.

    g. The `components` folder contains the Application Components

    h. The `reducers` folder contains the 2 reducers which map to the 2 main pieces of state this application is concerned with - The `authReducer` helps manage the User information and the `invoicesRedcuer` helps manage the Invoice information.

    i. The `actions` folder contains the action creators for fetching users (`fetchUser`), creating invoices (`submitInvoice`) and fetching invoices (`fetchInvoices`).

## Running Locally

1. In order to run the Application locally, make sure you have Node and npm installed

    a. Navigate to https://nodejs.org/en/download/ and download the latest package according to your operating system.

    b. Open the package and follow the steps for installing Nodejs on your OS.

    npm (Node Package Manager) should come installed along with Nodejs.

2. Verify that Nodejs and npm were successfully installed.

    Run the following commands
    ```bash
    node -v
    ```
    Make sure the version is the same as the one you downloaded
    ```bash
    npm -v
    ```
    Make sure the version is the same as the one you downloaded

3. Clone the repository and install the dependencies.

    Change into the folder. Install all the server side dependencies by running

    ```bash
    cd Invoicing/server

    npm install
    ```
    Change into the `client` folder and install all the client side dependencies

    ```bash
    cd client
    npm install
    ```

4. Once all dependencies have successfully installed, start up the Node server by running

    ```bash
    cd ..
    npm run dev
    ```

5. Now you should have a server running on http://localhost:3000

6. Since MongoDB is used as the database, you will need to install it locally or use a hosting option.

7. Please follow the instructions [here](https://docs.mongodb.com/manual/administration/install-community/) to install a local instance

8. Provide your connect string to `mongoose.connect() method` (Refer - http://mongoosejs.com/docs/connections.html) in the `server/index.js` file (line 23).

9. That should be all the setup needed to get the application running locally.

### Questions

1. The time the exercise took (after dev environment is set up)

    a. Total time spent on this exercise is approximately 6 hours.

    b. Additional time spent but not considered includes
    * The time taken for initial server setup and intial Client Application setup using Create React App
    * Database setup and Github setup for Authentication
    * Application deployment to Heroku.
    * Time taken for preparing documentation.

2. Exercise Difficulty: Easy, Moderate, Difficult, Very Difficult

    * Moderate to Difficult because of the setup required to get the application working end to end but I think it was an enjoyable process.

3. How did you feel about the exercise itself? (1 lowest, 10 highest—awesome way to assess coding ability)

    * From my experience, I do not prefer take home tests as I do find them to be an accurate measure of coding ability. However, this was certainly one of the better ones I have encountered. I would give this exercise an 8.

4. How do you feel about coding an exercise as a step in the interview process?  (1 lowest, 10 highest—awesome way to assess coding ability)

    * As mentioned above, based on my experience I have not found coding exercises an accurate way to assess someone.
    * We have had candidates who do really well on the coding challenge but struggle during the in-person interview and it is entirely possible that we have missed out on really good candidates who did not do well on the coding challenge
    * Based on my experience, I would give the coding exercise as a step in the interview process a 3.

5. What would you change in the exercise and/or process?
    * As mentioned before, I think this was one of the more enjoyable coding exercises I have had to do. I think it was fair. Nothing really to change.

#### Things to improve on

* As per the requirements and in the interest of time, I decided to focus on getting a functional, working application.
* A few things that got left out are more robust client side validation especially around email validation, and also validating the inputs to the server
* Tests could have also been added but that would have taken too much time.