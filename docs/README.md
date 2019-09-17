### Installing node on Linux with zshrc terminal

    - First install nvm (commands on url: https://github.com/nvm-sh/nvm)
      - curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

    - Add the nvm on path
      - Open the file .zshrc (i.e: vim ~/,zshrc)
      - Add the lines bellow
        # Path for nvm
        export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

    - In order to to check if nvm was installed restart or close/open the terminal and then run the line command bellow:
      - nvm --version

    - Install the node with LTS version (url: https://nodejs.org/en/)
      - i.e: nvm install 10.16.3

    - Then set the version installed as default
      - nvm alias default 10.16.3

    - In order to to check if node was installed restart or close/open the terminal and then run the line command bellow:
      - node -v


### Installing node on Windows

    - First Install the chocolatey (https://chocolatey.org/)
    - Install the NodeJs via package manager (https://nodejs.org/en/download/package-manager/#windows)
      - Using Chocolatey:
        - cinst nodejs
        - or for full install with npm
          - cinst nodejs.install

    - In order to to check if node was installed restart or close/open the terminal and then run the line command bellow:
      - node -v


### Installing yarn

    - First access the site https://yarnpkg.com/pt-BR/ and choose your language
    - On main screen click on Install yarn and then follow the steps according to OS.
    - In order to avoid reinstal the Node its recommended 
     - For Linux the line command : sudo apt-get install --no-install-recommends yarn
     - For Mac the line command: brew install yarn --without-node
     - For Windows the line command: choco install yarn

    - In order to to check if yarn was installed restart or close/open the terminal and then run the line command bellow:
      - yarn -v


### Installing Node application cloning the repository from github

    - After clone the repository to a local folder
    - Assure that the file package.json is on root folder then run the command:
      - yarn
    - For start the application in manually mode run the command:
      - node <main JS file>. i.e: node index.js


### Installing Insomnia

    - For simulate the execution of APIs a good application would the Insomnia.
    - In order to install it access the url https://insomnia.rest/ and follow the instructions


### Installing dependencies for Nodejs - Module01

    - Inside to project folder created run the following line commands:
      - yarn add express
      - yarn add nodemon -D (the flag D is to avoid the deploy in production, whih means only for development). Note that the nodemon is used to watch the appllication and run it automatically
        - After install the nodemon, it's necessary create a script called dev, informing the main file to use it on terminal. For achieve it, inside to package.json, before dependencies add a tag called scripts as per example bellow.

            "scripts": {
              "dev": "nodemon index.js"
            }

        - For run the script, on terminal use the line command: yarn dev
        - yarn add sucrase -D (This a lib for use the notation import instead of require. i.e: import { Router} from 'express')


### Installing dependencies for Nodejs - Module02

    - Inside to project folder created run the following line commands:
      - yarn add express
      - yarn add nodemon -D (the flag D is to avoid the deploy in production, whih means only for development). Note that the nodemon is used to watch the appllication and run it automatically
        - After install the nodemon, it's necessary create a script called dev, informing the main file to use it on terminal. For achieve it, inside to package.json, before dependencies add a tag called scripts as per example bellow.

            "scripts": {
              "dev": "nodemon index.js"
            }
        - Create on root folder a file called nodemon.json with the follinw content:
            {
              "execMap": {
                "js": "sucrase-node"
              }
            }
         - For start the escript, on terminal use the line command: yarn dev

      - yarn add sucrase -D (This a lib for use the notation import instead of require. i.e: import { Router} from 'express')   
      - yarn add eslint -D (verify the code linting, it means if the code is following the patterns)
        - For initialize the eslint run the line command:
            - yarn eslint --init to start the configuration by choosen the following option
              - First screen, choose: to check syntax, find problems and enforce code style
              - Second screen, choose: JavaScript modules (import/export) if the sucrase is installed or CommonJS (require,exports), if not
              - Third screen, choose None of these
              - Forth screen, unmark Browser (press tab space) and choose Node (press tabe space)
              - Fifth screen, choose: Use a popular style guide
              - Seventh screen, choose: Airbnb
              - Eighth screen, choose: JavaScript
              - Ninth screen, inform Yes to install Airbnb plugins and dependencies
              - Once process finish, once you are using yar,  delete from root folder the file package-lock.json and run the command yarn to add the configuration on yarn.lock file
              - On VSCODE install the VS Code ESLint extension, then add on seetings.json file the lines bellow:

                "eslint.autoFixOnSave": true,
                "eslint.validate": [
                  {
                    "language": "javascript",
                    "autoFix": true
                  },
                  {
                    "language": "javascriptreact",
                    "autoFix": true
                  },
                  {
                    "language": "typescript",
                    "autoFix": true
                  },
                  {
                    "language": "typescriptreact",
                    "autoFix": true
                  }
                ],
              - Open the .eslintrc.js file, which is on root folder and set the rules section as per bellow

                  rules: {
                    "prettier/prettier": "error",
                    "class-methods-use-this": "off",
                    "no-param-reassign": "off",
                    "camelcase": "off",
                    "no-unused-vars": ["error", {"argsIgnorePattern": "next"}]
                  },
              - In order to avoid conflicts between eslint rules and prettier rules (for example change single quote (') to double quote (") when saving a file, create a file called .prettierrc.js adding the following rules

                  {
                    "singleQuote": true,
                    "trailingComma": "es5"
                  }
            - For set automatic fix using eslint run the command:
              yarn eslint --fix src --ext .js


      - yarn add prettier eslint-config-prettier eslint-plugin-prettier -D. After install the prettier, open the .eslintrc.js file and add to extends propert as second parameter the prettier and also create a property called plugins adding the prettier as well. i.e:

          extends: [
            'airbnb-base',
            'prettier'
          ],
          plugins: ['prettier'],       

              
      -  Install on VSCODE the plugin called editorconfig to assure a basic pattern among all developers. After the installion, click on root tree, in a blank space, click with right button and choose Generate .editorconfig and assure that the content is exacly equal to it:

        root = true

        [*]
        indent_style = space
        indent_size = 2
        charset = utf-8
        trim_trailing_whitespace = true
        insert_final_newline = true

      - yarn add sequelize (documentation in https://sequelize.org/master/manual/)
      - yarn add sequelize-cli -D
      - yarn add pg pg-hstore (dependencies for postgres work with sequelize)
      - On root tree create a file called .sequelizerc with the following content

        const { resolve } = require('path');

        module.exports = {
          'config': resolve(__dirname, 'src', 'config', 'database.js'),
          'models-path': resolve(__dirname, 'src', 'app', 'models'),
          'migrations-path': resolve(__dirname, 'src', 'database', 'migrations'),
          'seeders-path': resolve(__dirname, 'src', 'database', 'seeds'),
        }
      - yarn add bcryptjs (for create password hashs)
      - yarn add jsonwebtoken (for session controlller)
        - On the SessionController.js, after user/password validation, will be necessary return a token as well using the jsonwebtokem, once we are working with API. This action will be done on attribute called token (see it bellow). However, there is a second argument on this attribute which correspond to a security encrypt description to be used, which will be the token properly. This description would be created by website https://www.md5online.org/ just informing any description (i.e: gobarberrocketseatnode2) on field "Enter a word here to get its MD5 hash :" and clicking on encrypt button

          return res.json({
            user: {
              id,
              name,
              email,
            },
            token: jwt.sign({ id }, ''),
          });
      - yarn add yup (for validation)


### Installing dependencies for Nodejs - Module03

  - yarn add multer (upload files multi part form data - another approach once json does not support it)

  - Create the migrations
    - files table:
      - yarn sequelize migration:create --name=create-files
    - Add new new field on users table
      yarn sequelize migration:create --name=add-avatar-field-to-users
    - appointments table:
      - yarn sequelize migration:create --name=create-appointments
    - For which migration created and updated accordingly, run the command bellow to create the table: 
      - yarn sequelize db:migrate

  - yarn add date-fns@next (for manipulate dates)
  - yarn add mongoose
  - yarn add nodemailer
    - Options for email service:
      - Amazon SES
      - Mailgun
      - Sparkpost
      - Mandril (use the lib Mailchimp)
      GMail (does not recommened once have limit of service)
      - Mailtrap (Dev environment - this one we will use for this application)
    - Setting mailtrap (https://mailtrap.io/)
      - Create an account (use free option for an unique Inbox)
      - Log in the Mailtrap and create an Inbox called GoBarber then access the inbox created for get the credencials which must be used on mail.js fields: host, port, user and pass.
        - For facilitate you may choose the Integration nodemailer and then copy content from host to pass (including last })
        - After copy it to mail.js, do not forget to add after filer port the field
          - secure: false,
    - For email templates friendly we'll use the handlebars (https://handlebarsjs.com/), For achieve that its need add libs bellow:
      - yarn add express-handlebars nodemailer-express-handlebars
    - With redis docker installed, install the queue tool called bee-queue (https://github.com/bee-queue/bee-queue). Another option would be the key (https://github.com/Automattic/kue), which have less performance but is used when is needed more robustenss (i.e: For control priorities in jobs)
      - yarn add bee-queue
    - yarn add express-async-errors. Note that this is a dependency due to Sentry. For more details, check section Error Monitoring (Module 03)
    - yarn add youch. This lib handler the error message to show it friendly to developer
    - yarn add dotenv. This lib is necessary for environment variables be able on application by .env file created on root folder

   
### Sequelize commands

    - For create the migration file:

      yarn sequelize migration:create --name=<migration-name>
      i.e: yarn sequelize migration:create --name=create-users

    - For run the migration:

      yarn sequelize db:migrate

    - For undo the last migration or even all last migration create:

      yarn sequelize db:migrate:undo (this one undo the last migration)
      yarn sequelize db:migrate:undo:all (this one undo all migrations)

    - Once have the Model created, do not forget to import it on database/index.js,
      adding it also on models arrays


### Debbuging on VSCODE

    - First stop the nodemon
    - On VSCODE, click on forth button (with bug image)
    - Then click on open launch icon to create the launch.json file with the setup
    - Add the .vscode folder on .gitignore file
    - So, the IDE is ready for debugging process


### Installing Docker - Linux Mint

    - For Linux Minut- Follows the steps on url: https://computingforgeeks.com/install-docker-and-docker-compose-on-linux-mint-19/
    - After installing setup docker to does not user sudo. That might be achieved by
    follow the steps on url: https://docs.docker.com/install/linux/linux-postinstall/


### Docker - Creating the container for last version of Postgresl

    - From url https://hub.docker.com/_/postgres, use the command line bellow:
      - docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres i.e:
      docker run --name database -e POSTGRES_PASSWORD=docket -p 5432:5432 -d postgres

      Note that a in the end a code/key must be showed. Something like that:

      Digest: sha256:f766d03bb49c7dd16fe32c1eb2645d13cb315adc029557cd1e4a0a9c094933d5
      Status: Downloaded newer image for postgres:latest
      5bb3fea0e42f2bac3828f8963bec2104888f8176e9ecf214d0aeff311464b4df

    - For verify the the new container is running, run line command: docker ps
    - For verify all the container in the machine, including the closed ones run line command:
       docker ps -a
    - For verify if the database is running fine on postgresql container, install the interface Postbird
    from url https://electronjs.org/apps/postbird
    - After open the Postgres with Postbird, create a database called gobarber
    - For stop a container run the command: docker stop <container name>
    - For start a container, run the command: docker start <container name>
    - For check errors in container run the command docker logs <container name>


### Docker - Creating the container for MongoDb (module 3)

  - docker run --name mongobarber -p 27017:27017 -d -t mongo
  - For verify if the mongo is running open the url http://localhost:27017/ . Its expected the following message: 
    - It looks like you are trying to access MongoDB over HTTP on the native driver port.
  - For access the database a good option would be the MongoDB Compass Community (https://www.mongodb.com/download-center/compass)


### Docker - Creating the container for Redis (module 3)

    - docker run --name redisbarber -p 6379:6379 -d -t redis:alpine
    - For run the queue separetelly create on package.json a script called queue as per bellow:
      - "queue": "nodemon src/queue.js"


### Error Monitoring (Module 03)

  - Create an account on Sentry (https://sentry.io/welcome/)
  - Create a project called GoBarber
  - Install the Sentry following the instruction:
    - yarn add @sentry/node@5.6.2
  - Setup the sentry as per instructions:
    - Create a sentry config as config/sentry.js then:
      - Add the dsn on the file: 
        dsn: 'https://788377438cee486a91ce8900b01ea4f4@sentry.io/1551591' 
    - Add the line command bellow inside to middlewares method (src/app.js), changing the app.use to this.server.use
      - app.use(Sentry.Handlers.requestHandler()); which should be
      - this.server.use(Sentry.Handlers.requestHandler());
    - Add the line command below inside to routes method(src/app.js), after routes, changing the app.use to this.server.use
      - app.use(Sentry.Handlers.errorHandler()); which should be
      - this.server.use(Sentry.Handlers.errorHandler());
  - On Controllers, when occur errors, by using async the Expres cannot be able to catch it (on this case not sending to Sentry). For that reason its necessary install the lib bellow to mitigate this gap 
    - yarn add express-async-errors. Note that after install it, its necessary just import the lib on src/app.js as per bellow, but it should be before the routes import to integrate the routes with async errors
      - import 'express-async-errors'; 


### React - Module 04 - Concepts

    React - That is the library which is used for both ReactJS and React Native
    ReactJS - When the react in combination with another libray from DOM, that means ReactJS
    React Native - That is the sum of React + Native elements


### React - Module 04 - Structure Configuration

    - For create a new project

      1) Create a folder (i.e: mkdir modulo04)
      2) Inside to folder created run the command
      
          - yarn init -y.
          
          Basically this command will create the package.json file

      3) Install the dependencies libraries as per bellow

          - yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli -D

          Note that all these libraries must be installed as development dependencies. For that reason the attribute -D should be used in the end of line command.

          - yarn add react react-dom

          - yarn add babel-loader -D

          - yarn add webpack-dev-server -D


    - Babel Configuration

      With the dependencies libraries installed (step 2 above)

        Inside to root folder of project create a file called babel.config.js and proceed with the following line codes

          module.exports = {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
          };

          The library "@babel/preset-env" is responsible for change the functionalities of JaScript which the browser still does not understand, like to:

            1) import/export
            2) arrow functions
            3) classes

          The library "@babel/preset-react" basically will transform the react functionalities which the browser does not understand, like to:

            1) JSX
            2) React specific functionalities


    - Webpack Configuration

      With the dependencies libraries installed (step 2 above)

        Inside to root folder of project
        
          1) Create a file called webpack.config.js and proceed with the following line codes 

              const path = require('path');

              module.exports = {
                entry: path.resolve(__dirname, 'src', 'index.js'),
                output: {
                  path: path.resolve(__dirname, 'public'),
                  filename: 'bundle.js'
                },
                module: {
                  rules: [
                    {
                      test: /\.js$/,
                      exclude: /node_modules/,
                      use: {
                        loader: 'babel-loader'
                      }
                    }
                  ]
                }
              };

              - The entry property is basically the entry file for application
              - The output property is where the bundle file will be created. It means the JS code transpiled by Webpack
              - The module property is responsible to manage the rules(loaders) which webpack will utilize during transpiation. For example for JavaScript, the Webpack should utilize the Babel as loader during transpilation.

              There are some notes:

                1) Webpack runs under Node
                2) The reason for utilize the Node library path its because in Windows OS the usually notation (see bellow) using backslash(/) will not be recognized.
                3) __dirname it current directory where webpack.config.js is stored.


          2) Create a folder called src, which must store all JS code, and inside to src folder created a file called index.js. Basically the index.js will be the starting point of application, it means that everything wll be came from this file

          3) Inside to root folder, create a folder called public, where the webpack will store the bundle file transpiled 


      - Application building

        In order to Webpack build the appication, it means proceed with the transpilation of JS generating the bundle.js inside to public folder, its necessary create a script inside to package.json file, properts scripts. For achieve that proceed as per bellow

          1) Open the package.json and after line "license": "MIT", and before "devDependencies": { add the line code bellow to create the script called build

            "scripts": {
              "build": "webpack --mode production"
            },

            The option --mode development will create a legible bundle.js, meaning that the developer might check what was done more clearly. However, the file is created more "heavy".

            Now, by using the option --mode production, it will be created a bundle.js minified. It means that all code will be in an single line, so to dificult the undertanding. That approach is used to deploy appliation in production once also create a soft file with a small size.


          2) For run the script build created, goes to terminal and run on appllication root folder the line command bellow

            yarn build

        In order to test if the appliation transpiled is working, we might create under public folder a file called inde.html adding the line commands bellow and then oppening it in the browser

              <!DOCTYPE html>
              <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <meta http-equiv="X-UA-Compatible" content="ie=edge">
                  <title>ReactJS</title>
                </head>
                <body>
                  <h1>Hello World</h1>

                  <script src="./bundle.js"></script>
                </body>
              </html>


      - Automatic rebuilding/reloading

        With libray dependency webpack-dev-server installed (see above step 3 from - For create a new project topic), inside to webpack.config.js, before module property,  create a new one called devServer as per bellow             

           devServer: {
              contentBase: path.resolve(__dirname, 'public'),
           },


        Then inside to package.json, after current script build, add a new one called dev as per bellow

          "dev": "webpack-dev-mode --mode development"


        For run the script dev created, goes to terminal and run on appllication root folder the line command bellow

            yarn dev


        Observe that after conclude the transpilation, in the beginning of screen will have a line like that:

        ℹ ｢wds｣: Project is running at http://localhost:8080/

        From now one open the application using the url provided that that every time a change has been done in the index.js, will not be necessary rebuild the application and reload it on browser, once it will be done automatically.


