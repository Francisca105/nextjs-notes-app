# Note App

This is a simple note-taking application with CRUD (Create, Read, Update, Delete) functionality, built using Material-UI (MUI), PocketBase, and Next.js.

## Overview

The Note App allows users to create, view, edit, and delete notes. It provides a user-friendly interface for managing notes efficiently.

## Features

- **Create Note**: Users can create new notes by providing a title and content.
- **View Note**: Users can view existing notes with their titles and content.
- **Edit Note**: Users can edit the title and content of existing notes.
- **Delete Note**: Users can delete unwanted notes.

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for building server-side rendered and statically generated web applications.
- [Material-UI (MUI)](https://mui.com/): A popular React UI framework for building beautiful and responsive user interfaces.
- [PocketBase](https://pocketbase.io/): A lightweight and flexible backend service for managing data.

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** (or **yarn**) installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Francisca105/nextjs-notes-app.git
```

2. Navigate to the project directory:

```bash
cd nextjs-notes-app
```

3. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [localhost](http://localhost:3000) in your browser to view the application.

## Usage

- Create a new note, after providing a title and content, by clicking the "Create" button.
- View existing notes on the home page.
- Click on a note to view its details and edit it.
- Edit a note by writing in the fields and save it in the "Edit" button.
- Delete a note by clicking the "Delete" button.

## Lighthouse Test Results

|Performance    |Accessibility     |Best Practices     |SEO    |
|:--:|:---:|:---:|:--:|
| 97 | 100 | 100 | 92 |

## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or feature implementations, feel free to open an issue or submit a pull request.