## Rails Validations 

- Model Validations 
    - A rapper's name should be unique 
    - A rapper should be < 40 years old 
    - Validators exist
        - Read the docs and see if any packaged validators are helpful. If not, create a custom 

- Handling Validations in Controllers 
- Ruby's special hashes 
    - Params
    - Flash 
        - Tells our application that any information inside of our Flash hash should be saved for an additional request 
    - Sessions
    - Cookies 

- HTTP is stateless 
    - Doesn't store information between requests 


# Questions: 
- Custom Routes 
- ActiveRecord Relationships 
    - For example: Which students belongs to which school 
        - if I'm on a school's page, the route to that page should be get "/schools/:id"
        - This should mean that we can access the school in question
        - school.students should return an array of all the students who belong to that particluar school 
- URL helpers 
- Collection_select 
- Rails Generators 