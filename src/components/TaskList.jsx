import React from 'react';
import TaskCard from './TaskCard';
import { Calendar, Inbox } from 'lucide-react';

function TaskList({ tasks, onEditTask }) {
  if (tasks.length === 0) {
    return (
      <div className="card p-12 text-center animate-fade-in">
        <Inbox className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
        <p className="text-gray-600">
          {tasks.length === 0 ? 'Get started by creating your first task!' : 'Try adjusting your filters to see more tasks.'}
        </p>
      </div>
    );
  }

  // Sort tasks: incomplete first, then by priority, then by due date
  const sortedTasks = [...tasks].sort((a, b) => {
    // Incomplete tasks first
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    
    // Then by priority (high > medium > low)
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    
    // Then by due date (earliest first)
    if (a.dueDate && b.dueDate) {
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    if (a.dueDate && !b.dueDate) return -1;
    if (!a.dueDate && b.dueDate) return 1;
    
    // Finally by creation date (newest first)
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">
          Tasks ({tasks.length})
        </h2>
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="h-4 w-4 mr-1" />
          Sorted by priority and due date
        </div>
      </div>
      
      <div className="space-y-3">
        {sortedTasks.map((task, index) => (
          <TaskCard
            key={task.id}
            task={task}
            onEdit={onEditTask}
            style={{ animationDelay: `${index * 50}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;