# Personal Website of Simon Yates

This is the persona website of Simon Yates (aka @ChefTechnical).

I chose to open-source the website for anyone curious to see how I built it.

The website was built using React + Typescript, is hosted on an AWS S3 bucket, and is proxied through Cloudflare; design follows the Google Material design system. Although most of the design elements rely on components from the React Material-UI framework, I had to write my own `Typography` component as the one bundled with the framework was far too limiting.

Component prototyping is handled with Storybook, and is divided into three parts: 

1. Components — which represent common components used throughout the site
2. Pages — which allow me to test each page of the site without directly navigating to the page. Typically this might be a little excessive, but this site is very text-heavy, and managing the pages this way is just easier for me.
3. Style Guide — is a collection of core design elements that may be inherited by other components or pages—think color, logos and stuff.

## Requirements

If you want to run a copy of this site, you'll require the following:

- Node.js, v12.18.0 LTS

This project was bootstrapped with 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

Simon's Deployment
yarn build
console.aws
root user
AWS (Sybaris) simon@sybaris.ca