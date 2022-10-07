### Non-Functional requirements

### Functional requirements
0.  webpack.config file:
1. Common components:
 - *pageState Object*: In order to keep track of the current visited page,
 I will create a IIFE that will return an object
 with all pages as properties and a function as value for
 each property. Each function corresponds to an option
 of the menu, i.e. a page, for when any of them is
 clicked. When any of those options is clicked and
 the page is accessed, the state of that page changes
 to true (current visiting), and the state of the others
 change to false (current not visiting).  
 - *Update pages state*: To update the state of the 
 current visited page, I loop over the statePage object.
 If the currentPage(page being visited) is equal to any
 of the page in the object -meaning this is the page
 being visited, change status to `true`. Else to `false`. 



2. Header Component
 - create a header element with a grid disposition.
 - add two div elements:
   - a) log and brand name
     - set it with a grid disposition and two columns,
       one for the logo, one for the brand name
   - b) menu:
     - each of the menu option will be taked from
     an object. Each object property will have
     the menu option name and a function as value,
     for when the it's clicked.
     - to create the menu, loop over the object, creating
     a li item, attributes and event handlers for each
     of the created list element corresponding each of
     the propery of the object.
  
3.  Index Page Component
 - The div element with the content id is added from the template file (webpack.config file).
 - add every element using js: 
 * image as document background (ccs file)
 * Hero texts:
     **Dtierra offers a cup to go. Stay just for the right of time before you go in search of your dreams.**
     **DTIERRA**
     - Etc.


 4. Menu Page
  - Remove all children of `content` that
  aren't header. 
  - There are two header children.
  - Add two div boxes with border-radius effect
  - Add a div with the form of a table. Put inside all
    infos: coffee type, brand, green coffee
  Each coffee will have the brand name (DTIERRA) and
  the calories of one cup coffee (zero)
    - Create an array. Add 9 items to it.
    Each item will be a coffee type. 
  Effects:
  - Hovering over coffee option:
   a. Move row up  
   b. Insert text in the row with a scrolling-to-left effect.
   c. Insert green coffee badges
  - Add coffee cup on hover
    a. get current row class over which is being
    hovered.
    `Bottleneck`: mouseover vs. mouseenter
  - Add cup of coffe functionality: when user
  hover over any of the menu rows, the corresponding
  coffee cup slides down up to the middtle of
  the page. When user move the mouse focus out of the row, the coffee cup move completely down out of the sight 
    a. Create two functions:
      - `cupEffectIn()`: 
         - import every image. Create an object 
         with each property as a string with
         the name of the biding variable('AMERICANO'), and 
         the value as the variable itself
         - create elements
         - compare class of row on hover with strings
         of object. If true, put image as src value.
  - Add steam effect
    - add list, style it and animate it to create the steam effect

 5. About Page
 5. Tooltip 


