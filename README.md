# Invoicy

This README is for an Invoicing Application built using NodeJS and ExpressJS on the server and ReactJS for the UI.

The Application is a tool to be used by sellers of a product or service to track payments from the buyers of their products or services.

The Application gives sellers the ability to log into the application, create new invoices and view a list of all the invoices that are pending from their respective clients

The following information is available in the Invoice List view -

1.  The Buyer Name
2.  The Buyer Email
3.  The Invoice Line Items
4.  The Due Date and
5.  The Total Invoice Amount

## Directory Structure

1.  The Server Side -

    a. The Web Server is written in [NodeJS](https://nodejs.org/en/) with [ExpressJS](http://expressjs.com/) helping with Route Handling, [Mongoose](http://mongoosejs.com/) as the MongoDB ORM and [passportJS](http://www.passportjs.org/) as the authentication middleware.

    b. The server side code lives in the `server` folder.

    c. The `routes` folder contains the Application route handlers.

    d. The `middlewares` folder contains a middleware which checks if a user has been authenticated and so has permission to access the routes.

    e. The `models` folder contains the schema files for the 2 pertinent resources for this application - The `User` and `Invoice` resource. These schemas map to documents in our MongoDB instance.

    f. The `services` folder contains the `passportJS` Strategy implementation for Authenticating a User using Github.

    g. The `index.js` file is the starting point of our NodeJS process and contains the ExpressJS app instance.

2.  The Client Side -

    a. The Client Application is written using [ReactJS](https://reactjs.org/). The [Create React App](https://github.com/facebook/create-react-app) project was used to help setup the React Application

    b. [Redux](https://redux.js.org/) helps with State Management and serves as the State Container

    c. [React Router](https://reacttraining.com/react-router/) was used to provide support for navigation within the React Application.

    d. The [react-dates](https://github.com/airbnb/react-dates) library was used for as the datepicker library.

    e. The [MaterializeCSS](http://materializecss.com/) Freamework was used to help style the React Application.

    f. The client side code lives in the `client` folder.

    g. The `components` folder contains the Application Components

    h. The `reducers` folder contains the 2 reducers which map to the 2 main pieces of state this application is concerned with - The `authReducer` helps manage the User information and the `invoicesRedcuer` helps manage the Invoice information.

    i. The `actions` folder contains the action creators for fetching users (`fetchUser`), creating invoices (`submitInvoice`) and fetching invoices (`fetchInvoices`).
