
# Seir-Seal Project 2

- **Jeff McDonald** (2024-01-07)

- **App Name:** ADK 46er
- **Description:** Exploring New York's Backcountry
- **Github URL:** https://github.com/jeffmcd21/seir-seal-project2
- **Deployed Website:** https://project-2-pc6u.onrender.com/
- **Trello Board:** https://trello.com/invite/b/3bJYyONj/ATTIf74e3885fd5e6227185337d9cb2d72fb48855690/seir-seal-unit-2-project

## List of Dependencies

##### Node Dependencies (package.json)

- bcrypt
- connect-mongo
- dotenv
- ejs
- express
- express-session
- method-override
- mongoose
- morgan

##### Frontend (if used, ex. jquery, alpine, bootstrap, htmx, etc.)

- alpineJS

## Route Map

| Route Name | Endpoint | Method | Decsription |
|------------|----------|--------|-------------|
| Hikes Index | /mountains | GET | Renders all trails |
| New hike | /mountains/new | GET | Display a form to add new trail |
| Delete hike | /mountains/:id | DELETE | Remove a particular trail then redirect |
| Update hike | /mountains/:id | PUT | Update a particular trail then redirect |
| Create hike | /mountains | GET | Add a new trail to the database then redirect |
| Edit hike | /mountains/:id/edit | POST | Show edit form for one trail |
| Show hike | /mountains/:id | GET | Show info about one trail |


## Design Mockups (Mobile & Desktop)

##### Mobile Design

![Mobile Design Mockup](https://i.imgur.com/lw1B6J0.png)

##### Desktop Design

![Desktop Design Mockup](https://i.imgur.com/B9EXxQb.png)

## ERD (Entity Relationship Diagram)

My diagram showing the models and relationships between them.

![Entity Relationship Diagram](https://i.imgur.com/7b2DCXU.png)
