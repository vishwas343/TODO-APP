# TaskHandy-Todo-App-using-Reactjs
# TaskHandy - Todo App

TaskHandy is a simple, intuitive, and responsive Todo application that allows users to add, edit, delete, and manage their tasks in one place. Built using React and Vite, it uses local storage to persist todos across sessions. The app includes features such as task completion tracking and the ability to toggle between showing completed tasks and only pending ones.

## Features

- **Add Todo:** Easily add a new task by entering it into the input field.
- **Edit Todo:** Update an existing task by editing its description.
- **Delete Todo:** Remove tasks you no longer need.
- **Mark as Completed:** Check tasks off your list by marking them as completed.
- **Toggle Finished Todos:** Show or hide completed tasks with the "Show Finished" checkbox.
- **Persist Data:** All tasks are stored in local storage, so they will remain even after refreshing the page or closing the browser.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Vite:** A fast build tool that provides a modern development environment for React.
- **Tailwind CSS:** Utility-first CSS framework for styling the app.
- **React Icons:** For displaying icons like edit and delete buttons.
- **uuid:** To generate unique IDs for each todo item.
- **Local Storage:** Used to persist todo data across browser sessions.

## Getting Started

Follow these steps to get the project up and running on your local machine:

### Prerequisites

- Node.js installed on your system.
- Basic knowledge of React and Vite.

  
### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```
2. **Install dependencies:**

```bash
npm install
```
3. **Run the app:**

```bash
npm run dev
```
The app should now be running at http://localhost:5173

## Usage
- Enter a task in the input field and click the "Add" button to add it to your todo list.
- Mark tasks as complete by checking the checkbox next to each task.
- Click the "Edit" button to modify an existing task.
- Use the "Delete" button to remove a task.
- Toggle the "Show Finished" checkbox to display or hide completed tasks.

## Components
- Navbar: Simple header component for branding.
- App: Main component managing the state of the todo list.
- Todo List: Displays the list of tasks, with buttons to edit or delete each task.
## Future Enhancements
- Add filtering and searching capabilities.
- Enable date-based sorting and due dates for tasks.
- Integrate a backend for user authentication and storing tasks online.
#### License
This project is open source and available under the MIT License.
