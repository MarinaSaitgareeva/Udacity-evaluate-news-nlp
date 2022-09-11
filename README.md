# Evaluate A News Article with Natural Language Processing
4th project at Udacity Front End Web Developer Nanodegree program.

I will build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

You don't have to worry about NLP, because we will make use of an external api called MeaningCloud to interact with their NLP system. This tool will help us classify the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

# Project Instructions

The goal of this project:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

# Installation
1) Make sure Node and npm are installed from the terminal.
node -v
npm -v

2) Move to the project folder
cd <project directory>

2) Clone the repo
git clone <repo>

3) Install npm
npm install

4) Install loaders and plugins
Choose the necessary installation for your development mode
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

5) Sign up for an API key at meaningcloud.com

6) Configure environment variables using dotenv package
    Install the dotenv package
    npm install dotenv
    Create a new .env file in the root of your project
    Fill the .env file with your API key like this:
    API_KEY=**************************

# Command	Action
npm run build-prod for Build project

npm run start for	Run project

Open browser at http://localhost:8080/
