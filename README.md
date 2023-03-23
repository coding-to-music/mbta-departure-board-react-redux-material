# mbta-departure-board-react-redux-material

# 🚀 Coding challange to consume and represent data from the MBTA v3 API 🚀

https://github.com/coding-to-music/mbta-departure-board-react-redux-material

From / By https://github.com/ValentinnDimitroff/MBTA-DepartureBoard


## Environment variables:

```java

```

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/mbta-departure-board-react-redux-material.git
git push -u origin main
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

![North Station Signboard](https://github.com/coding-to-music/mbta-departure-board-react-redux-material/blob/main/images/800px-North_Station_departure_board_December_2011.jpg?raw=true)


### useful links
- [image station preview](https://commons.wikimedia.org/wiki/File:North_Station_departure_board,_December_2011.jpg)
- [API Best Practices](https://www.mbta.com/developers/v3-api/best-practices)
- [API key](https://api-v3.mbta.com/portal)
- [API Swagger](https://api-v3.mbta.com/docs/swagger/index.html#/Trip)
- [Data visualization](https://www.mbta.com/schedules/subway)
- [Stops route](https://www.mbta.com/stops/subway#subway-tab)

## Error messages via npm run start

```
npm run start
```

Output

```
src/api/hooks/useFetch.js
  Line 33:8:  React Hook React.useEffect has missing dependencies: 'options' and 'url'. Either include them or remove the dependency array  react-hooks/exhaustive-deps

src/redux/departures-board/departures-board.sagas.js
  Line 43:1:  Assign array to a variable before exporting as module default  import/no-anonymous-default-export

src/redux/departures-board/index.js
  Line 9:1:  Assign object to a variable before exporting as module default  import/no-anonymous-default-export

src/redux/store.js
  Line 2:1:  'redux-logger' should be listed in the project's dependencies, not devDependencies  import/no-extraneous-dependencies

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.
```

## It works, pull stop from dropdown and view upcoming schedule

```
Wednesday
3/22/2023
Choose Stop
place-fldcr
Time
10:30:31 PM
Type	Time	Destination	Train #	Status
Local Bus	10:41:00 PM	Fields Corner Loop		
Local Bus	10:48:00 PM	Fields Corner Loop		
Local Bus	10:50:00 PM	Fields Corner Loop		
Local Bus	10:50:00 PM	Fields Corner Loop	
```