### React - Module 04 - Creating root component


    In order to work with react its necessary import the libray react. However, for when is also handling with browser its necessary import functions from react-dom. Basically the root library to be imported should be something like that:

    import React from 'react';
    import { render } from 'react-dom';

    - The function render is responsible for render a react code or react componenet inside to a content in the HTML

    - HTMLs, in order to understand react codes/components should have it called inside it content. The way how that is done is creating a DIV tag on HTML which will represent and receive the component created. For instance:
    
      1) On index.html replace the H1 tag for the one bellow.

        <div id="app"></div>

      2) On index.js, after import the libraries react and react-dom, add the render function. That should be something like that

        import React from 'react';
        import { render } from 'react-dom';

        render(<h1>Hello World</h1>, document.getElementById('app'));

        Note that by viewing the source of HTML generated, the tag DIV will be there, but not the h1. That
        occur because the React render it content only after the browser render the HTML. In order to check the react content which React generated you might inspect the browser.
    
    - In order to work with a component separetelly, using the same approach index.html and index.js, proceed as per bellow:
    
    
      1) Inside to src folder, create another file called App.js with the following content:


        import React from 'react';

        function App() {
          return <h1>Hello Rocketseat</h1>
        }

        export default App;

        Note that in every code which will be used JSX sintaxe its necessary import react.

      2) On index.js import the App.js


        import App from './App';


        Note that the ./ is used because its being used a local file insted of library inside to node_modules

      3) Replace the JSX <h1> inside to render function by a call of App. However, note that it should be called like to a tag.

        render(<App />, document.getElementById('app'));


