## Instructions for setting up the project on your machine

* Download and setup the project directory
```
git clone https://github.com/RxNT/ES6-React-Redux-Seed.git your-project-name
```
* Setup your project as git repo 
```
cd your-project-name
npm run init-setup
git init
git add .
git commit-m 'initial commit'
git remote add origin <url>
git push origin <branch_name>
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

## How to create a Students Registrations Search Page
  
  1. Create new folder named as `search-students` under `src\components` with below files
     *  Add new component `search-students.component.js`
     *  Add new styles `search-students.component.scss`     
     *  Identify list of actions you want to perform in this page, and define action types in `constants.js`
     *  Define state in `initial.state.js`
     *  Define reducer methods to update state in `reducer.js`     
     *  Define actions like fetching data from APIs in `actions.js`     

  2. Create new folder named as `search-students` under `src\containers`
     *  Add new container component `search-students.container.js` and import component created in `step-1`

  3. Import reducer created under step (1) in `src\store\reducers.js`

  4. Configure route under `src\containers\app.js` with container component created under `step-2`

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
