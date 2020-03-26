## About

This is a ReactJS project which fetches some information from https://oslobysykkel.no/apne-data/sanntid
and display it in list format.

## Note

Right now it is displaying list with pagination, in order to display complete list apply following patch.

```
--- a/src/component/vissykkelsstatus/VisSykkelsStatus.js
+++ b/src/component/vissykkelsstatus/VisSykkelsStatus.js
@@ -20,7 +20,7 @@ export default function VisSykkelsStatus({stations}) {
       ]}
       data={stations}
       options={{
-        paging: true
+        paging: false
       }}
     />
   )
```


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


