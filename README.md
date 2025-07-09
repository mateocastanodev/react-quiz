# React Quiz and Live Code Editor

## Project Overview

This project is an interactive React-based quiz application that also features a live JavaScript code editor. It allows users to test their knowledge of React and JavaScript concepts through multiple-choice questions and hands-on coding exercises.

## Features

- **React Quiz:**
  - Multiple-choice questions across different difficulty levels: Beginner, Intermediate, and Advanced.
  - Timed questions to challenge users.
  - Summary of results at the end of each quiz session.
- **Live Code Editor:**
  - Interactive JavaScript code editor for hands-on practice.
  - Sequential coding exercises with problem descriptions and initial code.
  - Real-time execution of JavaScript code and display of console output.
- **Customizable UI:**
  - Modern and eye-catching design with a customizable color palette.
  - Responsive layout for various screen sizes.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A superset of JavaScript that adds static typing.
- **Vite:** A fast build tool for modern web projects.
- **Material-UI (MUI):** A popular React UI framework for building beautiful and responsive user interfaces.
- **Prism.js:** A lightweight, extensible syntax highlighter.
- **react-simple-code-editor:** A simple, flexible code editor component for React.

## Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

- Node.js (LTS version recommended)
- npm (usually comes with Node.js)

### Clone the repository

```bash
git clone https://github.com/mateocastanodev/react-quiz.git
cd react-quiz
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the port indicated in your terminal).

## Usage

### React Quiz

1.  Select a difficulty level (Beginner, Intermediate, or Advanced) from the main menu.
2.  Answer the multiple-choice questions within the given time limit.
3.  Review your results in the summary section.

### Live Code Editor

1.  Click on the "Code Live" button in the main menu.
2.  Read the problem description for the current exercise.
3.  Write your JavaScript code in the editor.
4.  Click "Run Code" to see the output in the console.
5.  Navigate between exercises using the "Previous" and "Next" buttons.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1.  Ensure your repository is named `react-quiz`.
2.  The `homepage` field in `package.json` is set to `https://mateocastanodev.github.io/react-quiz`.
3.  Push changes to the `master` branch. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy the application.

## Contributing

Contributions are welcome! If you have suggestions for improvements, new features, or bug fixes, please open an issue or submit a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information. (Note: A `LICENSE` file is not included in this project, but it's good practice to add one.)