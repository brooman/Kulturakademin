Live at: https://brooman.github.io/Kulturakademin/

## Introduction

This project was done as a school assignment in WU18 at Yrgo. The goal was to create a streaming service from Kulturakademin called K-Play.

The project was a cooperation between Web Developers, Digital Designers and UX.

## Techniques

The site was built using React.js.

### Installation

1. Clone the repository

```
$ git clone https://github.com/brooman/Kulturakademin.git
```

2. Install dependencies and packages

```
npm install
```

3. Start running the project from the root Kulturakademin folder

```
npm run start
```

#### Developers

- [Ida Hallgren](https://github.com/idahal)
- [Maria Eidland](https://github.com/mariaeid)
- [André Broman](https://github.com/brooman)

#### Feedback
- On your icon components, add width and height props.
- Use hooks instead of class component states.
- src/pages/CategoryView/index.js - 49, 62 & 72 - Use the contents of the if statement directly after a “return” instead of having a return true/false inside the if statement.
- src/pages/CategoryView/index.js - 112 & 116 - Instead of having a variable “cardCounter” for indexing your components inside of a .map, use the index key directly given from the .map function. Ex:
```
Array.map((item, index) => <Component key={index} />)
```
- Stick to using rem/em when styling font-size.
- Send in text content into the Contact component the same way you did with Footer, using props. Makes it easier in the future to implement a CLI.
- Avoid using !important in your css, because it might complicate future css.
- Instead of using .join on some class names and combining with !important, change the logic so that only one or the other classes are used.
- Different components use either hook states or class component states. Try keeping to one of these two to make the code more consistent.
- The component SearchBar is responsible for displaying the results too. This makes the component hard to use again with different types of data. Make SearchBar only responsible for the search logic.
- The component SaveButton is missing some sort of onClick prop which triggers when the button is clicked. Give the component some functionality.
- You could put Header, Contact and Footer inside of a Layout component which wraps all the content in App.js. Makes the code structure easier to read.
- You could try out some transitions between the different routes for improved visibility. (i.e css transition groups)
- It’s good that you are using prop types. Keep using them consistently to improve component structure.
- The Hooks folder is not following the correct naming structure as the rest of the project.
- src/pages/Discover/index.js - 40 & src/pages/pages/Home/index.js - 65 - The same function is declared multiple times and should be separated into a new file for reusable functions.
- src/pages/ErrorPage/index.js - This page isn't in the project and should be removed.
- Error 404 - error 404 page not found not found
- Filtering of the category slug in the URL is missing. Anything the user types after /category is displayed on the page.
- Remove all unused variables/imports for cleaner code.
