import React from 'react';

// Functional component for a single Todo item
const TodoItem = ({ todo }) => {
  // Function to determine text color based on priority (still present, but not used for styling)
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'text-red-600';
      case 'Medium':
        return 'text-yellow-600';
      case 'Low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div>
      {/* Task description */}
      <p>
        {todo.task}
      </p>
      {/* Priority, Status, and Category details */}
      <div>
        <p>
          <span>Priority: </span>
          <span>
            {todo.priority}
          </span>
        </p>
        <p>
          <span>Status: </span>
          <span>{todo.status}</span>
        </p>
        <p>
          <span>Category: </span>
          <span>{todo.category}</span>
        </p>
        <hr/>
      </div>
    </div>
  );
};

// Main App component for the To-Do List display
const App = () => {
  // The provided todo list data - directly used
  const initialTodos = [
    {
      id: "1",
      task: "Wake up and hydrate (e.g., glass of water)",
      priority: "High",
      status: "Pending",
      category: "Self-care"
    },
    {
      id: "2",
      task: "Personal hygiene (brush teeth, wash face)",
      priority: "High",
      status: "Pending",
      category: "Self-care"
    },
    {
      id: "3",
      task: "Light exercise or stretching (15–30 minutes)",
      priority: "Medium",
      status: "Pending",
      category: "Health"
    },
    {
      id: "4",
      task: "Have a nutritious breakfast",
      priority: "High",
      status: "Pending",
      category: "Health"
    },
    {
      id: "5",
      task: "Review daily schedule and top 3 priorities",
      priority: "High",
      status: "Pending",
      category: "Work"
    },
    {
      id: "6",
      task: "Focus on high-priority work or study tasks",
      priority: "High",
      status: "Pending",
      category: "Work"
    },
    {
      id: "7",
      task: "Check and respond to urgent emails or messages",
      priority: "High",
      status: "Pending",
      category: "Communication"
    },
    {
      id: "8",
      task: "Take a short break (5–10 minutes) to stretch or walk",
      priority: "Medium",
      status: "Pending",
      category: "Self-care"
    },
    {
      id: "9",
      task: "Have lunch",
      priority: "High",
      status: "Pending",
      category: "Health"
    },
    {
      id: "10",
      task: "Continue with work or study tasks, focusing on medium-priority items",
      priority: "Medium",
      status: "Pending",
      category: "Work"
    },
    {
      id: "11",
      "task": "Address any remaining communications (emails, calls)",
      "priority": "Medium",
      "status": "Pending",
      "category": "Communication"
    },
    {
      id: "12",
      task: "Quick tidy-up of workspace",
      priority: "Low",
      status: "Pending",
      category: "Organization"
    },
    {
      id: "13",
      task: "Engage in a hobby or leisure activity",
      priority: "Medium",
      status: "Pending",
      category: "Personal/Leisure"
    },
    {
      id: "14",
      task: "Prepare and eat dinner",
      priority: "High",
      status: "Pending",
      category: "Health"
    },
    {
      id: "15",
      task: "Spend quality time with family or friends, if applicable",
      priority: "Medium",
      status: "Pending",
      category: "Social"
    },
    {
      id: "16",
      task: "Wind down with relaxing activities (reading, light stretching, journaling)",
      priority: "High",
      status: "Pending",
      category: "Self-care"
    },
    {
      id: "17",
      task: "Prepare clothes and items for the next day",
      priority: "Medium",
      status: "Pending",
      category: "Organization"
    },
    {
      id: "18",
      task: "Review tomorrow's top 3 priorities",
      priority: "High",
      status: "Pending",
      category: "Organization"
    },
    {
      id: "19",
      task: "Go to bed at a consistent time",
      priority: "High",
      status: "Pending",
      category: "Health"
    }
  ];

  return (
    // Main container for the application
    <div>
      <div>
        {/* Application title */}
        <h1>
          My Daily To-Do List
        </h1>

        {/* Container for todos */}
        <div>
          {initialTodos.map((todo) => (
            // Render the TodoItem component for each todo
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
