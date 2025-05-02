# Angular To-Do App

This is a simple **To-Do List Application** built with Angular and styled using Bootstrap. The app allows users to add, edit, delete, and mark tasks as completed.

<img width="657" alt="Screenshot 2025-05-02 at 7 42 36 PM" src="https://github.com/user-attachments/assets/e05adad2-4585-4caf-8b7d-763ac25fbbbb" />

## Features

* **Add Tasks**: Add new tasks to your to-do list.
* **Edit Tasks**: Modify existing tasks.
* **Delete Tasks**: Remove tasks from the list.
* **Mark as Completed**: Toggle tasks between completed and incomplete states.
* **Responsive Design**: Fully responsive UI using Bootstrap.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

* Node.js (v16 or later)
* Angular CLI (v15 or later)

### Installation

1. Clone the repository:
```
git clone <repository-url>
cd angular-bootstrap-app
```

2. Install dependencies:
```
npm install
```

## Running the Application

1. Start the development server:
```
ng serve
```

2. Open your browser and navigate to:
```
http://localhost:4200
```

## Project Structure

```
src/
├── app/
│   ├── app-routing.module.ts       # Application routing module
│   ├── app.component.*             # Root component files
│   ├── app.module.ts               # Root module
│   └── todo/                       # To-Do feature module
│       ├── todo.component.ts       # Component logic
│       ├── todo.component.html     # Component template
│       ├── todo.component.scss     # Component styles
│       └── todo.component.spec.ts  # Component tests
├── assets/                         # Static assets
├── environments/                   # Environment-specific configurations
├── index.html                      # Main HTML file
├── main.ts                         # Application entry point
└── styles.scss                     # Global styles
```

## Scripts

Here are the available npm scripts:

* **Start Development Server**:
```
npm start
```
Alias for `ng serve`.

* **Build for Production**:
```
npm run build
```
Compiles the application into the `dist/` folder.

* **Run Tests**:
```
npm test
```
Executes unit tests using Karma.

## Technologies Used

* **Framework**: Angular
* **Styling**: SCSS, Bootstrap
* **Testing**: Jasmine, Karma
* **Build Tool**: Angular CLI

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
```
git checkout -b feature/your-feature-name
```
3. Commit your changes:
```
git commit -m "Add your message here"
```
4. Push to your branch:
```
git push origin feature/your-feature-name
```
5. Open a pull request.

## Acknowledgments

* Angular Documentation
* Bootstrap Documentation
