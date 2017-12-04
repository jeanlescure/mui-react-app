# Material UI boilerplate React app

<img alt="barebones theme demo gif" src="https://github.com/jeanlescure/mui-react-app/raw/master/src/themes/assets/demo.gif" width="580"/>

## mui-react-app template

This is yet another React starter app, with an added bonus of having Material UI's theming capabilities implemented out of the box.

It should be noted that this repo is currently in a transitional state as it has just been re-written for React v16 and [Material UI v1](https://material-ui-next.com/). Also, Material UI v1 is still in beta, and as such, this repo is expected to be updated according to relevant MUI updates.

## Contents

This app has implementations of:

- Webpack Configurations for Dev and Prod
- Theming with Material UI
- Proper React Router DOM routing
- Proper Component and Page code separation (`src` tree structure)
- Redux state managent

## Points of interest
 
The `App` component (`src/components/App.js`):
- Provides all routes with Material UI theming
- Automagically updates Material UI theming when theme Redux state is updated

Theme redux (`src/redux/theme/`):

- Allows to switch theme/shade from anywhere in the app via the `themeSet` action
 
The `PageWrapper` component (`src/components/page-wrapper/`):

- Adds `Nav` to all routes
- Allows for further implementation of *global* components (i.e. login, role , notifications, etc)

The `Nav` component (`src/components/nav/`):

- Tracks the currently selected page using theme colors and the `withStyles` higher-order component
- Allows to switch shades

## Development

To install dependencies run:

```
$ yarn install
```

To start webpack dev server with hot reload run:

```
$ yarn dev
```

## Production build

To build `dist/` directory run:

```
$ yarn build
```

## What about linting/tests/etc?

This is a base app. The implementation of Material UI here-in is already opinionated enough. I'd rather leave options open for you to implement whatever flavor of linting, tests, etc that your heart desires ;)

## Important theming concepts

In it's latest iteration, Material UI has implemented the following hierarchy:

`theme -> palette -> shade`

**Themes** are higher-order packages which provide Material UI with the starting point for coloring all of it's components. As it pertains to this app, themes can be seen as any sub-directory found under `src/themes`.

**Palettes** govern what colors make-up a theme. Palettes have `common` colors and use these to create `shades`. This app has destructured Material UI themes so that palette's can be managed under a single file: `src/themes/[THEME-NAME]/palette.js`.

**Shades**, as stated in the previous definition, are found as children of a palette. You can define a shade, under a `palette` object, by adding it as a child of the `shades` array.

More info on theme customization can be found on [Material UI's docs](https://material-ui-next.com/customization/themes/).

Besides themes, Material UI provides even further styling capabilities thru its usage of [JSS](https://material-ui-next.com/customization/css-in-js/). This is a Javascript implementation of CSS which this app has implemented as global styles under the file: `src/themes/[THEME-NAME]/styles.js`.

## Further dev notes

This repo has been developed on Mac OS (High Sierra) using Node 8.1.3 and tested on Chrome Version 62+.

## TODO

- Make things look more "materialy" (add sidebar drawer, use raised buttons, etc)
- Add dummy login
- Add dummy session checker (using router redirect)
- Add dummy assets
- Add second theme
- Implement theme switching
