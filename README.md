# Take home assignment

- [x] Create `Project` component based on the `Project card.png` sketch
      Feel free to use any css styling approach for this assignment (styled-components, css modules, `className` props etc.)

- [x] Use data from `data.js` file to generate a list of `Project` components

- [x] Use `Search` input component to filter projects list by name
      This task requires to write a JS function to filter projects if matched with a search query, or some _Nothing found_ placeholder if there’s no match

- [x] Without using any form input libraries implement a tags input component
      The input component that takes text as input and by hitting Enter transforms the input into a tag that is displayed inside the input field. Each tag has a button to remove it.
      Here is the example of Bootstrap plugin: [Bootstrap Tags Input](https://bootstrap-tagsinput.github.io/bootstrap-tagsinput/examples/)

- [x] When you are done with the assignment answer the following questions in this README:

  - How much time did you spend on the assignment?
    3 hours + 1h break + 30 minutes filling out README
  - What was the most difficult task?
    Styling the card was the hardest part. This is something I would have asked better clarification before jumping into code if it were a real project, especially with font/card size, break point, and A11y concerns.

  Feel free to share any other notes on this assignment
  As I mentioned above, there are questions I would have asked beforehand if it were a real project, including the followings:

  - font/color/size of the text and each component
  - How it should look like in mobile device, each breakpoints
  - How many cards do we want to show in the page
  - how the final project look like
  - Is having tag in the search component the best way in A11y?
  - What would you like to do with the tags?
  - What do we want to show when some of the properties in data.js (projects) are not available? (currently set as N/A)
  - What do we want to do with `inProduction` value

  Things I would have done if I had more time:

  - Move formatDate function as helper outside of card/Project js
  - Use SVG for X button in tag

## After completion

Upload the repo to any source-code-hosting (GitHub, GitLab, etc.) and provide a link to it
