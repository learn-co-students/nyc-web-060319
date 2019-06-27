1. `git pull` the recent changes to today's lecture code 
2. Complete the `delete` request for `Rapper`
	- hint: it's in your "Sinatra Restful Routes" lab
3. Create seed your database with a few `Song` instances
4. Build a `SongsController`
	- `SongsController` should have an `index` action
	- `SongsController` should have a `show` action
	- `SongsController` should have a `delete` action
	
_BONUS:_
- Build out the `new`, `create`, `edit`, & `update` actions for `Song`
	- hint, building forms for a `belongs_to` model is also in your labs
	
**At 3pm we will review this project and build the `new` & `create` actions for the SongsController together**











## Sinatra Forms and Associations

Parking Lot:

- Process/Sequence of events
  - Building out an application
- Reading the errors
- Clarifying convention vs convention
  - What's mandatory vs opinionated

# How do we do all the things we've been doing w/ a relationship (i.e. one to many)

# Separation of Concerns

- Specifically as it relates to controllers and views

# Complete all 7 Controller actions

- index
- show
- new -- render a "new" form
- create -- receives params with information from the browser and "creates" our instance
- edit -- render an "edit" form
- update -- receives params with information from the browser and "updates" our instance
- delete

# Goal for today:

- be able to build out our own model/controller/view for a resource/model
