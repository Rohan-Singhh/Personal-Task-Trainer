import React from 'react';
import { Calendar, Edit, Trash2, CheckCircle, Circle, AlertTriangle, Flag } from 'lucide-react';
import { useTask } from '../contexts/TaskContext';
import { format } from 'date-fns';

function TaskCard({ task, onEdit, style }) {
  const { toggleTaskComplete, deleteTask } = useTask();

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high':
        return <AlertTriangle className="h-4 w-4" />;
      case 'medium':
        return <Flag className="h-4 w-4" />;
      default:
        return <Circle className="h-3 w-3" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-error-600 bg-error-50';
      case 'medium':
        return 'text-accent-600 bg-accent-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id);
    }
  };

  return (
    <div 
      className={`card card-hover p-6 animate-slide-up ${task.completed ? 'opacity-75' : ''}`}
      style={style}
    >
      <div className="flex items-start space-x-4">
        <button
          onClick={() => toggleTaskComplete(task.id)}
          className={`mt-1 p-1 rounded-full transition-colors ${
            task.completed 
              ? 'text-secondary-600 hover:text-secondary-700' 
              : 'text-gray-400 hover:text-secondary-600'
          }`}
        >
          {task.completed ? (
            <CheckCircle className="h-5 w-5" />
          ) : (
            <Circle className="h-5 w-5" />
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className={`text-lg font-medium ${
                task.completed ? 'text-gray-500 line-through' : 'text-gray-900'
              }`}>
                {task.title}
              </h3>
              
              <p className={`mt-1 text-sm ${
                task.completed ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {task.description}
              </p>

              <div className="flex items-center space-x-4 mt-3">
                <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${getPriorityColor(task.priority)}`}>
                  {getPriorityIcon(task.priority)}
                  <span className="ml-1 capitalize">{task.priority}</span>
                </span>

                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-primary-50 text-primary-600">
                  {task.category}
                </span>

                {task.dueDate && (
                  <span className="inline-flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    Due {format(new Date(task.dueDate), 'MMM d, yyyy')}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => onEdit(task)}
                className="p-2 text-gray-400 hover:text-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
                title="Edit task"
              >
                <Edit className="h-4 w-4" />
              </button>
              
              <button
                onClick={handleDelete}
                className="p-2 text-gray-400 hover:text-error-600 rounded-lg hover:bg-error-50 transition-colors"
                title="Delete task"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;