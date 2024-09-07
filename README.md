# Match My Job UI

This repo contains the UI for the Match My Job project that helps make the job searching progress less time consuming, by allowing users to see only the positions they are most qualified for.
Please refer to the back-end part of the project if you want to see how jobs and ratings are populated, available at my GitHub:
https://github.com/rubengarciavilches/MatchMyJob

### Motivation:

Searching for jobs can be incredibly time consuming, more so if you are fresh out of college, as the filters for entry level positions are bad or non-existent, this project aims to use AI to match candidates with jobs they are most qualified for, displaying only those to them and saving time in the process.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need to have installed Node.js and npm for this project to work, you can do so from https://nodejs.org/en/download,
it includes npm, you will also need an editor of your choosing, [VS Code](https://code.visualstudio.com/) is very often
recommended and was the one used for this project, here you have [my settings.json for this project](https://gist.github.com/rubengarciavilches/ab185174f4b2fa75ede0de489d6094c6).

If the `npm` commands do not work, you might have to restart the terminal or editor being used.

### Installing

You need to follow very few steps in order to get this project working.\
Open the project in your preferred editor or in the terminal, and install all the node dependencies.
Please take note that you have to run this code at the directory where `package.json` is present.

#### `npm install`

Now all the dependencies should have been installed, let your editor or IDE some time to update its indexes.\
In the project directory, you can run:

#### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Deployment

For the deployment of this part of the project, Vercel was chosen for the simplicity it provides, you may follow the
instructions for that at: https://vercel.com/docs/frameworks/vite

https://match-my-job.vercel.app/

## Built With

-   [React](https://react.dev/) - The web framework used.
-   [TypeScript]() - JavaScript but 100x better.
-   [TailwindCSS](https://tailwindcss.com/docs/guides/vite) - Inline styling. (You might have to clear cache `rm -rf node_modules \n npm install`)
-   [Vite](https://vitejs.dev/) - Ultra fast build and updates server.
-   [ShadCN](https://ui.shadcn.com/docs/installation/vite/) - Easy to edit React UI components.
-   [Prettier](https://prettier.io/) - Guarant a consistent look across the project.
-   [ESLint](https://eslint.org/) - Quickly detect errors and inefficiencies.
-   [Vercel](https://vercel.com/) - Painless deployment (Extremely expensive if you become popular).

### More info

-   Pre-commit hook: [Husky](https://medium.com/@dlyusko/how-to-set-up-a-pre-commit-hook-with-prettier-and-eslint-using-husky-3ca6a9ae7e63)

## License

This project is licensed under the MIT License.

## Acknowledgments

-   [Icons8](https://icons8.com/) - Icons used.
-   [Dog](https://www.rubengv.com/dog.jpg) - For emotional support and code review.
