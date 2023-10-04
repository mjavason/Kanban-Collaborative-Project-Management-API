# Kanban Collaborative Project Management Platform

Typescript and Express based API that serves as the core of a collaborative task and project management platform, helping teams organize their work, track progress, and enhance productivity.

## Overview

The Kanban Collaborative Project Management Platform API provides the infrastructure for seamless teamwork and efficient project management. Create and manage projects, assign tasks, track progress, and collaborate in real-time using Kanban boards. Currently hosted live at [KPMS](https://kanban-project-management-system.onrender.com).

## Getting Started

To set up and run the Kanban Collaborative Project Management Platform API, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/mjavason/Kanban-Collaborative-Project-Management-API.git
   ```

2. Navigate to the project directory:

   ```shell
   cd kanban-collaboration-and-project-management-api
   ```

3. Install the required dependencies:

   ```shell
   npm install
   ```

4. Set up the environment variables by creating a `.env` file in the root directory. Refer to the "Environment Variables" section below for details.

5. Build the TypeScript code:

   ```shell
   npm run build
   ```

6. Start the server:

   ```shell
   npm start
   ```

The API will be accessible at `http://localhost:5000` by default.

## Features

- **Kanban Boards**: Visualize project progress using Kanban boards, making it easy to manage tasks and workflows.

- **Real-time Collaboration**: Collaborate with your team in real-time with features like comments and task updates.

- **Task Dependencies**: Ensure tasks stay on track by defining dependencies and timelines.

- **User Roles**: Control access to projects and tasks by defining user roles and permissions.

## Environment Variables

Before running the API, make sure to set up the following environment variables in your `.env` file:

```env
ACCESS_TOKEN_SECRET=your-access-token-secret
APP_NAME=Kanban Project Manager
JWT_SECRET=your-jwt-secret
MONGODB_URL=your-mongodb-url
MONGO_DB_NAME=your-mongodb-database-name
REFRESH_TOKEN_SECRET=your-refresh-token-secret
USERNAME=user@mail.com
SITE_LINK=your-app-website-link
MAIL_ADDRESS=your-mail-address@mail.com
MAIL_PASSWORD=your-mail-password
PUBLIC_VAPID_KEY=your-public-vapid-key
PRIVATE_VAPID_KEY=your-private-vapid-key
```

## Sample Usage

### Creating a Kanban Board

To create a new Kanban board for a project, make a POST request to the `/project` endpoint of the API with the necessary parameters.

Example using curl:

```bash
curl -X POST http://localhost:5000/api/v1/project -d "creator=Your User ID" -d "members[]=Member1 ID" -d "members[]=Member2 ID" -d "start_date=2023-10-01" -d "end_date=2023-10-31" -d "states[]=To Do" -d "states[]=In Progress" -d "title=Your Project Name" -d "description=Your Project Description" -d "tags[]=Tag1" -d "tags[]=Tag2"
```

## Documentation

For detailed documentation on how to use the Kanban Collaborative Project Management Platform API and its endpoints, refer to the [API Documentation](https://documenter.getpostman.com/view/29278179/2s9YJdVMQt).

## Contributing

Contributions to the Kanban Collaborative Project Management Platform API are welcome! If you'd like to contribute:

1. Fork the project on GitHub.

2. Create a new branch for your changes.

3. Make your improvements or additions.

4. Thoroughly test your changes.

5. Create a pull request with a clear description of your changes.

Contributions that improve functionality, performance, and user experience are highly appreciated.