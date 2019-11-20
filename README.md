# TDD_practice
To practice Test Driven Development process, I developed two simple web applications: Couter and Jotto.

### Benefits of TDD?
- Coding more efficiently: Planning ahead of time = fewer false starts.
- Any extra time to make test cases in building the app will help us to save the time to maintains the app.
- Automated tests to find a bug and costs nothing to run them again.

# Project Description
## Counter
- The (very) simple React app with Jest and Enzyme.
- Used Enzyme's shallow() function to render a component.
- Tested that required DOM elements were rendered using *find()*.
- Tested state using Enzyme's *setState()* and *state()*.
- Used *simulate* to interact with rendered elements (clicked button).
- Tested component for updates after interaction.
- Created re-usable *setup()* and *findByTestAttr()* functions.
