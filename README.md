# Build-Up
## What is Build-Up?
Build-Up is an app designed to be a very lightweight social media app that allows users to share their positive life experiences with others while still practicing social distancing. Once an experience is shared with Build-Up, it can only be removed by an admin from the database. This decision was made to encourage users to post without worrying if their experience stacks up (pun intended) to other experiences on the site.

## How to set-up backend:
- Download this repo, navigate to `/backend/build-up-api`, and run `bundle install` to install all dependencies.
- In order to test the application with seed data provided, run `rails db:migrate` followed by `rails db:seed` to run backend migrations, create the database, and populate it with the provided seeds.
- Once your database is set up, run `rails s` to start up the server

*Note:* make sure that when you're finished, you enter `ctrl + c` in the same terminal you ran`rails s` in to stop the server!

## Using the frontend:
- Navigate to `/frontend` and run `open index.html` to open the application in your browser window
- The `Refresh Experiences` button will repopulate all experience groups
- Use the `New Experience` button to create your own experience to share. It will bring up a form to fill out and then be sent to the server. If created with valid data, the experience will appear in the newest-experiences group.
- Use the `New Category` button to create a new category. It will also be sent to the server and be available within the new experience form's category drop-down
