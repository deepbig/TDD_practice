# TDD_practice
To practice Test Driven Development process, I developed three simple web applications.

## Counter

- The (very) simple React app with Jest and Enzyme.
- Used Enzyme's shallow() function to render a component.
- Tested that required DOM elements were rendered using *find()*.
- Tested state using Enzyme's *setState()* and *state()*.
- Used *simulate* to interact with rendered elements (clicked button).
- Tested component for updates after interaction.
- Created re-usable *setup()* and *findByTestAttr()* functions.
