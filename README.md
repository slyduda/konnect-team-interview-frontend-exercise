# Welcome

## Notes

Adding notes below based on changes made and thought process throughout development.

#### Type Guards

The first thing that I wanted to achieve in this assessment was adding strong Typing for out database models. 

- Pros

One of the most important things when dealing with REST APIs is making sure that models and properties are well documented because small discrepancies in types or between specific endpoints might make things fail. I brought in some Type Guards and created simple User and Service Types based on the API examples present. If there is ever any change in an endpoint that the app will consume during development the components should break during runtime and we can throw whatever error we need to in order to flag it before it reaches testing, staging, or production. 

- Cons

Adding Type Guards is slightly more cumbersome than adding simple types since we have to convert our object once it reaches our app so the downside here is that if we ever want the flexibility of having a property missing we will have to do some refactoring.

#### Setup Notation for Composition API

The second thing that I wanted to do was convert the defineSetup notation to a setup notation for code simplification and matching our programming pattern closer to that of a the Functional Frontend patter that we are seeing more from the community (due to some changes in React)

- Pros

Our code is a lot more clean. We are able to cut lines out and rearrange functions and refs in places that make our application more readable.

- Cons

This is a slightly different pattern than present in current Kong frontend applications so refactoring would take some time. Setup notation requires adding some additional eslint rules to rule out some errors (which I haven't done yet due to time constraints)

#### Kongponents

Added Kongponents to get more familiar with the the components available. I opted to only use the KIcons in the navbar and the KInput for the search to mainly utilize Tailwind based components that I had available to showcase more setup notation composition API.

- Pros

Kongponents are the branded components. They include icons, styles, etc so that we don't have to worry about building components from scratch.

- Cons

No real cons here other than the disparity caused by two style libraries. I added Tailwind later in this project to show my familiarity with it seeing that Tailwind is used in custom components on the Front-End that this position would be working with.

#### General Layout

Setting up the layout of the navbar and changing the logo. No real comments here

#### Catalog Item Component

Added a Catalog Item component. It is a button itself that opens a modal of the same information with the version details present. Title can be clicked to bring us to a new route that shows futher Service details (not yet implemented). Correct aria and role labels were used to play nicely with screen readers. I made the design choice to make the element directly below it so that we could avoid messing with deep emits or using the store. Tabbing works out of the box due to this choice, but would be fine at the root of the app with good aria labels and roles.

- Pros

Pro of designing the component this way is we don't have to use the store. We casn simply place a modal in each component that opens up when the root element is clicked.

- Cons

More than one component can be opened during tabbing or if there is an error in modal background styling. For now it works well, but longer term we may want to have a single "ServiceModal" component that is opened on Catalog Item click.

## Goal

Make this Vue 3 app as close to [this mock](https://www.figma.com/file/zeaWiePnc3OCe34I4oZbzN/Service-Card-List?node-id=0%3A1) as possible while utilizing best-practices, coding standards, and great code to improve the example codebase.

The styling should be responsive and look good at different browser window sizes.

The provided exercise files are a starting point; they have room for improvement. Don't treat the mock as gospel -- if you see things that don't make sense, implement what you think is right.

You may use our component library, [Kongponents](https://beta.kongponents.konghq.com), if desired; however, keep in mind we want to see the code **YOU** can write as well.

### Links

- Figma Mock: <https://www.figma.com/file/zeaWiePnc3OCe34I4oZbzN/Service-Card-List?node-id=0%3A1>
- Kongponents (for Vue 3): <https://beta.kongponents.konghq.com>

## Functional Requirements

- Ability to view the name, a brief description, and versions available for services
- Ability to search services (client-side implementation)
- User can paginate through services (client-side implementation)
- Responsive layout
- Update the `README` in the project to describe your design considerations, assumptions and trade-offs made during this exercise
- The Create Service button and clicks on service cards don't have to be operable -- could do nothing, could open a modal with a message, or could be fully implemented (stretch goal)

## Additional Considerations

- TypeScript
- Tests
- Routing and views (e.g. navigating to a given service from its card)
- Pinia state management
- Other items covered in your Panel 1 interview

## Evaluation

We will review your code to see how you work, how you approach UI, and what tradeoffs you make. Specifically we'll be looking at the following:

- How closely your implementation matches the design
- Code quality, including appropriate componentization and modularity
- Coding practices and industry standards

## How to submit the project

You have up to a week to complete the exercise, but we don't expect you to spend more than a few hours on it.

When it's ready, please send your recruiter a link to the source code in a GitHub repository (no Pull Requests).

---

## Project Setup

```sh
yarn install --frozen-lockfile
```

### Committing Changes

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[Commitizen](https://github.com/commitizen/cz-cli) can be used to to help build and enforce commit messages.

It is __highly recommended__ to use the following command in order to create your commits:

```sh
yarn commit
```

This will trigger the Commitizen interactive prompt for building your commit message.

### Compile and Hot-Reload for Development

Start the backend:

```sh
yarn server
```

Separately, start the frontend:

```sh
yarn dev
```

### Lint with ESLint

```sh
# Run the linter
yarn lint

# Fix linting errors
yarn lint:fix
```

### Build and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

Unit test files must be named `*.spec.ts`

```sh
# Run unit tests
yarn test:unit

# or run unit tests and view in the Vitest UI
yarn test:unit:ui

# or view test coverage via Vitest
yarn test:unit:coverage
```

### Run Component Tests with [Cypress Component Testing](https://docs.cypress.io/guides/component-testing/introduction)

Component test files must be named `*.spec.component.ts`

```sh
# Run component tests
yarn test:component

# or run the component tests in the Cypress UI
yarn test:component:open
```
