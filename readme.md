## Instructions for setting up the project on your machine

*Download and setup the project directory

  * Navigate to ES6-React-Redux-Seed folder
```
cd ES6-React-Redux-Seed
```
  * Copy the seed project to your folder
```
cp -R ./  /Users/<username>/dev/go/src/work/Your_New_Project/site/
```

*Install node dependencies
  * Navigate back to Your_New_Project
```
cd Your_New_Project
```
  * Install yarn dependencies run
```
yarn install
```
  * Start the site in development mode
```
yarn Start
```

## Configuration changes to be made for making new project work

* WebPack configuration changes, make following changes in **webpack.config.env_name.js** file at root of the project directory
  * Replace ApiServiceUrl value with url for API service to connect
  * Change HostedIP value to actual url where the app will be hosted, this information will be used for logging purpose

## How to create a new page
  
  1. Create new folder under `src\components` with below files
     
     * `actions.js`
     * `constants.js`
     * `initial.state.js`
     * `reducer.js`
     * `[***].component.js`
     * `[***].component.scss`

  2. Import reducer created under step (1) in `src\store\reducers.js`
  3. Configure route under `src\containers\app.js`

## All Commands

  1. Prepare build for `Production Release`

     `$yarn run prod-release-build-package`
  2. Prepare build for `ProdQA`

     `$yarn run prodqa-build-package`
  3. Prepare build for `DevQA`

     `$yarn run devqa-build-package`
  4. Start website in development environment

     `$yarn run start`
  5. Get lint issues

     `$yarn run lint`
  6. Get outdated packages information
  
    `$yarn run getoutdatedpackages`
