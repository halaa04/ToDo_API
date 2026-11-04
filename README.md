# ToDo_API

A simple REST API for managing a to-do list, built with **Node.js** and **Express**.
It supports creating, reading, updating and deleting tasks, and has automated tests.

## What it does

- Add a task
- List all tasks
- Mark a task as done (or change its title)
- Delete a task

## Tech stack

- Node.js and Express (the API)
- Jest and Supertest (automated tests)

## Getting started

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the API:

   ```bash
   npm start
   ```

The API is now running at `http://localhost:3000`.

## API endpoints

| Method | Path | Description | Success code |
|---|---|---|---|
| GET | `/health` | Check that the API is running | 200 |
| GET | `/tasks` | List all tasks | 200 |
| POST | `/tasks` | Create a task | 201 |
| PUT | `/tasks/:id` | Update a task | 200 |
| DELETE | `/tasks/:id` | Delete a task | 204 |

Errors: `400` if the title is missing, `404` if the task does not exist.

### Example: create a task

Request:

```http
POST /tasks
Content-Type: application/json

{ "title": "Learn Docker" }
```

Response (`201 Created`):

```json
{ "id": 1, "title": "Learn Docker", "done": false }
```

## Run the tests

```bash
npm test
```

## Notes

Tasks are stored in memory, so they are reset when the server restarts.