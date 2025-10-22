# JLPT Grammar API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSigmabond01%2Fjlpt-grammar-api)

A simple, lightweight, read-only API for retrieving JLPT N5 and N4 grammar points. Built with Node.js, Express, and plain JSON files. Deployed as a serverless function on Vercel.

This project uses `fs` (File System) to read from static `.json` files, making it extremely fast, lightweight, and easy to maintain without needing a database.

---

## Live API & Documentation

The API is live and hosted on Vercel. **The root URL serves the HTML documentation page.**

**Live Docs:** [https://jlpt-grammar-api.vercel.app/](https://jlpt-grammar-api.vercel.app/)

The base URL for all API endpoints is:
`https://jlpt-grammar-api.vercel.app/api/grammar`

---

## Technology Stack

* **Backend:** Node.js, Express.js
* **Data:** Static `.json` files
* **Deployment:** Vercel (Serverless Functions)

---

## API Endpoints

### 1. Get All Grammar by Level

Retrieves a JSON array of all grammar points for a specific JLPT level.

* **Method:** `GET`
* **URL:** `/:level`
* **Supported Levels:** `N5`, `N4`

#### Example Request:

```bash
GET /api/grammar/N5
```

#### Success Response (200 OK):

```json
[
  {
    "id": 1,
    "grammar_point": "ちゃいけない・じゃいけない",
    "romaji": "cha ikenai / ja ikenai",
    "meaning": "must not do (spoken Japanese)",
    "example": "..."
  },
  {
    "id": 2,
    "grammar_point": "だ・です",
    "romaji": "da / desu",
    "meaning": "to be (am, is, are, were, used to)",
    "example": "..."
  }
]
```

#### Error Response (404 Not Found):

If you request a level that doesn't exist (e.g., `N3`):

```json
{
  "message": "Error fetching data for level N3. Level not found or is empty."
}
```

---

### 2. Get Single Grammar by ID

Retrieves a single grammar point object specified by its level and ID.

* **Method:** `GET`
* **URL:** `/:level/:id`

#### Example Request:

```bash
GET /api/grammar/N5/15
```

#### Success Response (200 OK):

```json
{
  "id": 15,
  "grammar_point": "ほうがいい",
  "romaji": "hou ga ii",
  "meaning": "had better; it'd be better to; should~",
  "example": "薬を飲んだほうがいいです。 (Kusuri o nonda hou ga ii desu. - You had better take the medicine.)"
}
```

#### Error Response (404 Not Found):

If you request an ID that doesn't exist:

```json
{
  "message": "Grammar point not found in N5"
}
```

---

## How to Run Locally

1.  **Clone this repository:**
    ```bash
    git clone [https://github.com/Sigmabond01/jlpt-grammar-api.git](https://github.com/Sigmabond01/jlpt-grammar-api.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd jlpt-grammar-api
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The server will be running on `http://localhost:4000`.

---

## Author

Made by **@Sigmabond01**

* **X (Twitter):** [@Sigmabond01](https://x.com/Sigmabond01)
* **GitHub:** [@Sigmabond01](https://github.com/Sigmabond01)

## License

This project is open-source and available under the [MIT License](LICENSE).
