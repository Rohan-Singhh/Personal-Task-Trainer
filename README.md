# Personal Task Trainer

A modern, modular task management application built with React and Vite. This project helps users manage personal tasks efficiently, featuring authentication, dashboards, task filtering, and statistics.

## Features
- User authentication
- Task creation, editing, and deletion
- Task filtering and statistics
- Responsive dashboard UI
- Modular code structure (controller-service-model separation)

## Project Structure

```
Personal Task Trainer/
├── src/
│   ├── components/      # Reusable UI components (TaskCard, TaskForm, etc.)
│   ├── contexts/        # React context providers (Auth, Task)
│   ├── data/            # Sample/mock data for development
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Project metadata and dependencies
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite build configuration
```

### src/components/
- **Header.jsx**: App header and navigation
- **TaskFilters.jsx**: UI for filtering tasks
- **TaskCard.jsx**: Displays individual task details
- **LoginForm.jsx**: User login form
- **Dashboard.jsx**: Main dashboard view
- **TaskForm.jsx**: Create/edit task form
- **TaskList.jsx**: Lists all tasks
- **TaskStats.jsx**: Task statistics summary

### src/contexts/
- **TaskContext.jsx**: Provides task state and actions
- **AuthContext.jsx**: Provides authentication state and actions

### src/data/
- **sampleTasks.js**: Example tasks for development/demo

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Open in browser:**
   Visit `http://localhost:5173` (or as indicated in the terminal)

## Usage
- Log in to access your dashboard
- Add, edit, or delete tasks
- Filter tasks and view statistics

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your fork and open a pull request

## License
[MIT](LICENSE) 