### React - Module 04 - Importing CSS


    In order to react work with CSS proceed with steps bellow


      1) Install libraries as development dependency

        yarn add style-loader css-loader -D

      2) On webpack.config.js, create another rule as per bellow

        , {
           test: /\.css$/,
            use: [
              { loader: 'style-loader' },
              { loder: 'css-loader'},
            ]
        }

        - style-loader is used to react can import CSS files. It means that on the moment when the application is mounted it transfer the CSS content to inside to main HTML in a tag style.

        - css-loader is used because inside to CSS file might exists other types of imports, including another files. The way how webpack understand it is using the css-loader. For example the file Menu.css:

        import Base from './Base.css';
        
        body {
          background: url('/images/teste.png');
        }
        

      3) For test the configuration, create inside to src folder a file called App.css and add the following styles

          body {
            background: #7159c1;
            color: #fff;
            font-family: Arial, Helvetica, sans-serif;
          }

      Then import the file App.css inside to App.js as per bellow. So, when restarting the application (using the yarn dev), it should be working as expected with background color purple and a font sans-serif.

      import './App.css';


### React - Module 04 - Importing Images


    In order to react work with Images proceed with steps bellow


      1) Install libraries as development dependency

        yarn add file-loader -D

      2) On webpack.config.js, create another rule as per bellow

        , {
          test: /.*\.(gif|png|jpe?g)$/i,
            use: {
              loader: 'file-loader'
            }
        }

        Some explanation about regular expression

        1) // means that the regular expression must be inside it
        2) .* means all files
        3) \. means the dot before extension
        4) (gif|png|jpe?g) means the list of extensions allowed
        5) The ? after jpe and before letter g means that some files might have the extension jpg
        6) The letter i after / means that regular expression will ignore case sensitive.


      3) Create inside to src folder a folder called assets. For tests store any image over folder created.

      5) On the App.js import the image stored. Note that its necessary give a name for image being imported. The result should be something like that:

        import profile from './assets/profile.jpg';

      6) So, still on the App.js replace the h1 tag for img tag as per bellow

        Note that everytime which is being used a variable inside to HTML tag its necessary add it among brakts {}


### React - Module 04 - Class Components


    There are severas ways to write a component inside to React. the singley way is by using function format. However, the most common way is by using classes. The basic sintax is this one:

      import React, { Component } from 'react';

      class <class name> extends Component {

        state = {}; // Here are stored all information which may be manipulated by component. It means
                    // may receives new items, mutations, etc.

        render() {
          return (
            <return something>
          );
        }
      }

      export default <class name>;


      - Why to use classes instead of functions as components?

        So, until recently was not possible store information/states in React functions, meaning variables which the component will utilize to manipulate (i.e: HTML tags). Basically when a variable needs to be manipulated its called state. In the classes is possible store these states as a class property. Another important thing about classe is that will allow the user understand how React treat life cycle of components.

      - By using the state = {} without a constructor, the Babel cannot identify it In order to solve this gap its necessary install a Babel plugin as per bellow

        yarn add @babel/plugin-proposal-class-properties -D

        Then change the babel.config.js adding the plugin configuration. In the end the file should have the following configuration.

          module.exports = {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties'
            ]
          };


  
