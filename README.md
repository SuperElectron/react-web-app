## First Installation

* Install latest node.js: https://nodejs.org​
* Install latest yarn package manager: https://yarnpkg.com/​
* yarn install
* yarn add react-loadable

## Starting the App
* Run the app `yarn start`
* For build production files use `yarn build` (build to /build/ folder)

## Reference
https://facebook.github.io/create-react-app/ (create-react-app)
https://docs.cleanuitemplate.com/react/documentation/create-react-app/ (cleanui)
https://ant.design/docs/react/introduce (Ant Design)

## Configuring 
* Configure Router: routes @ "src/router.js", and add page components @ "src/page/<name of route>" folder
* Configure Middleware: changes can be made to redux store entry point @ "src/index.js"
* Configure Authorization (firebase): @ "src/services/user.js" for the functions, and @ "src/redux/user/sagas.js" for process
* Configure Localization (languages): translate config file @ "src/locals/<language_name>", and register coonfiguration @ "src/components/LayoutComponents/Localization/index.js", then add formatter to any component. 
* Configure User Roles(<Authorize />): add user role @ "src/redux/users/reducers.js"
  
  
