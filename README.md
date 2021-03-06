# electron-react-ts-boilerplate 
#### ( Has Auto Reloading and Works with Create-React-App )

This is a boilerplate starter pack when starting an electron project which uses react with typescript. The code contains some bug fixes that are found when using react with electron and typescript and has auto monitoring of typescript changes to reload the electron app for faster development.

### Why this electron-react-ts-starter :
+ Run electron app with create-react-app without ejecting.
+ Auto reloads the electron app when the typescript source file changes. (This is missing in a lot of tutorial articles which only have an main.js file and not a main.ts file )
+ Provides the required npm scripts and folder structure for simple to complex projects.
+ Includes a very simple bundling process.
+ Auto reloads app for changes in both main process files and react files.
+ With the provided folder structure , main and renderer process codebase can be maintained independently.

## Usage : 

##### Install dependencies

```js
yarn install
```

##### Run the react app:

```js
yarn start-frontend
```

##### Run electron app's main process:

```js
yarn start-electron
```

## To Build and Bundle :

```js
yarn release 
```

**Sit back and have a cup of Coffee while the app gets built**  . 

You will now have a full fledged application waiting for you in the `dist` folder.

---


### Misc And Extra Options  : 
+ If your app uses React Router , make sure you use `HashRouter` instead of `BrowserRouter` . 
+ In the `package.json` , use the `build` property to modify the settings for electron-builder. All assets and static files in your project should be present in the `assets` folder.
+ To get different installer types like 'msi' , 'appx' , '7z' , 'zip' etc , change the `target` property inside the `build` property in `package.json` . 
+ If you have nested structure of typescript files in the `main` folder , make sure that you copy all the generated javascript `.js` files into the `frontend/public/`  folder before building the react app (This would add the javascript files in the public folder into the build folder when building our react-app).