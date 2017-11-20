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

  1. Create new directory named `search-students` under `src\components` with below files
     *Most of the code inside `search-students` will be similar to that of `search-master`*
     *  Add new component `search-students.component.js`.
         - Create class **SearchStudentsComponent** and render appropriate components. Use search-master as reference to create the table.
         - Inside mapStateToProps add the following ```data: store.searchStudentsReducer.data,
         loading: store.searchStudentsReducer.loading,```
         - Inside mapDispatchToProps the first argument to bindActionCreators will be the actions we imported for this file ```actions: bindActionCreators(studentIndexActions, dispatch)```
         - Export **SearchStudentsComponent** appropriately
     *  Add new styles `search-students.component.scss`     
     *  Identify list of actions you want to perform in this page, and define action types in `constants.js`
         - To begin, you can refer the actions in `search-master/constants.js`.
         - You can add more constants if needed.
     *  Define state in `initial.state.js`. Initial state is the same as in `search-master/initial.state.js`
     *  Define actions like fetching data from APIs in `actions.js`
         - `action.js` will also look much similar to the action creator in `search-master`
         - The following can be used for api get request: ```apiProxy.get(appConstants.appInfo.apiServer + appConstants.apiRoutes.searchStudentsRoute)```
         - Navigate to src/appConstants and add ```searchStudentsRoute: '/students?_sort=id&_order=desc',``` at the bottom of apiRoutes
     *  Define reducer methods to update state in `reducer.js`. Reducers change the application state.
         - Make appropriate change to the application state as required


  2. Create new folder named as `search-students` under `src\containers`
     *  Add new container component `search-students.container.js`and render the component created in `step-1`.

  3. Import reducer created under step (1) in `src\store\reducers.js` and add in to combineReducers

  4. Configure route under `src\containers\app.js` with container component created under `step-2` after importing `SearchStudentsContainerComponent`. Add ```<Route exact path="/students" component={SearchStudentsContainerComponent} />``` to the list of routes

  5. Finally, navigate to `src/uicomponents/menu/topnav-component.js `. Configure the anchor tag on the second li of `nav` div to point to *#/students* ```<a href="#/students" tabIndex="-1">``` and rename Menu2 to Students

  6. The list should be empty as we haven't added anything yet. Next lets add a form that lets us add students

## Adding new Students

  1. Create new folder named as `add-students` under `src\components` with below files
   *Most of the code inside `add-students` will be similar to that of `add-master`*
      *  Add new component `add-students.component.js`
          - UIComponents should be imported from ```/ES6-React-Redux-Seed/src/uicomponents/```
          - Create class **AddStudentsComponent** and render a redux form containing name and email field.
          - Rename `addMasterReducer` inside mapStateToProps to `addStudentReducer` too. The reducer will be created later.
          - Replace the constants `form: types.COMPONENTS_ADD_MASTER_FORM` to `form: types.COMPONENTS_ADD_STUDENTS_FORM`
          - Inside function saveInfo replace the last line to `this.props.history.push('/students');`
      *  Add new styles `search-students.component.scss`
      *  Identify list of actions you want to perform in this page, and define action types in `constants.js`
          - To begin, you can refer the actions in `search-master/constants.js`.
          - You can add more constants if needed.
      *  Define state in `initial.state.js`. Initial state is the same as in `add-master/initial.state.js`
      *  Define actions like fetching data from APIs in `actions.js`
          - `action.js` will also look much similar to the action creator in `add-master`
          - Change the constants to refer to the constants in `add-students` directory
          - The post command should to save the formValues should be  ```apiProxy.post(appConstants.appInfo.apiServer
            + appConstants.apiRoutes.searchStudentsRoute,
            formValues)``` where form value is supplied to the function that saves the data to the server
      *  Define reducer methods to update state in `reducer.js`. Reducers change the application state.
           - Make appropriate change to the application state as required

  2. Create new directory `add-students` under `src\containers`
     *   Add new container component `add-students.container.js`and render the component created in `step-1`. Import AddStudentsComponent from `'../../components/add-students/add-students.component'`
  3. Import reducer created under step (1) in `src\store\reducers.js` and add in to combineReducers. (Add ‘addStudentsReducer’ to combineReducers.)
  4. Configure route under `src\containers\app.js` with container component created under `step-2` after importing `AddStudentsContainerComponent`. Add ```<Route exact path="/new/students" component={AddStudentsContainerComponent} />``` to the list of routes
  5. Navigate to `src/containers/search-students.components.js` and rename the Link destination to `“/new/students”`   ```<Link to="/new/students”>```
  6. Navigate to tests/db.json and add ```"students": [
    ], before “masters” ```


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
