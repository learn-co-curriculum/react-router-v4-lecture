# goals
  - review React and add some functionality onto a surfboard app.

# rapid fire questions
  - Where do props come from? What can we send through props?
  - How is state different from props?
  - What causes a component to rerender?
  - What is a controlled component?

# what we have in our surfboard app
  - A navbar
  - Routes
  - Surfboard index
  - Surfboard detail
  - All surfboards (an array of objects)
  - Non-working filter

# implementations
  - search by brand
    - Which component will handle user's input?
    - Which component should handle the surfboards being filtered?
    - How do we pass the user's selection to this component?

# now let's extend our filter capabilities:
   - how can we filter by name and brand?
   - what about case sensitivity?
   - what if we want to filter as the user types?

# fetching API data
   - What if my surfboards were stored in an API instead of a local file? How would I get all of the surfboards from the API? How would I get an individual surfboard?
   - Say I make a request for a surfboard to my API and get a successful response, what do I do with the response and how do I render it a list of surfboards to my page?

# practice fetch
    - url: 'http://localhost:3000/api/v1/cocktails/1'
    - what needs to happen when we successfully get data back?
    - where should we store the returned data?

# bonus question
  - How do I make a nested component using react routes?   
