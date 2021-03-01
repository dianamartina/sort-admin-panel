# Sort - Admin panel

The application includes two pages, home and people.

On the first page (home) there is a form (without validations) with the following information: name, surname, job, salary, date of employment.

When submitting the form, the information filled in by the user will be saved, and displayed on the second page.

The data in the form is saved in the states, using Redux.

The second page (people) contains a list of a number of people taken from a JSON file, then can be completed later by submitting the data from the form on the home page. On the left side there is a sidebar menu with different sorting and filtering possibilities.
 
When refreshing the second page (people) or when we return to it from the home page, the people are displayed in the initial order.

The project uses the Bootstrap framework, React Router to build routes and Redux for state management.



