# showbank

More info about my thinking at the end of this readme.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## My locale versions

Node.js = v20.3.1
npm = 9.7.2
Tested mostly in Chrome

## Mobile first

The best practice is always mobile first. FYI the nicest styling is in darkmode.

## BEM over Tailwind

The reason I chose BEM is because this is in my opinion the best way to show my styling skills. I love Tailwind but sometimes other options fit a project better. I also chose to work with SASS to make the CSS more robust and readable. It just works best while working with BEM. I chose to use the initial:root variables in the main.css because of time management, because they already exist on project creation. Of course, it is best practice to use SASS variables when choosing SASS.

For more information about BEM https://getbem.com/

## Typescript

Since I heard in our last conversation that the project will be rebuilt with TypeScript, I thought to add a little Typescript here and there.

## Unit tests

For this MVP I chose to use the standard vue unit tests by vue test-utils. I tried my best to include most as possible.

## Error logging

I choose to do some basic error logging in the components for dev purposes. Most of the time the best way is to use a composable error handling function. I didn't have the time to make this as best as possible. I would love to tell you how I would normally do it for my past projects.

## Environments

Normally I use env variables to do more conditional logic based on environments. Because it is not necessary as an MVP I chose to skip this.

## End Note

Would love to tell more about my way of thinking and why I build it this way.
