# 🚀 Initial Setup

### Create the Project Directory:
- `mkdir my-project`
- `cd my-project`
- Initialize your npm project to create a package.json file - `npm init -y`

- Install the necessary packages for your project - `npm install express dotenv nodemon @prisma/client`
- express: Web server framework.
- dotenv: Manage environment variables (e.g., port and database connection).
- nodemon: Automatically restarts the server during development.
- @prisma/client: Prisma ORM for database interactions.

### 📁 Setting up the Server:
- `mkdir src`
- Inside the src directory, create a file named server.js or index.js. This will be your main server file.
Note: Populate this file with your server logic.



Use the provided sample code as a reference to build your initial server.

After setting up the server, run the following command to initialize Prisma and generate the necessary folder and schema.prisma file: `npx prisma init`
While we won't delve deeply into how to use Prisma here, it offers a user-friendly way to manage your database.

- From this point onwards, you can follow the provided code. With the right setup, you should be able to replicate this simple project successfully.

### 📚 Additional Resources:

- [Prisma Documentation](https://www.prisma.io/docs/concepts/components/prisma-client)


### Author
- [André Santos](https://www.linkedin.com/in/andre-santos-weber/)
