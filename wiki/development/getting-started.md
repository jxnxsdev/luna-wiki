---
prev: false
next:
  text: Resources
  link: /development/resources
description: Get started developing plugins for TidaLuna
---

# Getting Started with TidaLuna Development

TidaLuna is built to support plugins and extend the functionality of the TIDAL desktop app.
This guide will help you get started with developing plugins for TidaLuna.

## Setting Up Your Development Environment

### What you need

- A code editor supporting Typescript (e.g. Visual Studio Code, Webstorm, etc.)
- Node.js installed on your system (version 20 or higher)
- pnpm
- A basic understanding of Typescript, Electron and Redux
- A TidaLuna installation to test your plugins on

### Installing Node.js

You can download Node.js from the [official website](https://nodejs.org/). Make sure to install the latest LTS version (20 or higher).
Install it and make sure it is available in your PATH. You can check if Node.js is installed correctly by running the following command in your terminal:

```bash
node -v
```

This should output the version of Node.js you have installed.

### Installing pnpm

Node ships with npm, but we recommend using [pnpm](https://pnpm.io/) as it is faster and more efficient.
You can find installation instructions on the [pnpm website](https://pnpm.io/installation).
You can check if pnpm is installed correctly by running the following command in your terminal:

```bash
pnpm -v
```

This should output the version of pnpm you have installed.

### Setting Up Your Project

For this, you ideally wantt to have a GitHub account. GitHub is a platform allowing developers to share and collaborate on code.
Once you finish a plugin and want to publish it, GitHub is required to publish it to the TidaLuna Plugin Store.

1. Fork the Template Repository:
   Visit the [TidaLuna Plugin Template](https://github.com/Inrixia/luna-template) repository and click on the "Fork" button in the top right corner.
   This will create a copy of the template repository in your own GitHub account.
2. Clone the Forked Repository:
   This can be done in multiple ways, but the easiest is to use the GitHub Desktop app or the command line.
   If you dont know how to do this, you can find instructions on the [GitHub documentation](https://docs.github.com/en/get-started/quickstart/fork-a-repo).
3. Open the cloned repository in your code editor.
4. Install the dependencies by running the following command in your terminal:

   ```bash
   pnpm install
   ```

   Make sure to run this command in the root directory of your cloned repository.

5. Open the `package.json` file and update the `name`, `description`, and `author` fields to match your information. The name could be something like `luna-plugins`.
   Ideally, the name should be the same as your GitHub repository name.
6. Inside the plugins directory, you will find an Example project. Projects are structured the following way:

   ```
      Example/
      ├── package.json
      ├── src/
      │   ├── index.ts
      │   ├── Settings.tsx
      └── README.md
   ```

7. Duplicate the `Example` directory and rename it to your plugin name. This will be the directory for your plugin.
   You are meant to have all your plugins in one repository.

8. The `package.json` file contains the metadata for your plugin, such as the name, version, and dependencies. Adjust the fields with your plugin information.
   Heres an example of a `package.json` file:

   ```json
   "name": "My Awesome First Plugin",
   "description": "A plugin that does something awesome",
   "author": {
   	"name": "coolUsername",
   	"url": "https://github.com/coolUsername",
   	"avatarUrl": "your avatar url"
   },
   "main": "./src/index.ts",
   "type": "module"
   ```

### Building Your Plugin

The tempalate repository already contains a basic setup for building your plugin. It will listen for changes in your plugin directory and automatically rebuild it.
To build your plugin, run the following command in your terminal:

```bash
pnpm run watch
```

This will start a developement server. If you now open up TIDAL and go to the Plugin Store, you should see your plugin listed there. From there you can install it and test it.

### Publishing Your Plugin

To publish your plugin, you first need to enable workflows in your forked repository.

1. Open your forked repository on GitHub. On the top theres a navigation bar, click on the "Settings" tab.
2. In the left sidebar, click on "Actions" and then "General".
3. Under actions permissions, select "Allow all actions and reusable workflows".
4. Scroll down to the "Workflow permissions" section and select "Read and write permissions".
5. Click on "Save" to save your changes.

Now you can commit and push your changes to your forked repository. All pushes and pull requests to the `main` branch will automatically trigger the build and publish workflow.

::: warning
Do not actively develop on the `main` branch, as this will trigger the build and publish workflow every time you push changes.
This can lead to unintended publishing of unfinished or broken plugins. Every change you make on the `main` branch will be published to the Plugin Store and
therefore is immediately available to all users inside TidaLuna.

Instead, create a new branch for your development work and only merge it into the `main` branch when you are ready to publish your plugin.
:::

### Adding your Plugin Store to TidaLuna

To add your plugin to the TidaLuna Plugin Store, you should join the [TidaLuna Discord Server](https://discord.gg/jK3uHrJGx4) and request your store to be added.

## Additional Resources

Visit the [Next Page](/development/resources) for additional resources and documentation on developing plugins for TidaLuna.
