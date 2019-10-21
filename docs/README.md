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


          2) Create a folder called src, which must store all JS code, and inside to src folder create a file called index.js. Basically the index.js will be the starting point of application, it means that everything wll be came from this file. For instance, this might be the initial content of index.js

            // Initial example just to test the Babel transpilation
            const soma = (a, b) => a + b;
            alert(soma(1, 4));


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

        In order to test if the appliation transpiled is working, we might create under public folder a file called index.html adding the line commands bellow and then oppening it in the browser

              <!DOCTYPE html>
              <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <meta http-equiv="X-UA-Compatible" content="ie=edge">
                  <title>Desafio 04 - Facebook</title>
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

          "dev": "webpack-dev-server --mode development"


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


### React - Module 04 - State and Immutability

    In react, in order to use JavaScript iside to HTML its necessary utilize the tags {}. For instance:

      render() {
        return (
          <ul>
            {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
          </ul>
        );
      }

      Note that for when using map, interation or item list its necessary add a key attribute on list item in order to prevent errors.

      The React cannot allow to have to elements (i.e: Two HTML tags) without a container (DIV) around it. For instance:

        <div>
          <ul>
            {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
          </ul>
          <input type="text">
        </div>

      However, this approach might generate issues once in many cases the developer may need keep all elements inside to main DIV tag due to stylization (CSS). In order to avoid it might be used a React resource called fragmentation, which means to use a tag with no name. For instance:

      <>
        <ul>
          {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        <input type="text">
      </>


      The most common way to capture text typed in TEXT tags is by catching it when the user is typing. That might be achieved by adding on state a new propert will store the value which the user is typing (i.e: newTech). Then its necessary create a new method inside to class to manipulate it (i.e: handleInputChange). With new method created add a call onChange for it on INPUT tag. 


          class TechList extends Component {
            state = {
              newTech: '',
              techs: [
                'Node.js',
                'ReactJS',
                'React Native'
              ]
            }

            handleInputChange = e => {
              this.setState({ newTech: e.target.value });
            }

            render() {
              return (
                <>
                  <ul>
                    {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
                  </ul>
                  <input
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.newTech}
                  />
                </>
              );
            }
          }      



      Some considerations:

        1) When is necessary to have access to variable this, its necessary create arrow fuction instead of regular function.

        2) Due to immutability the React cannot allow to change directly value regarding to state attributes. The state variable cannot be mutated. However, there is another way for achieve it, which is by utilizing the function setState. The function setState create new state coying by default the current values applying only the new ones.

        3) Everytime the state change the render method is ran again.

        4) A good practice for when is manipulating states of INPUT tags is also to inform a value property passing the new state. It means that if the value to change for other reason, the input will also be changed.

      
      For when its necessary utilize events on HTML, the fragmentation must be replaced the <FORM> tags. 


            class TechList extends Component {
              state = {
                newTech: '',
                techs: [
                  'Node.js',
                  'ReactJS',
                  'React Native'
                ]
              }

              handleInputChange = e => {
                this.setState({ newTech: e.target.value });
              }

              handleSubmit = e => {
                e.preventDefault();
                this.setState({
                  techs: [...this.state.techs, this.state.newTech],
                  newTech: ''
                });

              }

              render() {
                return (
                  <form onSubmit={this.handleSubmit}>
                    <ul>
                      {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
                    </ul>
                    <input
                      type="text"
                      onChange={this.handleInputChange}
                      value={this.state.newTech}
                    />
                    <button type="submit">Enviar</button>
                  </form>
                );
              }
            }      



        Some considerations:

        1) The standard functionality of a FORM, when is using submit events, is to reload the screen. in order to avoid it the React provide a function called preventDefault().

        2) For when is manipulating arrays on setState function, its necessary always recreate the array. Its means that React cannot allow perform changes on array or even on the object. On this case the spread operator (...) must be used. Basically as first element of new array use the spread to add the current elements and then as second element,  add the new element of array. For instance:

          this.setState({ techs: [...this.state.techs, this.state.newTech] });


### React - Module 04 - Removing items from state


    When a function which receives a parameter is called in a INPUT type BUTTON, for instance, automatically this function is ran. In order to avoid it, might be used the approach to create a arrow function which will call the function internally. With this approach the function only will be actioned when the user to click in the button. Let's see an example:

      <button onClick={() => this.handleDelete(tech)} type="button">


    The best way to generate a new array excluding an element, when using setState, is to use the filter method. On this case, the filter pass as result to array to be recreated, only the elements which are diferents of current one passed as parameter. Let's see an example:

       this.setState({ techs: this.state.techs.filter(t => t !== tech) });


### React - Module 04 - React properties


    When there is no state utilization in a component. It means no storing will be necessary (i.e: arrays), a component might be created in a function format.


    So, one of the most important concepts of React is property. Property is everything which is passed in tags for components as parameter. For instance, on the example bellow the property called tech is passing to component TechItem the variable tech (which contain an array)

        <ul>
          {this.state.techs.map(tech => <TechItem key={tech} tech={tech} /> )}         
        </ul>

    Then on the component(function) where is expected the property, a parameter related to tech should be created among brakets {}. In the end the HTML tag li will work with this parameter without any problems, now on.
    

        function TechItem({ tech }) {
          return (
            <li>
                {tech}
                <button type="button" onClick={() => this.handleDelete(tech)}>Remover</button>
            </li>
          );
        }

        Some considerations: 
        
          Note that the function may have two ways to receives properties:

            1) By using the function props. For instance:

              { props.tech }

            2) By unstructuring. It means the argument among brackets {} on signature on function, inside to parentheses (). For instance the function signature above.

          The properties of a class components are stored inside to this.props. It means inside to a class, by using this.props any properties may be accessed.
          
          In other hands, the properties of a function component only are acessed by passing it as parameter of component.

      For action regarding to handleDelete, which must stay at class once only overther exist the arrays which the function utilize, another approach should be used for avoid issues.

        1) On HTML tag TechItem(inside to TechList.js) add a property called onDelete by using the arrow function approach,  as per bellow

            {this.state.techs.map(tech => <TechItem key={tech} tech={tech} onDelete={() => this.handleDelete(tech)} /> )}

        2) On signature of function component add the new property onDelete and then on HTML property onClick, add a call for the property onDelete. Let's a complete example:

            function TechItem({ tech, onDelete }) {
              return (
                <li>
                    {tech}
                    <button type="button" onClick={onDelete}>Remover</button>
                </li>
              );
            }

      Final considerations:

        1) When a component is created, the function created to manipulate the state needs to be stored in the same place where the state also is stored. For instance, the function handleDelete must be together to class TechList once this function works with state techs (related to technologies).

        2) On React anything may be passed as property for a component. It means: function, object, another class, another element or even another component (i.e: icon=<Icon />)


### React - Module 04 - Default Props & Proptypes

    1) Default Props
    
      In function components default properties may be passed as parameter on signature of function like to example bellow

        function TechItem({ tech = 'default value', onDelete })

      However, in React there is a global form which may be used in both cases, functions and classes components. This ways is called default props.

      Basically, only is needed modify the property defaultprops inside to component. For instance: 

        TechItem.defaultProps = {
          tech: 'Oculto',
        };
    
      On this example, for component TechITem when the property tech was not informed, it default value would 'Oculto'. it means that if we change the TechList class, adding another item manually without any property inside to UL tag, the item 'Oculto' will be created automatically.  


      This approach also might be used inside to classes. On this case before the state would be added something like that:

        static defaultProps = {
          tech: 'Oculto'
        }


    2) PropTypes


      PropTypes its a way of validate the properties which the components receive. For instance, lets say the developer pass a text as property instead of the property itself. The React needs to validate if this is correct or not and way to do it is by PropTypes.

      On this case before anything its necessary install a library called props-types

          yarn add prop-types

      With the library installed, import it on the component to be tested, which for us is the one called TechItem once this one is receiving properties.

          import PropTypes from 'prop-types';


      Now add on the code the validations to be done. For instance:

        TechItem.PropTypes = {
          tech: PropTypes.string,
          onDelete: PropTypes.func.isRequired,
        };

      From now one, if on component TechList is created another item on HTML tag ul and the property onDelete was missed, that will generated a warning on console informing that this property is required.


        Warning: Failed prop type: The prop `onDelete` is marked as required in `TechItem`, but its value is `undefined`.
        in TechItem (created by TechList)
        in TechList (created by App)
        in App

      This approach also might be used inside to classes. On this case before the state would be added something like that:

        static staticPropTypes = {
          tech: PropTypes.string,
          onDelete: PropTypes.func.isRequired,
        };

        Note that library prop-types also must be imported on the class.


### React - Module 04 - Component life cycle


    Thinking in component life cycle in React, basically it means all cycle when a componenet appear in the screen, is changed on modified (it means states or properties), then in some moment it may be removed and destroyed (for instance removing items from a list).

    We also may think about some methods which exist inside to class. The most three importants are:

      1) componentDidMount()

          This method is executed once the component appear in the screen. It means that it migth perform any change/update in JavaScript once the component is loaded in the screen. For instance, if we are using a component which need call data from an external API to manipulate it once the componenet is displayed in the screen, we must proceed with the call of this API by inside to componentDidMount.

      
      2) componentDidUpdate()

        This method always is called when occur changes in props or states. Also this method may receives the old values of props or states as parameters. It means by using the parameters: prevProps and prevState. i.e:

        componentDidUpdate(prevProps, prevState) {
          // this.props, this.state
        }

        Note that when the an argument prevProps or prevState is not being used, in the method signature we may repace the argument by underline _. Let's see an example:

        componentDidUpdate(_, prevState) {
          // this.props, this.state
        }
        
        In case of occur changes, as usual:
        
        a) On props, we may access the new value through of this.props.
        b) On states, we may access the new value through of this.state.


        For compare old and new values, we may compare the new values (this.props or this.state) with old values (prevProps and PreState)

      
      3) componentWillUnmount()

        This method is executed when the component no longer exists. This component will be used to clear any garbage which stayed due to components. For instance, let's say our application utilize an event listener on JavaScript. So, the event listener is something which stay listenning the user event forever (i.e: mouse action) and it does not is destroyed when the componenet no longer exists. On this case, the componentWillUnamount will clear this garbage related to event listener, destroying it.


    In order to understand better the utilization of these three methods we'll proceed store the list of technologies in the browser local storage. For achieve that proceed with following instructions:

      In the TechListjs:

        1) Initialize the state of techs array as an empty array

          techs: []

        2) Create the method componentDidUpdate by suppressing the utlization of prevProps argument (on this case replacing the argument by _ ). Inside this component we'll store technologies in to browser local storage.

          componentDidUpdate(_, prevState) {
            if (prevState.techs !== this.state.techs) {
              localStorage.setItem('techs', JSON.stringify(this.state.techs));
            }
          }

          Note that the local storage does not accept arrays, for that reason the data being stored must be changed to a JSON file.

        3) Create the method componentDidMount to load the storage created on step 2, once the component initialize.


          Note that as the data was stored in JSON format, its necessary perform a parse to transform it in array again.


### React - Module 04 - Debbuging React with DevTools


  There is an extension of Google Chrome which is called React DevTools. By installing it, everytime when the browse is showing an application/webpage in React the React logo will be on (that on top of browse - right side).

  So, with extension installed, by inspecting the browser elements, clicking on React or Components tab its allowing  inspect the elements of each component to debbug the application.


### React - Module 05 - Initial Setup (Basic)

  
  1) For create a new app without using babel/webpack configuration we may use the line command bellow

      yarn create react-app <project name>
      i.e: yarn create react-app modulo05

  2) The option eject, section scripts,  on package.json created is used for setup manually webpack/babel case necessary. The other options are self understandable

  3) On the same package.json its necessary delete the current eslintConfig section once it will be configurated from begging.

  4) For start the application, on application root folder run yarn start. The application will start on 3000 port. For instance:

     http://localhost:3000

  5) On index.html, inside to public folder:

      a) Clean up the comments
      b) Delete the manifest link, once it is exclusivelly for PDA (Progressive Web Apps) creation. Also delete the manifest.json which is on public folder root.

  6) On src folder

    a) Delete the files

        - App.css
        - App.text.js
        - index.css
        - logo.svg
        - serviceWorker.js (which is exclusive for PDA)

    b) On index.js, remove:

        - The comments and the line serviceWorker.unregister();
        - The serviceWorker import line
        - The css import line

    b) On App.js: 

        - Remove the logo import line
        - Remove the css import line 
        - Inside to main DIV (className="App"), replace it content for a <h1>Hello World</h1>
              

### React - Module 05 - Setup ESLint, Prettier & EditorConfig              

  
  1) EditorConfig
  
    a) On root folder, click with right mouse button in a blank space and then choose Generate .editorconfig

    b) Change to true value the lines trim_trailing_whitespace = false and insert_final_newline = false

    c) In order to force to use Unix standard, add the line bellow before the current one indent_style

      end_of_line = lf


  2) ESLint

    a) Add it as a development dependency as per bellow

      yarn add eslint -D

    b) After add edslint library, initialize it by runnin the command yarn eslint --init, then proceed with configuration as per bellow:

      - On first screen, choose the "to check syntax, find problems, and enforce code style" option
      - On second screen, choose the "JavaScript Modules (import/export)" option
      - On third screen, choose "React" option
      - On forth screen, for question "Does your project use TypeScript", choose N
      - On fifth screen, choose "Browser" option
      - On sexth screen, choose "Use a popular style guide" option
      - On seventh screen, choose "Airbnb" option
      - On eighth screen, choose "JavaScript" option
      - From now on, choose Yes for questions

    c) After conclude the configuration

      - As the configuration is done using npm, remove the package-lock.json file and then run on root folder the command yarn to update the dependencies inside to yarn.lock

    d) Edit the .eslintrc.js and proceed with the following changes

      - On extends section, add 'prettier' and 'prettier/react'
      - Before parserOptions section, add a new section as per bellow:

          parser: 'babel-eslint',

      - On plugins section, add 'prettier'

      - On rules section, add the following rules:

        i - 'prettier/prettier': 'error',
        ii - 'react/jsx-filename-extension': [
                'warn',
                { extensions: ['.jsx','.js'] }
              ],
        iii - 'import/prefer-default-export': 'off',
        iv - 'react/state-in-constructor': [0, "always"],
        v - 'no-param-reassign': 'off',
        vi - 'no-console': ["error", { allow: ["tron"] }],


  3) Prettier

    a) Add it as a development dependency as per bellow

      yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

    b) On root folder, create a file called .prettierrc and proceed with the following configurations:

      {
        "singleQuote": true,
        "trailingComma": "es5"
      }


### React - Module 05 - Routes on React


  1) Add the library react-router-dom as per bellow

    yarn add react-router-dom

  2) Inside to src folder
  
    a) Create a file called routes.js
    b) Create a folder called pages and inside to pages folder:

      i  - Create a folder called Main and inside to it a file called index.js
      ii - Create a folder called Repository and inside to it a file called index.js

    Tip: For create more fast the components we might use the Rocketseat snnipts (i.e: rfc)
 
  3) Some considerations

    a) On routes.js file should have the following imports

      import React from 'react';
      import { BrowserRouter, Switch, Route } from 'react-router-dom';

      Tip: The React is used for everytime we are working with JSX in the files

    b) For each route, the corresponding file also should be imported. For instance:

      import Main from './pages/Main';
      import Repository from './pages/Repository'; 

    c) The file should have a default export with same name of file. For instance:

      export default function Routes() {
        return (
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/repository" component={Repository} />
            </Switch>
          </BrowserRouter>
        );
      }

    d) The routes should be embedded by BrowserRouter and Switch tags.

    e) The Switch tags is used to guarantee that only a single route is run per time.

    f) The Route tag represent a page from application, Note that when use need that the route call exacly a route, for instance a main which uses only the "/" as route name, should be added on the Route tag the property "exact"

    g) After define the routes, the routes.js must be imported inside to App.js (the main application component), then the return should have only the tag <Routes />. For instance:

      import React from 'react';

      import Routes from './routes';

      function App() {
        return <Routes />;
      }

      export default App;


### React - Module 05 - Styled Components

  1) Add the library styled-components. This libray change the way how the CSS is written in React and React Native

    yarn add styled-components

  2) Assure to have installed on VSCode the extension vscode-styled-components

  3) Example using the Main page

    a) On main root folder, create a file called styles.js

      i - Import the styled component as per bellow

        import styled from 'styled-components';

      ii - create a style for h1 tag as per bellow

        export const Title = styled.h1`
          font-size: 24px;
          color: #7159c1;
          font-family: Arial, Helvetica, sans-serif;
        `;

    b) On index.js

        i - Import the styles.css created as per bellow

          import { Title } from './styles';

        ii - Replace the tag h1 by Title as per bellow

          export default function Main() {
            return <Title>Main</Title>;
          }


  3) Some considerations

    a) Unless the developer setup it, all CSS done for a component will not be shared to other components.

    b) The styles configuration is done for each tag
    
      i -  By using:  export const <Tag Name> = styled.<html tag>. For instance: 
      
          export const Title = styled.h1`
              font-size: 24px;
              color: #7159c1;
              font-family: Arial, Helvetica, sans-serif;
            `;

      ii - The content of css must be among apostrophes ``

    c) It`s not necessary create new tags to perfom styles inside to current one. For instance: lets say we need add a tag small inside to Title one defined on item ii above. On this case we use the functionality styles chaining, which means add the tag small on index.js and then change the tag Title on styles.js to also contemplate the small configuration. In the end we would have something like that:

      i - index.js

        export default function Main() {
          return (
            <Title>
              Main
              <small> small</small>
            </Title>
          );
        }

      ii - styles.css

        export const Title = styled.h1`
          font-size: 24px;
          color: #7159c1;
          font-family: Arial, Helvetica, sans-serif;

          small {
            font-size: 14px;
            color: #333;
          }
        `;

    d) We may access properties from tags created in components. For instance: lets say that the Tag Title is associated to a certain application form and then when occur an error in the form we would like that the Title tag change to red color.
    On this scenario we may:
    
      i  - On index.js pass an error property on Title tag

        export default function Main() {
          return (
            <Title error>
              Main
              <small> small</small>
            </Title>
          );
        }

      ii - On styles.js, color configuration we may add a decision to change the color to red when the property error is true

        import styled from 'styled-components';

        export const Title = styled.h1`
          font-size: 24px;
          color: ${props => (props.error ? 'red' : '#7159c1')};
          font-family: Arial, Helvetica, sans-serif;

          small {
            font-size: 14px;
            color: #333;
          }
        `;


### React - Module 05 - Global Styles

  The reason for using Global Styles is because all Css defined as Global Styles will be shared for all application. For achieve that proceed with the following configurations

  1) On src folder
  
    a) Create a folder called styles
    b) Inside to folder created, create a file called global.js


  2) Inside to global.js created

    a) import from style-component the propert createGlobalStyle, as per bellow

      import { createGlobalStyle } from 'styled-components';

    b) Export by default the createGlobalStyle among apostrophes ``, then add the CSS configuration.

      export default createGlobalStyle`
        * {
          margin: 0;
          padding: 0;
          outline: 0;
          box-sizing: border-box;
        }

        html, body, #root {
          min-height: 100%;
        }

        body {
          background: #7159c1;
          -webkit-font-smoothing: antialiased !important;
        }

        body, input, butoon {
          color: #222;
          font-size: 14px;
          font-family: Arial, Helvetica, sans-serif;
        }

        button {
          cursor: pointer;
        }
      `;

  3) On App.js (main file)
  
    a) Import the global style created

      import GlobalStyle from './styles/global';

    b) Add the import on return of App function as a React fragment (<></>)

      function App() {
        return (
          <>
            <Routes />
            <GlobalStyle />
          </>
        );
      }


### React - Module 05 - Styles on main page


  1) Add the library react-icons

    yarn add react-icons


  2) Once have the item 1 installed, on src/Main/index.js

    a) import the FaGitAlt from react-icons/fa (fa - means fonts awesome)

      import { FaGithubAlt, FaPlus } from 'react-icons/fa';

    b) Add a styled component called Container around h1 tag

      <Container>
        <h1>
          Repositórios
        </h1>
      </Container>

    c) Add the FaGithubAlt as tag inside to h1 tag 

      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>
      </Container>

    d) Add a new tag styled component called Form

      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={() => {}}>
          <input type="text" placeholder="Adicionar repositório" />
        </Form>
      </Container>

    e) Inside to styled component Form,  add a new one called SubmitButton with disabled property. The reason for created a new component is because once using button, to manipulate properties/attributes will not be possible to be accessed.

      i - Also import the component FaPlus

          import { FaGithubAlt, FaPlus } from 'react-icons/fa';

      ii - Add the FaPlus inside to SubmitButton Component

            <Container>
              <h1>
                <FaGithubAlt />
                Repositórios
              </h1>

              <Form onSubmit={() => {}}>
                <input type="text" placeholder="Adicionar repositório" />

                <SubmitButton disabled>
                  <FaPlus color="#fff" size={14} />
                </SubmitButton>
              </Form>
            </Container>



  3) Some considerations      

   a) When the component have more than two levels of chaining, its better create a new style component.

   b) In order to manipulate attributes of a styled component, uses the property attrs. For instance: lets say that we need define a button as submit, using the attrs on css we would have it as per bellow

    export const SubmitButton = styled.button.attrs({
      type: 'submit',
    })`
      background: #7159c1;
      border: 0;
      padding: 0 15px;
      margin-left: 10px;
      border-radius: 4px;

      display: flex;
      justify-content: center;
      align-items: center;
    `;


### React - Module 05 - Adding repositories

  1) Add axios library (to use API Rest in React)

    yarn add axios

  2) Inside to src

    a) Create a folder called services
    
    b) Inside to folder, create a file called api.js with the following content:

        import axios from 'axios';

        const api = axios.create({
          baseURL: 'https://api.github.com',
        });

        export default api;

    c) On Main route import the api.js

        import api from '../../services/api';        
  
  2) On Main route, in order to have state in the componenent Main its necessary import  a class component, which in this case is the: component

    a) import React, { Component } from 'react';

    b) replace the current export default function for class components

        from: export default function Main()
        to: export default class Main extends Component

    c) all return should be added inside to render method

  3) Working to loading, on Main route

    a) Import from react-icons/fa the component FaSpinner

      import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

    b) Add a conditional rendering as conditional ternary on SubmitButton as per bellow

      <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#fff" size={14} />
          ) : (
            <FaPlus color="#fff" size={14} />
          )}
        </SubmitButton>

    b) In order to have the FaSpinner icon animated, on styles.js proceed as per bellow

      i - Import from styled-components twot properties: keyframes and css

        import styled, { keyframes, css} from 'styled-components';

      ii - Before current css SubmitButton, add the css animated as per bellow

        const rotate = keyframes`
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        `;

      iii - Change the current SubmitButton to contemplate a props disabled(based on loading props from index.js ) and a props loading, as per bellow

        export const SubmitButton = styled.button.attrs(props => ({
          type: 'submit',
          disabled: props.loading,
        }))`
          background: #7159c1;
          border: 0;
          padding: 0 15px;
          margin-left: 10px;
          border-radius: 4px;

          display: flex;
          justify-content: center;
          align-items: center;

          &[disabled] {
            cursor: not-allowed;
            opacity: 0.6;
          }

          ${props =>
            props.loading &&
            css`
              svg {
                animation: ${rotate} 2s linear infinite;
              }
            `}
        `;


### React - Module 05 - Listing repositories

  1) On Main route

    a) Inside to class, add a new state called repositories
       state = {
        newRepo: '',
        repositories: [],
        loading: false,
      };

    b) Inside to render, add the repositories on const

      const { newRepo, repositories, loading } = this.state;
    
    c) Create a new component tag called List to interate the repositories

        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <a href="">Detalhes</a>
            </li>
          ))}
        </List>

  2) On styles.js

    a) Create the styled component List as per bellow

        export const List = styled.ul`
          list-style: none;
          margin-top: 30px;

          li {
            padding: 15px 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            & + li {
              border-top: 1px solid #eee;
            }

            a {
              color: #7159c1;
              text-decoration: none;
            }
          }
        `;


### React - Module 05 - Using LocalStorage


  1) On Main route

    a) Create the method componentDidMount to load LocalStorage data

      componentDidMount() {
        const repositories = localStorage.getItem('repositories');

        if (repositories) {
          this.setState({ repositories: JSON.parse(repositories) });
        }
      }

    b) Create the method componentDidUpdate to save the LocalStorage data

      componentDidUpdate(_, prevState) {
        const { repositories } = this.state;

        if (prevState.repositories !== repositories) {
          localStorage.setItem('repositories', JSON.stringify(repositories));
        }
      }

### React - Module 05 - Routes Navigation


  1) On Main route

    a) Import the component Link from react-router-dom

      import { Link } from 'react-router-dom';

    b) Replace the current <a href="">Detalhes</a> by: 

      <Link to={`/repository/${encodeURIComponent(repository.name)}`}>

  
  2) On routes.js

    a) On path of repository Route, add a parameter to identify the repository being called

      <Route path="/repository/:repository" component={Repository} />

    b) In order to test it, it means showing the parameter value from url,  on Repository Route (index.js):

      i - Add a props called match as per bellow

      export default function Repository({ match }) {
        return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>;
      }


### React - Module 05 - Loading API data


  1) Transform the Repository Route in a class as per bellow


    import React, { Component } from 'react';
    import api from '../../services/api';

    export default class Repository extends Component {
      state = {
        repository: {},
        issues: [],
        loading: true,
      };

      async componentDidMount() {
        const { match } = this.props;

        const repoName = decodeURIComponent(match.params.repository);

        const [repository, issues] = await Promise.all([
          api.get(`/repos/${repoName}`),
          api.get(`/repos/${repoName}/issues`, {
            params: {
              state: 'open',
              per_page: 5,
            },
          }),
        ]);

        this.setState({
          repository: repository.data,
          issues: issues.data,
          loading: false,
        });
      }

      render() {
        const { repository, issues, loading } = this.state;
        return <h1>Repository</h1>;
      }
    }


### React - Module 05 - Defining PropTypes

  In order to validate the props its used the prop-types libray.

  1) Add the libray prop-types

    yarn add prop-types

  2) On Repository Router import the prop-types

    import PropTypes from 'prop-types';

  3) Add on class the ProTypes as static

    static staticpropTypes = {
      match: PropTypes.shape({
        params: PropTypes.shape({
          repository: PropTypes.string,
        }),
      }).isRequired,
    };

### React - Module 05 - Showing repositories

  1) Create on Repository folder a file styles.js

    Tip: The snnipet styled-react create automatically a styled structure

  2) Inside to styles.js create the styled component as per bellow

    export const Loading = styled.div`
      color: #fff;
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    `;

  3) Also inside to same styles.js, create the styled component Owner as per bellow

    export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
      color: #7159c1;
      font-size: 16px;
      text-decoration: none;
    }

    img {
      width: 120px;
      border-radius: 50%;
      margin-top: 20px;
    }

    h1 {
      font-size: 24px;
      margin-top: 10px;
    }

    p {
      margin-top: 5px;
      font-size: 14px;
      color: #666;
      line-height: 1.4;
      text-align: center;
      max-width: 400px;
    }
  `;

  4) On src folder

    a) Create a folder called components

    b) Create inside to components a folder called Container

    c) Create inside to Container a file called index.js

    d) From Main Router styled component cut the Container component and add it to new file about step c, as per bellow

      import styled from 'styled-components';

      export const Loading = styled.div`
        color: #fff;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      `;

      export default Container;

    e) Import the new styles component on Main and Repository Router

      import Container from '../../components/Container';


  5) On Repository Router
  
    a) Import the Link from react-router-dom, in order to be used as <a href>

      import { Link } from 'react-router-dom';

    b) Import the the styles.js with Loading styled component

      import { Loading } from './styles';

    c) Inside to render, create a decision (if) to return the Loading component

      if (loading) {
        return <Loading>Carregando</Loading>;
      }

    d) Replace the current h1 tag by the styled Container, as per bellow

      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
      </Container>


### React - Module 05 - Showing issues

  1) On Repository Router

    a) Add the component IssueList on styles.js import

      import { Loading, Owner, IssueList } from './styles';

    b) Create a new tag styled Component called IssuesList as per bellow

      <IssueList>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url} target="_blank">
                    {issue.title}
                  </a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>

  2) On styles.js

    a) Create the styled component IssueList as per bellow

      export const IssueList = styled.ul`
      padding-top: 30px;
      margin-top: 30px;
      border-top: 1px solid #eee;
      list-style: none;

      li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;

        & + li {
          margin-top: 10px;
        }

        img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 2px solid #eee;
        }

        div {
          flex: 1;
          margin-left: 15px;

          strong {
            font-size: 16px;

            a {
              text-decoration: none;
              color: #333;

              &:hover {
                color: #7159c1;
              }
            }

            span {
              background: #eee;
              color: #333;
              border-radius: 2px;
              font-size: 12px;
              font-weight: 600;
              height: 20px;
              padding: 3px 4px;
              margin-left: 10px;
            }
          }

          p {
            margin-top: 5px;
            font-size: 12px;
            color: #999;
          }
        }
      }
    `;


### React Native - Module 06 - Concepts 

  By the concept of transpilation, the React Native add a dependency inside to mobile, called JavaScript Core. This funcionality provide the possibility of mobile understand JavaScript as native code (Android or IOS).


### React Native - Module 06 - Environment configuration  

  1) On the address https://docs.rocketseat.dev/ there is a guide for install the environment.


### React Native - Module 06 - Creating project

  1) Guide for create project = https://github.com/react-native-community/cli

  2) For create project utilize the command:

    npx react-native init <project name>

  3) With project created goes to it folder

    a) On Linux/Windows
    
      i  - First open the Android emulator
      ii - Run the line command: react-native run-android

    b) On IOS

      i - Just run the line command: react-native-run-ios

    c) Case the bundle tab on terminal did not open, run the command bellow to start the project on emulator

      react-native start or
      
      react-native start --reset-cache

  4) Active the Live Reloading or Fast Refreshing (by acessing Ctrl-M)
  
  5) In order to test if the changes are being applied, open the App.js which is on root folder and proceed with changes to be done something like that:


      import React, {Component} from 'react';
      import {StyleSheet, Text, View} from 'react-native';

      export default class App extends Component {
        render() {
          return (
            <View style={styles.container}>
              <Text style={styles.welcome}>Welcome to React Native!</Text>
            </View>
          );
        }
      }

      const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF',
        },
        welcome: {
          fontSize: 20,
          textAlign: 'center',
          margin: 10,
        },
      });



### React Native - Module 06 - Setup ESLint, Prettier & EditorConfig              

  
  1) EditorConfig
  
    a) On root folder, click with right mouse button in a blank space and then choose Generate .editorconfig

    b) Change to true value the lines trim_trailing_whitespace = false and insert_final_newline = false

    c) In order to force to use Unix standard, add the line bellow before the current one indent_style

      end_of_line = lf


  2) ESLint

    a) Delete the current .eslintrc.js file, if it already exists

    b) Add it as a development dependency as per bellow

      yarn add eslint -D

    c) After add edslint library, initialize it by runnin the command yarn eslint --init, then proceed with configuration as per bellow:

      - On first screen, choose the "to check syntax, find problems, and enforce code style" option
      - On second screen, choose the "JavaScript Modules (import/export)" option
      - On third screen, choose "React" option
      - On forth screen, for question "Does your project use TypeScript", choose N
      - On fifth screen, press space bar to unmark all option once we are using React Native
      - On sexth screen, choose "Use a popular style guide" option
      - On seventh screen, choose "Airbnb" option
      - On eighth screen, choose "JavaScript" option
      - From now on, choose Yes for questions

    d) After conclude the configuration

      - As the configuration is done using npm, remove the package-lock.json file and then run on root folder the command yarn to update the dependencies inside to yarn.lock

    e) Edit the .eslintrc.js and proceed with the following changes

      - On extends section, add 'prettier' and 'prettier/react'
      - Before parserOptions section, add a new section as per bellow:

          parser: 'babel-eslint',

      - On plugins section, add 'prettier'

      - On rules section, add the following rules:

        i - 'prettier/prettier': 'error',
        ii - 'react/jsx-filename-extension': [
                'warn',
                { extensions: ['.jsx','.js'] }
              ],
        iii - 'import/prefer-default-export': 'off',
        iv - 'react/state-in-constructor': [0, "always"],
        v - 'react/static-property-placement': ['off', 'property assignment'],
        vi - 'react/jsx-props-no-spreading': ['off', 'property assignment'],
        vii - "no-underscore-dangle": 'off',
        viii - "camelcase": [0, {"properties": "always"}],

      - On globals section, add the line bellow:

        i - __DEV__: 'readonly',

        This line is due to utilization of ReactotronConfig.js (see section Reactotron setup)


  3) Prettier

    a) Add it as a development dependency as per bellow

      yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

    b) On root folder, create a file called .prettierrc and proceed with the following configurations:

      {
        "singleQuote": true,
        "trailingComma": "es5"
      }


### React Native - Module 06 - Reactotron setup


  Functionality for proceed with debug.

  1) Add libray reactotron-react-native

    yarn add reactotron-react-native
  
  2) Guide for setup in https://github.com/infinitered/reactotron

  3) On Link above

    a) Click on "Quick start for React Native"

    b) Click on "download the desktop app"

      i - Click on "Releases" to choose according to OS

      ii - On this case I'll choose reactotron-app_2.17.1_amd64.deb and proceed with installation after download it

  4) Once have it installed, open it (Reactotron)

  5) Create on root, a folder called src
  
     a) Create a file called index.js

     b) Copy the content from App.js to index.js and then delete the App.js

     c) On index.js which on root, replace the import about App.js to src\index.js

  6) Stop the debug on emulator

  7) Inside to src folder, create a folder called config and inside to config, create a file called ReactotronConfig.js and proceed with the follwing configuration on the file:

    import Reactotron from 'reactotron-react-native';

    if (__DEV__) {
      const tron = Reactotron.configure()
        .useReactNative()
        .connect();

      console.tron = tron;

      tron.clear();
    }


  8) Inside to src/index.js, import the ReactotronConfig file

    import './config/ReactotronConfig';

  9) From this part on, the Reactotron should show something in it timeline. However, if you are using Android, somes steps should be done:

    a) In case running using USB, add your IP on signature of Reactotron.configure(), in the ReactotronConfig.js. For instance:


      if (__DEV__) {
        const tron = Reactotron.configure({ host: '189.4.72.223' })
          .useReactNative()
          .connect();

        console.tron = tron;

        tron.clear();
      }

    b) if using an Android device or emulator run the following command to make sure it can connect to Reactotron 

      i - adb reverse tcp:9090 tcp:9090

        Note that the adb should be in the path to can run. However, if not, you may alternativelly goes to you Android path to run it. For instance:

        ~/Android/sdk/platform-tools/adb reverse tcp:9090 tcp:9090

      ii - Refresh your app (or start it up react-native start) and have a look at Reactotron now. Do you see the CONNECTION line?


  10) From now, every time we use the command bellow inside to a file which imported the ReactotronConfig.js, a log will be added on Timeline of Reactotron

    console.tron.log(<message>). For instance: console.tron.log('Hello World')

    console.tron.warn(<message>). For instance: console.tron.warn('Warning World')
      

### React Native - Module 06 - React Navigation


  1) First all, let make a start for our project. For that, clean up the src/index.js. In the end the initial file should have something like that

    import React from 'react';
    import { View } from 'react-native';

    import './config/ReactotronConfig';

    export default function App() {
      return <View />;
    }

  2) Lets proceed with component creation. For achieve that, on src folder:

    a) Create a folder called pages

    b) Create a folder called Main

      i - Create a file called index.js

    c) Create a folder called User

      i - Create a file called index.js 

    d) As a tip, for any React Native component file in JS, we may use the Rocketseat snippet rnfc (React Native Function Component)

    e) Add on both index.js files created the import regarding Reactotron

         import '../../config/ReactotronConfig';

    f) On src root create a file called routes.js


  3) Lets proceed with libraries installation. For achieve that add the libraries as per bellow

    a) yarn add react-navigation react-native-gesture-handler react-native-reanimated react-navigation-stack react-navigation-tabs react-navigation-drawer

    b) For Android, also its necessary some steps in order to proceed with utilization  of libraries installed on step a. 

      i - First acces the site: https://kmagiera.github.io/react-native-gesture-handler/docs/getting-started.html

      ii - In Installation/Android, there are some imports and code blocks which must be added on MainActivity.java file. Proceed as per bellow

        a) The imports must be added after last one on current file

          import com.facebook.react.ReactActivityDelegate;
          import com.facebook.react.ReactRootView;
          import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

        b) The code bellow must be added before the last bracket


            @Override
            protected ReactActivityDelegate createReactActivityDelegate() {
              return new ReactActivityDelegate(this, getMainComponentName()) {
                @Override
                protected ReactRootView createRootView() {
                 return new RNGestureHandlerEnabledRootView(MainActivity.this);
                }
              };
            }

    c) Now its necessary rerun the react native to reinstall the native dependencies. For achieve that, stop the server and then:
    
    
      i - For Android run the command bellow

          yarn react-native run-android

      ii - For IOS, goes to ios folder and run the command bellow

          pod install

          Note: Case the pod install does run as expected. You may access the site https://cocoapods.org to get the command which will install it. Nowadays the command is:
           
             sudo gem install cocoapods

      iii - After conclude the steps above, restart the application by running the command 

            yarn start


  4) On routes.js created, proceed with the following configuration


      import { createAppContainer } from 'react-navigation';
      import { createStackNavigator } from 'react-navigation-stack';

      import Main from './pages/Main';
      import User from './pages/User';

      const Routes = createAppContainer(
        createStackNavigator(
          {
            Main,
            User,
          },
          {
            headerLayoutPreset: 'center',
            headerBackTitleVisible: false,
            defaultNavigationOptions: {
              headerStyle: {
                backgroundColor: '#7159c1',
              },
              headerTintColor: '#FFF',
            },
          }
        )
      );

      export default Routes;

      Some considerations:

        a) Its possible to set global styles for routes, which should be done after liste of routes configured. The list of styles used for the initial configuration have some explanations:

          i - headerLayoutPreset: 'center' - By default on Android the title/text is not aligned to center(actually that is aligned to left). This property allows to align the text as desired (left, right and center)

          ii - headerBackTitleVisible: false - By default in IOS usualy a text "back" is set on header. This property avoid it.

          iii - headerTintColor - Refers to text color

        b) createAppContainer - Contain the configuration for route can be run. Also, despite any routes we are using this functionality must be set around all routes.

        c) createStackNavigator - Contain a type of route configuration. For demonstrate it, proceed as per bellow

          i - On src/index.js import the routes

            import Routes from './routes';

          ii - On return of App, replace the current <View /> to <Routes />

            export default function App() {
              return <Routes />;
            }

            After the application reload its expected a header on screen

  5) In order to start some title visualization, on Main/index.js

    a) After export default function Main(), add:

      Main.navigationOptions = {
        title: 'Usuários',
      };


      Note tha the navigationOptions is a property which the reaction navigation search in each route to set some configurations


### React Native - Module 06 - Statusbar configuration

  1) On src/index.js

    a) Import the StatusBar from react-native

      import { StatusBar } from 'react-native';

    b) On return of export default function App proceed with the following configuations

      export default function App() {
        return (
          <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <Routes />
          </>
        );
      }

### React Native - Module 06 - Styled Components


  1) Add the libray styled-components

    yarn add styled-components


  2) On Main folder
  
    a) Create a file called styles.js

    b) On the file use the snippet styles-rn to create a standard structure for React Native
        
    c) Then, proceed with the following configurations

      import styled from 'styled-components/native';

      export const Container = styled.View`
        flex: 1;
        padding: 30px;
      `;


    d) On Main/index.js import the Container from styles.js and replacing the View as well. In the end the content will ve something like that

      import React from 'react';
      import { Container } from './styles';

      export default function Main() {
        return <Container />;
      }

      Main.navigationOptions = {
        title: 'Usuários',
      };

  
  3) Some considerations

    a) Styled Components also is used on React Native because the CSS may be used exacly as on React JS (Web), except for some points which will be described on item b.

    b) Functionalities not allowed
    
      i - Chaining. For instance: let's say we would like to chain a Text tag, that will not be possible. It means that the Text should be done separately. In other words, for each stylization, a new configuration should be done separately.

      ii - Global Styles - It's not possible set a configuration which apply in all elements at once.On this case, should be create a component (in a folder for instance), then share it to other components.

      iii - It's not possible perform styles directly on elements once it does not have IDs or classes

    
### React Native - Module 06 - Form styling


  1) Add the libray react-nactive-vector-icons 

    a) yarn add react-native-vector-icons

    b) After that, proceed with link of new library to native components

      react-native link react-native-vector-icons

    c) Then run again the react-native run-android

      yarn react-native run-android

    Tip: As reference to know which icons to use refers to site https://oblador.github.io/react-native-vector-icons/
  
  2) On Main/index.js proceed with following changes

    a) Import the component Icon from react-native-vector-icons/MaterialIcons

      import Icon from 'react-native-vector-icons/MaterialIcons';

    b) Import Form, Input and SubmitButton from styles.js

      import { Container, Form, Input, SubmitButton } from './styles';

    c) Inside to Container, add the Tags Form, Input and SubmitButton as per bellow

      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
          />
          <SubmitButton>
            <Icon name="add" size={20} color="#FFF" />
          </SubmitButton>
        </Form>
      </Container>

  3) On Main/styles.js proceed with following changes:

    a) Import RectButton from 'react-native-gesture-handler'

      import { RectButton } from 'react-native-gesture-handler';

    b) Add the styled for Form, Input and SubmitButton

      export const Form = styled.View`
        flex-direction: row;
        padding-bottom: 20px;
        border-bottom-width: 1px;
        border-color: #eee;
      `;

      export const Input = styled.TextInput.attrs({
        placeholderTextColor: '#999',
      })`
        flex: 1;
        height: 40px;
        background: #eee;
        border-radius: 4px;
        padding: 0 15px;
        border: 1px solid #eee;
      `;

      export const SubmitButton = styled(RectButton)`
        justify-content: center;
        align-items: center;
        background: #7159c1;
        border-radius: 4px;
        margin-left: 10px;
        padding: 0 12px;
      `;


### React Native - Module 06 - Acessing Github API

      
  1) Add the library axios in order to be able to call APIs

    a) yarn add axios

    b) On src, create a folder called services and inside a file called api.js

    c) On api.js proceed with the following configuration

      import axios from 'axios';

      const api = axios.create({
        baseURL: 'https://api.github.com',
      });

      export default api;


  2) As on Main/index.js will be required states to store the data which will be get from Github API, proceed with the following changes on the code

    a) Import Component from react

      import React, { Component } from 'react'

    b) Replace the current export function to use class and then add it content inside to render method

    c) In order to dismiss the Keybord after click on Add button, Import the Keyboard from react-native

      import { Keyboard } from 'react-native';
  
    d) Import the api.js

      import { Keyboard } from 'react-native';

    e) Proceed with state configuration related to users and newUsers

    f) On class, create a method called handleAddUser, which should be acessed when occur an OnPress button. This method, based on user informed, will call the Github API.

    g) Proceed with changes on Input and SubmitButton, regarding to states and handleAddUser method

    h) In the end the code should have something like that

      import React, { Component } from 'react';
      import { Keyboard } from 'react-native';
      import Icon from 'react-native-vector-icons/MaterialIcons';
      import api from '../../services/api';

      import { Container, Form, Input, SubmitButton } from './styles';

      export default class Main extends Component {
        state = {
          newUser: '',
          users: [],
        };

        handleAddUser = async () => {
          const { users, newUser } = this.state;

          const response = await api.get(`/users/${newUser}`);

          const data = {
            name: response.data.name,
            login: response.data.login,
            bio: response.data.bio,
            avatar: response.data.avatar_url,
          };

          this.setState({
            users: [...users, data],
            newUser: '',
          });

          Keyboard.dismiss();
        };

        render() {
          const { users, newUser } = this.state;

          return (
            <Container>
              <Form>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  placeholder="Adicionar usuário"
                  value={newUser}
                  onChangeText={text => this.setState({ newUser: text })}
                  returnKeyType="send"
                  onSubmitEditing={this.handleAddUser}
                />
                <SubmitButton onPress={this.handleAddUser}>
                  <Icon name="add" size={20} color="#FFF" />
                </SubmitButton>
              </Form>
            </Container>
          );
        }
      }

      Main.navigationOptions = {
        title: 'Usuários',
      };


### React Native - Module 06 - List styling

  1) On Main/styles.js

    a) Create the component List, User, Avatar, Name, Bio, ProfileButton, ProfileButtonText as per bellow

      export const List = styled.FlatList.attrs({
        showsVerticalScrollIndicator: false,
      })`
        margin-top: 20px;
      `;

      export const User = styled.View`
        align-items: center;
        margin: 0 20px 30px;
      `;

      export const Avatar = styled.Image`
        width: 64px;
        height: 64px;
        border-radius: 32px;
        background: #eee;
      `;

      export const Name = styled.Text`
        font-size: 14px;
        color: #333;
        font-weight: bold;
        margin-top: 4px;
        text-align: center;
      `;

      export const Bio = styled.Text.attrs({
        numberOfLines: 2,
      })`
        font-size: 13px;
        line-height: 18px;
        color: #999;
        margin-top: 5px;
        text-align: center;
      `;

      export const ProfileButton = styled(RectButton)`
        margin-top: 10px;
        align-self: stretch;
        border-radius: 4px;
        background: #7159c1;
        justify-content: center;
        align-items: center;
        height: 36px;
      `;

      export const ProfileButtonText = styled.Text`
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        text-transform: uppercase;
      `;


  2) On Main/index.js

    a) Import the components List, User, Avatar, Name, Bio, ProfileButton, ProfileButtonText (created on item 1-a above) 
      
      import { Container, Form, Input, SubmitButton, List, User, Avatar, Name, Bio, ProfileButton, ProfileButtonText } from './styles';

    b) Create under Form component the new ones called List User, Avatar, Name, Bio, ProfileButton, ProfileButtonText as per bellow

      <List
          data={users}
          keyExtractor={user => user.login}
          renderItem={({ item }) => (
            <User>
              <Avatar source={{ uri: item.avatar }} />
              <Name>{item.name}</Name>
              <Bio>{item.bio}</Bio>

              <ProfileButton onPress={() => {}}>
                <ProfileButtonText>Ver perfil</ProfileButtonText>
              </ProfileButton>
            </User>
          )}
        />

      Some considerations:

      a) On react native we do not use the map to interate items. That is achived by using the data={<component data>} and then the renderItem

      b) Also, regarding to key (similar to ReactJs), its used the attribute KeyExtractor


### React Native - Module 06 - Loading and Disable

  1) On Main/styles.js

    a) As on Rect Native there is no disable property, on SubmitButton add a property opacity as per bellow

      export const SubmitButton = styled(RectButton)`
        justify-content: center;
        align-items: center;
        background: #7159c1;
        border-radius: 4px;
        margin-left: 10px;
        padding: 0 12px;
        opacity: ${props => (props.loading ? 0.7 : 1)};
      `;

  2) On Main/index.js

    a) Import the component ActivityIndicator from react-native

      import { Keyboard, ActivityIndicator } from 'react-native';

    b) On state create a variable called loading with initial value equal to false

      state = {
        newUser: '',
        users: [],
        loading: false,
      };

    c) Before call the API set the variable to true

      this.setState({ loading: true });

    d) After the call and get the data set the variable to false

      this.setState({
        users: [...users, data],
        newUser: '',
        loading: false,
      });

    e) Inside to render add the loadgin variable on const

      const { users, newUser, loading } = this.state;

    f) Inside to SubmitButton, in order to define the loading process (color, etct), create a ternary IF as per bellow. Note that the current Icon will be moved to Else condition (:)

      <SubmitButton loading={loading ? 1 : 0} onPress={this.handleAddUser}>
        {loading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Icon name="add" size={20} color="#FFF" />
        )}
      </SubmitButton>


### React Native - Module 06 - Saving into Storage

  1) As standard the React Native does not have a Local Storage (like ReactJS), for that reason its necessry add the library bellow

    yarn add @react-native-community/async-storage

    Note that for Android its necessary run again the yarn react-native run-android or for IOS, access the folder ios and run pod install to reinstall all native dependencies and run yarn react-native run-ios again.

  2) On Main/index.js

    a) Import the component AsyncStorage from @react-native-community/async-storage

    b) Before handleAddUser, create the methods componentDidMount and componentDidUpdate as per bellow

      async componentDidMount() {
        const users = await AsyncStorage.getItem('users');

        if (users) {
          this.setState({ users: JSON.parse(users) });
        }
      }

      componentDidUpdate(_, prevState) {
        const { users } = this.state;

        if (prevState.users !== users) {
          AsyncStorage.setItem('users', JSON.stringify(users));
        }
      }

      Some considerations:
      
      a) It was not used await on componentDidUpdate once there is nothing after run the AsyncStorage.setItem. For instance on componentDidMount, after run AsyncStorage.getitem its necessary check if the object is not empty in order to set the users variable with data from storage.

      b) There is no limit to store data on storage mobile. It means that the storage depends of mobile capacity


### React Native - Module 06 - Navigation


  On React Native there is no Link component like to ReactJS. On React Native its necessary create a JavaScript function which cames as standard in all appliction pages. This function will use the navigate props basically.

  1) On Main/index.js

    a) After handleAddUser create a new method called handleNavigate as per bellow. Note that cannot be an async method

    b) On ProfileButton, onPress replace the current function call to

      <ProfileButton onPress={() => this.handleNavigate(item)}>
        <ProfileButtonText>Ver perfil</ProfileButtonText>
      </ProfileButton>

      Note that was used an arrow function to pass the parameter item (which contains the user data). It was necessary once if we just left the function, the JavaScript runs the function and not pass it as parameter (which we desires on this situation)


  2) On User/index.js


    a) Update the function user according to props (on this case the user which is being passing as parameter on handleNavigate method in the Main/inde.js). In the end the code should be something like that

      export default function User({ navigation }) {
        console.tron.log(navigation.getParam('user'));

        return <View />;
      }

    
    Note that if we analyze the Reactotron, by perform a console.tron.log on props, we will see that there is under the navigation the props getParam. By using this props we may get from navigation/state the user data which cames from state/params.

  
  3) In order to validate the properties and avoid that eslint complain about its necessary add the library prop-types

    a) yarn add prop-types

    b) On Main/index.js

      i - Import the PropTypes from prop-types

        import ProTypes from 'prop-types'

      ii - As the component is on classes format the navigation option might be exluded from begging on file and added as static inside to class after handleNavigation method

        from:

          Main.navigationOptions = {
            title: 'Usuários',
          };

        to:

          static navigationOptions = {
            title: 'Usuários',
          };

      iii - Create a static propTypes for navigation validation as per bellow

        static propTypes = {
          navigation: PropTypes.shape({
            navigate: PropTypes.func,
          }).isRequired,
        };


### React Native - Module 06 - Searching data from API


  1) On User/index.js

    a) Transform the current function in a class as per bellow

      import React, { Component } from 'react';
      import { View } from 'react-native';

      import { Container } from './styles';

      export default class User extends Component {
        render() {
          return <View />;
        }
      }

    b) Crete a componentDidMount as per bellow

      i - As will be necessary acces again the API to get the user repositories which was gave stars, import the api from services/api

      ii - create a state called starts

        state = {
          stars: [],
        };

      iii - Proceed witht the following code for componentDidMount

    c) Create a static navigationOptions as per bellow

      static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('user').name,
      });

      Note that as that is static, will not works by add this.props.navigation.getParam('user').name. In order to achieve it, is necessary transform the navigationOptions in a function which should return an object to be used. It means that a way to access the atributes is using a function to navigationOptions

    d) In order to resolve the ESLINT regarding to propTypes for component validation proceed as per bellow

      i - Import the PropTypes from 'prop-types'

        import PropTypes from 'prop-types';

      ii - Create a static PropTypes as per bellow

        static propTypes = {
          navigation: PropTypes.shape({
            getParam: PropTypes.func,
          }).isRequired,
        };

        Note that by using shape on PropTypes means that is an object, for that reason is used shape. 

    e) In order to resolve the ESLINT regarding to variable stars disrupt it inside to render as pe bellow

      const { stars } = this.state;

    f) In the end the entire code should be something like that

      import React, { Component } from 'react';
      import PropTypes from 'prop-types';
      import { View } from 'react-native';
      import api from '../../services/api';

      // import { Container } from './styles';

      export default class User extends Component {
        static navigationOptions = ({ navigation }) => ({
          title: navigation.getParam('user').name,
        });

        static propTypes = {
          navigation: PropTypes.shape({
            getParam: PropTypes.func,
          }).isRequired,
        };

        state = {
          stars: [],
        };

        async componentDidMount() {
          const { navigation } = this.props;
          const user = navigation.getParam('user');

          const response = await api.get(`/users/${user.login}/starred`);

          this.setState({ stars: response.data });
        }

        render() {
          const { stars } = this.state;

          return <View />;
        }
      }


### React Native - Module 06 - Listing favorites

  1) On User/index.js

    a) Import from User/styles.js the components Bio, Stars, Starred, OwnerAvatar, Info, Title, Author,Loading

      import {
        Container,
        Header,
        Avatar,
        Name,
        Bio,
        Stars,
        Starred,
        OwnerAvatar,
        Info,
        Title,
        Author,
        Loading,
      } from './styles';

    b) Add on state a variable called loading

      state = {
        stars: [],
        loading: true,
      };

    c) On componentDidMount set to false the loading variable

      this.setState({
        stars: response.data,
        loading: false,
      });

    d) On render proceed with the following screen components

      const { navigation } = this.props;
      const { stars, loading } = this.state;

      const user = navigation.getParam('user');

      return (
        <Container>
          <Header>
            <Avatar source={{ uri: user.avatar }} />
            <Name>{user.name}</Name>
            <Bio>{user.bio}</Bio>
          </Header>

          {loading ? (
            <Loading />
          ) : (
            <Stars
              data={stars}
              keyExtractor={star => String(star.id)}
              renderItem={({ item }) => (
                <Starred>
                  <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                  <Info>
                    <Title>{item.name}</Title>
                    <Author>{item.owner.login}</Author>
                  </Info>
                </Starred>
              )}
            />
          )}
        </Container>
      );

  2) On User/styles.js proceed with the styles components

    export const Header = styled.View`
      align-items: center;
      padding-bottom: 20px;
      border-bottom-width: 1px;
      border-color: #eee;
    `;

    export const Avatar = styled.Image`
      width: 100px;
      height: 100px;
      border-radius: 50px;
      background: #eee;
    `;

    export const Name = styled.Text`
      font-size: 20px;
      color: #333;
      font-weight: bold;
      margin-top: 10px;
      text-align: center;
    `;

    export const Bio = styled.Text`
      font-size: 14px;
      line-height: 18px;
      color: #999;
      margin-top: 5px;
      text-align: center;
    `;

    export const Loading = styled.ActivityIndicator.attrs({
      color: '#7159c1',
      size: 50,
    })`
      flex: 1;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
    `;

    export const Stars = styled.FlatList.attrs({
      showsVerticalScrollIndicator: false,
    })`
      margin-top: 20px;
    `;

    export const Starred = styled.View`
      background: #f5f5f5;
      border-radius: 4px;
      padding: 10px 15px;
      margin-bottom: 20px;
      flex-direction: row;
      align-items: center;
    `;

    export const OwnerAvatar = styled.Image`
      height: 42px;
      width: 42px;
      border-radius: 21px;
      background: #eee;
    `;

    export const Info = styled.View`
      margin-left: 10px;
      flex: 1;
    `;

    export const Title = styled.Text.attrs({
      numberOfLines: 1,
    })`
      font-size: 15px;
      font-weight: bold;
      color: #333;
    `;

    export const Author = styled.Text`
      font-size: 13px;
      color: #666;
      margin-top: 2px;
    `;



### React Native - Module 06 - Desafio 06


  1) Add the library react-native-webview

    yarn add react-native-webview

  2) Proceed with implementation according to README.md



### Flex Architecture - Module 07 - Redux Concepts


  1) Global states are the one which does not have a specific owner


### Flex Architecture - Module 07 - Project structure  


  1) Create a basic project configurating prettier and eslint (based on module 05)


### Flex Architecture - Module 07 - Routes configuration


  1) Add the library react-router-dom

  2) Create under src folder a file called routes.js and configure it as per bellow

    import React from 'react';
    import { Switch, Route } from 'react-router-dom';

    import Home from './pages/Home';
    import Cart from './pages/Cart';

    export default function Routes() {
      return (
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      );
    }


  3) On src folder

    a) Create a folder called pages

    b) Under pages create a folder called Cart

      i - Create file called index.js and configure it as per bellow

        import React from 'react';

        // import { Container } from './styles';

        export default function Cart() {
          return <h1>Carrinho</h1>;
        }


    c) Under pages create a folder called Home

      i - Create a file called index.js and configure it as per bellow

        import React from 'react';

        // import { Container } from './styles';

        export default function Home() {
          return <h1>Home</h1>;
        }


    d) On App.js

      i - Import the BrowserRouter from 'react-router-dom';

        import { BrowserRouter } from 'react-router-dom';

      ii - Import the routes

        import Routes from './routes';

      ii - Inside to return add the BrowserRouter as per bellow

        function App() {
          return (
            <BrowserRouter>
              {/* <Header /> */}
              <Routes />
            </BrowserRouter>
          );
        }

      Some considerations:

        a) The BrowserRouter was added on App.js instead of routes.js once there will be a Header which will be used for routes. Also the Header needs to have acces on navigation functionalities. It means


### Flex Architecture - Module 07 - Global Styles


  1) Add the libray styled-components

    yarn add styled-components

  2) On src create a folder called assets, then a folder called images and add the background.svg file wich is available as download on this topic.
  
  2) On src create a folder called styles

  3) On src/styles folder created, create a file called global.js and configure it as per bellow

    import { createGlobalStyle } from 'styled-components';

    import background from '../assets/images/background.svg';

    export default createGlobalStyle`
      @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

      * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
      }

      body {
        background: #191920 url(${background})  no-repeat center top;
        -webkit-font-smoothing: antialiased;
      }

      body, input, button {
        font: 14px Roboto, sans-serif;
      }

      #root {
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
      }

      button {
        cursor: pointer;
      }

    `;


  4) On src/App.js
  
    a) Import the global.js created as GlobalStyle

      import GlobalStyle from './styles/global';

    b) Add it under BrowserRouter after Routes

      function App() {
        return (
          <BrowserRouter>
            {/* <Header /> */}
            <Routes />
            <GlobalStyle />
          </BrowserRouter>
        );
      }


### Flex Architecture - Module 07 - Header creation


  1) Add the library react-icons

    yarn add react-icons
  
  2) Create under src folder
  
    a) A folder called components

    b) Under components a folder called Header

    c) Under Header
    
      i - Create a file called index.js with the following configuration

        import React from 'react';
        import { Link } from 'react-router-dom';

        import { MdShoppingBasket } from 'react-icons/md';

        import { Container, Cart } from './styles';

        import logo from '../../assets/images/logo.svg';

        export default function Header() {
          return (
            <Container>
              <Link to="/">
                <img src={logo} alt="Rocketshoes" />
              </Link>

              <Cart to="/cart">
                <div>
                  <strong>Meu carrinho</strong>
                  <span>3 itens</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
              </Cart>
            </Container>
          );
        }


      ii - Crate a file called styles.js with the following configuration

        import styled from 'styled-components';
        import { Link } from 'react-router-dom';

        export const Container = styled.header`
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 50px 0;
        `;

        export const Cart = styled(Link)`
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: opacity 0.2s;

          &:hover {
            opacity: 0.7;
          }

          div {
            text-align: right;
            margin-right: 10px;

            strong {
              display: block;
              color: #fff;
            }

            span {
              font-size: 12px;
              color: #999;
            }
          }
        `;

  
  3) On src/App.js

    a) Import the Header

      import Header from './components/Header';

    b) Add Header inside to BrowserRouter

      function App() {
        return (
          <BrowserRouter>
            <Header />
            <Routes />
            <GlobalStyle />
          </BrowserRouter>
        );
      }


### Flex Architecture - Module 07 - Home stylization


  1) Add the library polished. This library handle colors on JavaScript. It means that it can make a color dark, lighten or even add a transparency.

    yarn add polished 

  2) On src/pages/Home

    a) Crete a file called styles.js and configure it as per bellow

      import styled from 'styled-components';
      import { darken } from 'polished';

      export const ProductList = styled.ul`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        list-style: none;

        li {
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 4px;
          padding: 20px;

          img {
            align-self: center;
            max-width: 250px;
          }

          > strong {
            font-size: 16px;
            line-height: 20px;
            color: #333;
            margin-top: 5px;
          }

          > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
          }

          button {
            background: #7159c1;
            color: #fff;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            margin-top: auto;

            display: flex;
            align-items: center;
            transition: background 0.2s;

            &:hover {
              background: ${darken(0.03, '#7159c1')};
            }

            div {
              display: flex;
              align-items: center;
              padding: 12px;
              background: rgba(0, 0, 0, 0.1);

              svg {
                margin-right: 5px;
              }
            }

            span {
              flex: 1;
              text-align: center;
              font-weight: bold;
            }
          }
        }
      `;


    b) Configure the index.js as per bellow

      import React from 'react';
      import { MdAddShoppingCart } from 'react-icons/md';

      import { ProductList } from './styles';

      export default function Home() {
        return (
          <ProductList>
            <li>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_zoom1.jpg?ims=544x"
                alt="Tênis"
              />
              <strong>Tênis muito legal</strong>
              <span>R$129,90</span>

              <button type="button">
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" /> 3
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
            <li>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_zoom1.jpg?ims=544x"
                alt="Tênis"
              />
              <strong>Tênis muito legal</strong>
              <span>R$129,90</span>

              <button type="button">
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" /> 3
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
            <li>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_zoom1.jpg?ims=544x"
                alt="Tênis"
              />
              <strong>Tênis muito legal</strong>
              <span>R$129,90</span>

              <button type="button">
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" /> 3
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
            <li>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_zoom1.jpg?ims=544x"
                alt="Tênis"
              />
              <strong>Tênis muito legal</strong>
              <span>R$129,90</span>

              <button type="button">
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" /> 3
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
            <li>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_zoom1.jpg?ims=544x"
                alt="Tênis"
              />
              <strong>Tênis muito legal</strong>
              <span>R$129,90</span>

              <button type="button">
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" /> 3
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
            <li>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_zoom1.jpg?ims=544x"
                alt="Tênis"
              />
              <strong>Tênis muito legal</strong>
              <span>R$129,90</span>

              <button type="button">
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" /> 3
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          </ProductList>
        );
      }


### Flex Architecture - Module 07 - Cart stylization

  
   1) On src/pages/Card

    a) Crete a file called styles.js and configure it as per bellow

      import styled from 'styled-components';
      import { darken } from 'polished';

      export const Container = styled.div`
        padding: 30px;
        background: #fff;
        border-radius: 4px;

        footer {
          margin-top: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;

          button {
            background: #7159c1;
            color: #fff;
            border: 0;
            border-radius: 4px;
            padding: 12px 20px;
            font-weight: bold;
            text-transform: uppercase;
            transition: background 0.2s;

            &:hover {
              background: ${darken(0.03, '#7159c1')};
            }
          }
        }
      `;

      export const ProductTable = styled.table`
        width: 100%;

        thead th {
          color: #999;
          text-align: left;
          padding: 12px;
        }

        tbody td {
          padding: 12px;
          border-bottom: 1px solid #eee;
        }

        img {
          height: 100px;
        }

        strong {
          color: #333;
          display: block;
        }

        span {
          display: block;
          margin-top: 5px;
          font-size: 18px;
          font-weight: bold;
        }

        div {
          display: flex;
          align-items: center;

          input {
            border: 1px solic #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
          }
        }

        button {
          background: none;
          border: 0;
          padding: 6px;
        }
      `;

      export const Total = styled.div`
        display: flex;
        align-items: baseline;

        span {
          color: #999;
          font-weight: bold;
        }

        strong {
          font-size: 28px;
          margin-left: 5px;
        }
      `;


    b) b) Configure the index.js as per bellow

      import React from 'react';
      import {
        MdRemoveCircleOutline,
        MdAddCircleOutline,
        MdDelete,
      } from 'react-icons/md';

      import { Container, ProductTable, Total } from './styles';

      export default function Cart() {
        return (
          <Container>
            <ProductTable>
              <thead>
                <tr>
                  <th />
                  <th>PRODUTO</th>
                  <th>QTD</th>
                  <th>SUBTOTAL</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="https://static.netshoes.com.br/produtos/tenis-kappa-impact-masculino/02/D24-1738-002/D24-1738-002_zoom1.jpg?ims=544x"
                      alt="Tênis"
                    />
                  </td>
                  <td>
                    <strong>Tênis muito legal</strong>
                    <span>R$129,90</span>
                  </td>
                  <td>
                    <div>
                      <button type="button">
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>
                      <input type="number" readOnly value={2} />
                      <button type="button">
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>R$259,80</strong>
                  </td>
                  <td>
                    <button type="button">
                      <MdDelete size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </ProductTable>

            <footer>
              <button type="button">Finalizar pedido</button>

              <Total>
                <span>TOTAL</span>
                <strong>R$259,80</strong>
              </Total>
            </footer>
          </Container>
        );
      }


### Flex Architecture - Module 07 - API configuration


  We'll use the json-server to simulate api (reference on site https://github.com/typicode/json-server). It means create a fake API meanwhile our project is under development. Basically this is the utilization of json-server.

  1) Setup the jason server as global running the command bellow

    yarn global add json-server or npm install -g json-server

  2) Add the library axios

    yarn add axios

  3) Create on root application a file called server.json and copy the content of file available for download.


  3) On src folder

    a) Create a folder called services

      i - Create a file called api.js with the following configuration

        import axios from 'axios';

        const api = axios.create({
          baseURL: 'http://localhost:3333',
        });

        export default api;

  4) In order to run the fake API, run the following command on terminal

    json-server <json file name> -p <port> -w (to watch for any changes on file)

    i.e: json-server server.json -p 3333 -w


### Flex Architecture - Module 07 - Searching products on API


  1) On src create a folder called util, then

    a) Inside to util, create a file called format.js with the following configuration

      export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });

  2) On Home/index.js

    a) Extend the Component on current import from react

      import React, { Component } from 'react';
    
    a) import the src/util/format.js as per bellow

      import formatPrice from '../../util/format';

    c) Import the api.js

      import api from '../../services/api';

    b) Transform the current function Home in a class component with the following configuration

      export default class Home extends Component {
      state = {
        products: [],
      };

      async componentDidMount() {
        const response = await api.get('products');

        const data = response.data.map(product => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }));

        this.setState({ products: data });
      }

      render() {
        const { products } = this.state;

        return (
          <ProductList>
            {products.map(product => (
              <li key={product.id}>
                <img src={product.image} alt={product.title} />
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>

                <button type="button">
                  <div>
                    <MdAddShoppingCart size={16} color="#FFF" /> 3
                  </div>
                  <span>ADICIONAR AO CARRINHO</span>
                </button>
              </li>
            ))}
          </ProductList>
        );
      }
    }


### Flex Architecture - Module 07 - Redux Configuration

  1) Add the libraries redux and react-redux

    yarn add redux react-redux

  2) On src
  
    a) Create a folder called store, then

      i - Create a file called index.js with the following configuration

        import { createStore } from 'redux';

        import rootReducer from './modules/rootReducer';

        const store = createStore(rootReducer);

        export default store;


    b) Inside to store create a folder called modules, then

      i - Create a file called rootReducer.js with the following configuration

        import { combineReducers } from 'redux';

        import cart from './cart/reducer';

        export default combineReducers({
          cart,
        });


    c) Inside to modules create a folder called cart, then

      i - Create a file called reducer.js with the following configuration

        export default function cart() {
          return [];
        }
    
  3) On src/App.js

    a) Import the Provider from react-redux. This Provider will left the store set on store/index.js available for all components.

      import { Provider } from 'react-redux';

    b) Import the store from store/index.js

      import store from './store';
   
    b) Add the Provier around all components of application. Also pass the store (item b) as parameter to Provider

      function App() {
        return (
          <Provider store={store}>
            <BrowserRouter>
              <Header />
              <Routes />
              <GlobalStyle />
            </BrowserRouter>
          </Provider>
        );
      }


### Flex Architecture - Module 07 - Adding to cart


  1) On Home/index.js proceed as per bellow

    a) In order to connect the component with redux state, import from 'react-redux' the connect

      import { connect } from 'react-redux';

    b) Extract the export default from class and move it to bottom of file as per bellow

      export default connect()(Home);

    c) Inside to class
    
      i - Create a function called handleAddProduct

        handleAddProduct = product => {
          const { dispatch } = this.props;

          dispatch({
            type: 'ADD_TO_CART',
            product,
          });
        };

        Note that all component which connect to Redux receives a property called dispatch. This property is responsible for trigger an action to Redux

      ii - Add a call to this function on button passing the product as parameter

        <button
          type="button"
          onClick={() => this.handleAddProduct(product)}
        >
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>

  2) On cart/reducer.js proceed as per bellow

    export default function cart(state = [], action) {
      switch (action.type) {
        case 'ADD_TO_CART':
          return [...state, action.product];
        default:
          return state;
      }
    }


    Some considerations:
    
    a) All reducer receives by standard two variables: state and action. The action variable is exacly the action being dispatched. The state variable is the previous state of change which will be done at the moment. It means that on the case on cart, the state is an empty array which needed to be fed with a new product.
    
    b) As the redux state is immutable, all reducer should have a "face" using swtich with an action in order to decide when an action will be done or not. For example, for ADD_TO_CART, we may return  the state modified as per our requirement. Also its necessary add a default option, returning the previous state without any changes. In other words, every time which a dispatch occur in a component,all reducers are called. However, there is no sense when for instance a reducer ADD_TO_CART is dispatched, the other reducers also being dispatched. The role of swtich on reducer is basically avoid dispatch reducers unnecessarily. It means that the switch will watch the action ADD_TO_CARD, changing it accordingly, but keeping the others actions with the same state (using the default option).


  3) On Header/index.js proceed as per bellow

    a) In order to connect the component with redux state, import from 'react-redux' the connect

      import { connect } from 'react-redux';

    b) Extract the export default from class and move it to bottom of file as per bellow

      export default connect(state => ({
        cartSize: state.cart.length,
      }))(Header);

      Some considerations:

      a) The connect may receives parameters. The first parameter which it may receives is a function whih

        i - Receives a state which should return the information to be accessed from the component. Usually that is returning in object format

        ii - So, everytime is used the connect in a component and the state changes, the component will also render the component from begging showing the new information existing on redux state.

    b) Add on signature of Header the parameter cardSize

      function Header({ cartSize }) 

    c) Add the variable cartSize on span related to itens

      <span>{cartSize} itens</span>

    d) In the end the entire code must be something like that

      import React from 'react';
      import { Link } from 'react-router-dom';
      import { connect } from 'react-redux';

      import { MdShoppingBasket } from 'react-icons/md';

      import { Container, Cart } from './styles';

      import logo from '../../assets/images/logo.svg';

      function Header({ cartSize }) {
        return (
          <Container>
            <Link to="/">
              <img src={logo} alt="Rocketshoes" />
            </Link>

            <Cart to="/cart">
              <div>
                <strong>Meu carrinho</strong>
                <span>{cartSize} itens</span>
              </div>
              <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
          </Container>
        );
      }

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);


  4) Briefly, the flux is:

    a) The component dispatch an action

    b) The action warns the reducer about this dispatch

    c) The reducer performs the changes needed

    d) The Redux warns all components that need the new information to update with it.
          
      
### Flex Architecture - Module 07 - Reactotron & Redux


  1) Add the libraries reactotron-react-js and reatotron-redux

    yarn add reactotron-react-js reactotron-redux

  2) On src

    a) Create a folder called config

    b) Inside to folder config, create a file called ReactotronConfig.js with the following configuration

      import Reactotron from 'reactotron-react-js';
      import { reactotronRedux } from 'reactotron-redux';

      if (process.env.NODE_ENV === 'development') {
        const tron = Reactotron.configure()
          .use(reactotronRedux())
          .connect();

        tron.clear();

        console.tron = tron;
      }


  3) On .eslintrc.js

    a) Enable the utilization of property tron inside to console by adding on rules section the rule bellow

      'no-console': ["error", { allow: ["tron"] }],


  4) On src/App.js import the ReactotronConfig.js. Note that this import must be done before the import of store.


    import './config/ReactotronConfig';


  5) On store/index.js, in order to enable the utilization of tron on Redux

    a) create a variable called enhancer as per bellow

      const enhancer =
        process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

    b) Pass the variable as parameter to createStore

      const store = createStore(rootReducer, enhancer);


  5) Some considerations about Reactotron with Redux

    a) For each action performed on application, it will be logged to Reactotron

    b) Its possible repeat an action on Reactotron by clicking on symbol -> <- (next to <>)

    c) As Reactotron has total integration with Redux its possible edit and action and change it (by clicking on symbol <>) then dispatching it again.

    d) On section State its possible create a subscription. Basically its passed a reducer name during it creation. Also its possible pass more levels using dot on reducer (i.e: cart[1].title). For everytime when occurr a change on state, it will also reflect to subscription

    e) On section snapshoot its possible make a copy of current state. That is very important to does not loose the state when occur a refresh on the application and we would like to keep using the state until at that moment. By achieve it click in Add Backup, reload the application, then click in upload on item, then the state will be added again to application.


### Flex Architecture - Module 07 - Listing at cart

  1) On Cart/index.js

    a) In order to connect the component with redux state, import from 'react-redux' the connect

      import { connect } from 'react-redux';

    b) On the end of file create the function mapStateToProps as per bellow. This basically catch information from state and map as properties to component.

      const mapStateToProps = state => ({
        cart: state.cart,
      }); 

    c) Extract the export default from function Cart and move it to bottom of file as per bellow. Note that for this partilar case as we will need catch information from state as properties its necessary call as parameter the mapStateToPros defined on item b.

      export default connect(mapStateToProps)(Cart);

    d) Note that with mapStateToProps passed as parameter, from now on the call Cart have access information called cart. Said that add the cart variable as parameter to call Cart and then proceed with the following configuration on the function Cart

      function Cart({ cart }) {
        return (
          <Container>
            <ProductTable>
              <thead>
                <tr>
                  <th />
                  <th>PRODUTO</th>
                  <th>QTD</th>
                  <th>SUBTOTAL</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {cart.map(product => (
                  <tr>
                    <td>
                      <img src={product.image} alt={product.title} />
                    </td>
                    <td>
                      <strong>{product.title}</strong>
                      <span>{product.priceFormatted}</span>
                    </td>
                    <td>
                      <div>
                        <button type="button">
                          <MdRemoveCircleOutline size={20} color="#7159c1" />
                        </button>
                        <input type="number" readOnly value={product.amount} />
                        <button type="button">
                          <MdAddCircleOutline size={20} color="#7159c1" />
                        </button>
                      </div>
                    </td>
                    <td>
                      <strong>R$259,80</strong>
                    </td>
                    <td>
                      <button type="button">
                        <MdDelete size={20} color="#7159c1" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </ProductTable>

            <footer>
              <button type="button">Finalizar pedido</button>

              <Total>
                <span>TOTAL</span>
                <strong>R$259,80</strong>
              </Total>
            </footer>
          </Container>
        );
      }


   2) On cart/reducer.js proceed with the following configuration to set new information related to amount(quantity of products being stored)

    export default function cart(state = [], action) {
      switch (action.type) {
        case 'ADD_TO_CART':
          return [
            ...state,
            {
              ...action.product,
              amount: 1,
            },
          ];
        default:
          return state;
      }
    }

### Flex Architecture - Module 07 - Product duplicated

  
  1) In order to facilitate the utilization of objects and arrays which are immutable inside to JavaScript/React/Redux, we'll use the tool immer (reference on site: https://github.com/immerjs/immer). A brief explanation about how immer works: Nowadays we need return all new state copying the previous state with the new changes. Basically we are applying the concept of immutability on the fly. It means se alway create another state instead of change the previously; With immer its possible to have the immutability and also the mutability. It means that its possible catch the current state, perform changes in a draft and then apply these changes on main state. Said that, in order to use this functionality add the library immer as per bellow

    yarn add immer

  2) On cart/reducer.js proceed with the following configuration to avoid product duplicated on cart. Basically when the user to click on the same product twice the application will increment the quantity instead of duplication the product. Note that also will be used the concepts of immer explained on item 1

    import produce from 'immer';

    export default function cart(state = [], action) {
      switch (action.type) {
        case 'ADD_TO_CART':
          return produce(state, draft => {
            const productIndex = draft.findIndex(p => p.id === action.product.id);

            if (productIndex >= 0) {
              draft[productIndex].amount += 1;
            } else {
              draft.push({
                ...action.product,
                amount: 1,
              });
            }
          });
        default:
          return state;
      }
    }


  3) By default the ESLint does allow to change parameter received in functions. In order to allow it, on .eslintrc.js, section rules add the the following line

      'no-param-reassign': 'off',


### Flex Architecture - Module 07 - Removing products


  1) On Cart/index.js. In order to remove a product from cart its necessary create a function to handle it. Said that proceed with following changes on the current code

    a) On signature of function ad as parameter the property dispatch

      function Cart({ cart, dispatch })

    b) On Remove button add a call as per bellow

      <td>
        <button
          type="button"
          onClick={() =>
            dispatch({ type: 'REMOVE_FROM_CART', id: product.id })
          }
        >
          <MdDelete size={20} color="#7159c1" />
        </button>
      </td>

  2) On cart/reducer.js proceed with the following configuration to set deletion products


    import produce from 'immer';

    export default function cart(state = [], action) {
      switch (action.type) {
        case 'ADD_TO_CART':
          return produce(state, draft => {
            const productIndex = draft.findIndex(p => p.id === action.product.id);

            if (productIndex >= 0) {
              draft[productIndex].amount += 1;
            } else {
              draft.push({
                ...action.product,
                amount: 1,
              });
            }
          });
        case 'REMOVE_FROM_CART':
          return produce(state, draft => {
            const productIndex = draft.findIndex(p => p.id === action.id);

            if (productIndex >= 0) {
              draft.splice(productIndex, 1);
            }
          });
        default:
          return state;
      }
    }


### Flex Architecture - Module 07 - Action refactoring


  1) On cart create a file called actions.js and proceed with the following configuration
    
    export function addToCart(product) {
      return {
        type: '@cart/ADD',
        product,
      };
    }

    export function removeFromCart(id) {
      return {
        type: '@cart/REMOVE',
        id,
      };
    }


  2) On cart/reducer.js

    a) Replace ADD_TO_CART to @cart/ADD

    b) Replace REMOVE_FROM_CART to @cart/REMOVE


  2) On Home/index.js

    a) Import the actions from item 1

      import * as CartActions from '../../store/modules/cart/actions';

    c) Import from redux the function called bindActionCreators 

      import { bindActionCreators } from 'redux';

    d) On end of file create a function called mapDispatchToProps as per bellow. This function basically converts actions from redux in properties of components. Using that the actions (addToCart and removeFromCart) may be accessed directly as component properts

      const mapDispatchToProps = dispatch =>
        bindActionCreators(CartActions, dispatch);

    e) Change the signature of connect as per bellow

      export default connect(
        null,
        mapDispatchToProps
      )(Home);


    f) Replace the dispatch call on handleAddProduct as per bellow. Note that now due to configuration about item d, the addToCart might be accessed as a property  

      handleAddProduct = product => {
      const { addToCart } = this.props;

      addToCart(product);
      };


  3) On Cart/index.js

      a) Import the actions from item 1

        import * as CartActions from '../../store/modules/cart/actions';

      c) Import from redux the function called bindActionCreators 

        import { bindActionCreators } from 'redux';

      d) On end of file create a function called mapDispatchToProps as per bellow. This function basically converts actions from redux in properties of components. Using that the actions (addToCart and removeFromCart) may be accessed directly as component properts

        const mapDispatchToProps = dispatch =>
          bindActionCreators(CartActions, dispatch);

      e) Change the signature of connect as per bellow

        export default connect(
          mapStateToProps,
          mapDispatchToProps
        )(Cart);


      f) On signature of function Cart replace the dispatch to removeFromCart

        function Cart({ cart, removeFromCart })

      g) On remove button replace the current call to

        <td>
          <button
            type="button"
            onClick={() => removeFromCart(product.id)}
          >
            <MdDelete size={20} color="#7159c1" />
          </button>
        </td>
      

### Flex Architecture - Module 07 - Changing quantity


  1) On cart/actions.js

    a) Create a function called updateAmout as per bellow

      export function updateAmount(id, amount) {
        return {
          type: '@cart/UPDATE_AMOUNT',
          id,
          amount,
        };
      }

  2) On Cart/index.js

    a) Add to signature of function Cart the updateAmount as parameter

      function Cart({ cart, removeFromCart, updateAmount })

    b) Inside to function Cart
    
      i - Create a function called increment as per bellow\

        function increment(product) {
          updateAmount(product.id, product.amount + 1);
        }

        1) Update the increment amount button calling the function increment as per bellow

          <button type="button" onClick={() => increment(product)}>
            <MdAddCircleOutline size={20} color="#7159c1" />
          </button>

      ii - Create a function called decrement as per bellow

        function decrement(product) {
          updateAmount(product.id, product.amount - 1);
        }

        1) Update the decrement amount button calling the function decrement as per bellow

          <button type="button" onClick={() => decrement(product)}>
            <MdRemoveCircleOutline size={20} color="#7159c1" />
          </button>

          
  3) On cart/reducer.js

    a) Create a case called @cart/UPDATE_AMOUNT as per bellow

      case '@cart/UPDATE_AMOUNT': {
        if (action.amount <= 0) {
          return state;
        }

        return produce(state, draft => {
          const productIndex = draft.findIndex(p => p.id === action.id);

          if (productIndex >= 0) {
            draft[productIndex].amount = Number(action.amount);
          }
        });
      }


### Flex Architecture - Module 07 - Totals calculation

  
  1) On Cart/index.js

    a) Import the formatPrice from format

      import { formatPrice } from '../../util/format';

    b) Change the mapStateToProps to contemplate the totals calculations as per bellow

      const mapStateToProps = state => ({
        cart: state.cart.map(product => ({
          ...product,
          subtotal: formatPrice(product.price * product.amount),
        })),
        total: formatPrice(
          state.cart.reduce((total, product) => {
            return total + product.price * product.amount;
          }, 0)
        ),
      });

      Some considerations:
      
        i - Note that by adding the calculation on mapStateToProps is a good practice once it only will be executed if the reducer suffer update. By adding the calculation inside to render means that everytime any state or property to change, the calculation also would changed.

        ii - We are using reduce for Total once it is used when we would like to transform an array in a single value.

    c) Add the product.subtotal on strong related to SubTotal

      <td>
        <strong>{product.subtotal}</strong>
      </td>

    d) Add the property total on signature of function Cart

      function Cart({ cart, total, removeFromCart, updateAmount })

    e) Add the total on strong related to TOTAL

      <Total>
        <span>TOTAL</span>
        <strong>{total}</strong>
      </Total>

### Flex Architecture - Module 07 - Showing quantities

  1) On Home/index.js

    a) Create a mapStateToProps as per bellow

      const mapStateToProps = state => ({
        amount: state.cart.reduce((amount, product) => {
          amount[product.id] = product.amount;

          return amount;
        }, {}),
      });

    b) Add the mapStateToProps on connect

      export default connect(
        mapStateToProps,
        mapDispatchToProps
      )(Home);

    c) Inside to render create a property called amount as per bellow 

      const { amount } = this.props;

    d) Add the property amount to DIV which contain the amount information

      <div>
        <MdAddShoppingCart size={16} color="#FFF" />{' '}
        {amount[product.id] || 0}
      </div>
      

### Flex Architecture - Module 07 - Redux Saga configuration

  For this section will be configurated a concept related to middleware. Basically the middle is an interception, similato to Node, but instead of intercep application routes the redux middleware can intercep actions. It means that always an action is dispathed a middleware might be also started to initiate a side effect, which might be for instance an async, asynct store, DB acces or even an API call. This functionality ise used in Redux to complement detailes related to application.



  1) Add the library redux-saga

    yarn add redux-saga

  2) On src/store/modules/cart

    a) Create a file called sagas.js as per bellow

      import { call, put, all, takeLatest } from 'redux-saga/effects';

      import api from '../../../services/api';

      import { addToCartSuccess } from './actions';

      function* addToCart({ id }) {
        const response = yield call(api.get, `/products/${id}`);

        yield put(addToCartSuccess(response.data));
      }

      export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);


    Some considerations:

      i - The function being created is responsible to access the API, search for the detailed information about product and add to cart. Nowadays this functionality is done by directlu byt Redux. Basically is dispatched an action, the cart reducer watch this acton and then add it to cart. Now with this function will be done an additional step: a) When the user to click in a product to add to cart, will be dispatched the action add to cart; b) Who will watch the action will not be directly the reducer, but this function; c) It will search on API the details and then call the reducer to add to cart

      ii - The * on the function means generator (similar to async). The generator is more powerfull than async/await.

      iii - The yield means the the await of * (generator)


    b) change the actions.js as per bellow

      export function addToCartRequest(id) {
        return {
          type: '@cart/ADD_REQUEST',
          id,
        };
      }

      export function addToCartSuccess(product) {
        return {
          type: '@cart/ADD_SUCCESS',
          product,
        };
      }

      export function removeFromCart(id) {
        return {
          type: '@cart/REMOVE',
          id,
        };
      }

      export function updateAmount(id, amount) {
        return {
          type: '@cart/UPDATE_AMOUNT',
          id,
          amount,
        };
      }

    c) change the reducer.js as per bellow

      import produce from 'immer';

      export default function cart(state = [], action) {
        switch (action.type) {
          case '@cart/ADD_SUCCESS':
            return produce(state, draft => {
              const productIndex = draft.findIndex(p => p.id === action.product.id);

              if (productIndex >= 0) {
                draft[productIndex].amount += 1;
              } else {
                draft.push({
                  ...action.product,
                  amount: 1,
                });
              }
            });
          case '@cart/REMOVE':
            return produce(state, draft => {
              const productIndex = draft.findIndex(p => p.id === action.id);

              if (productIndex >= 0) {
                draft.splice(productIndex, 1);
              }
            });
          case '@cart/UPDATE_AMOUNT': {
            if (action.amount <= 0) {
              return state;
            }

            return produce(state, draft => {
              const productIndex = draft.findIndex(p => p.id === action.id);

              if (productIndex >= 0) {
                draft[productIndex].amount = Number(action.amount);
              }
            });
          }
          default:
            return state;
        }
      }


  
  3) On src/pages/Home/index.js

    a) On handleAddProduct method and where is used this method, change to use only the id instead of entire product

      handleAddProduct = id => {
        const { addToCartRequest } = this.props;

        addToCartRequest(id);
      };

      <button
        type="button"
        onClick={() => this.handleAddProduct(product.id)}
      >
        <div>
          <MdAddShoppingCart size={16} color="#FFF" />{' '}
          {amount[product.id] || 0}
        </div>
        <span>ADICIONAR AO CARRINHO</span>
      </button>


  4) On src/store/modules

    a) Create a file called rootSaga.js as per bellow

      import { all } from 'redux-saga/effects';

      import cart from './cart/sagas';

      export default function* rootSaga() {
        return yield all([cart]);
      }


  5) On src/store

    a) Change the index.js as per bellow

      
      i - Import from redux the functions applyMiddleware and compose

        import { createStore, applyMiddleware, compose } from 'redux';

        Note that the componse perform a merge among configurations

      
      ii - Import the function createSagaMiddleware from redux-saga

        import createSagaMiddleware from 'redux-saga';

      
      iii - Import the rootSaga file

        import rootSaga from './modules/rootSaga';

      
      iv - Create a constant called sagaMiddeware as per bellow

        const sagaMiddleware = createSagaMiddleware();

      
      v - Inside to enhancer proceed with changes as per bellow

        const enhancer =
          process.env.NODE_ENV === 'development'
            ? compose(
                console.tron.createEnhancer(),
                applyMiddleware(sagaMiddleware)
              )
            : applyMiddleware(sagaMiddleware);

      
      vi - After constant store add a call to rootSaga as per bellow

        sagaMiddleware.run(rootSaga);


### Flex Architecture - Module 07 - Reactotron & Saga


  1) Add the library reactotron-redux-saga

    yarn add reactotron-redux-saga

  2) On src/config/ReactotronConfig.js

    a) Import the reactotronSaga from reactotron-redux-saga

    b) Add an use on const tron as per bellow

      if (process.env.NODE_ENV === 'development') {
        const tron = Reactotron.configure()
          .use(reactotronRedux())
          .use(reactotronSaga())
          .connect();

        tron.clear();

        console.tron = tron;
      }

  3) On src/store/index.js

    a) Before the constant sagaMiddleware, create a new one called sagaMonitor as per bellow

      const sagaMonitor =
        process.env.NODE_ENV === 'development'
          ? console.tron.createSagaMonitor()
          : null;

    b) Chante the constant sagaMiddleware as per bellow
    
        const sagaMiddleware = createSagaMiddleware({
          sagaMonitor,
        });


### Flex Architecture - Module 07 - Separating actions


  1) - On src/store/modules/cart

    a) Change the reducer.js as per bellow

      import produce from 'immer';

      export default function cart(state = [], action) {
        switch (action.type) {
          case '@cart/ADD_SUCCESS':
            return produce(state, draft => {
              const { product } = action;

              draft.push(product);
            });
          case '@cart/REMOVE':
            return produce(state, draft => {
              const productIndex = draft.findIndex(p => p.id === action.id);

              if (productIndex >= 0) {
                draft.splice(productIndex, 1);
              }
            });
          case '@cart/UPDATE_AMOUNT': {
            if (action.amount <= 0) {
              return state;
            }

            return produce(state, draft => {
              const productIndex = draft.findIndex(p => p.id === action.id);

              if (productIndex >= 0) {
                draft[productIndex].amount = Number(action.amount);
              }
            });
          }
          default:
            return state;
        }
      }


    b) Change the sagas.js as per bellow

      import { call, select, put, all, takeLatest } from 'redux-saga/effects';

      import api from '../../../services/api';
      import { formatPrice } from '../../../util/format';

      import { addToCartSuccess, updateAmount } from './actions';

      function* addToCart({ id }) {
        const productExists = yield select(state =>
          state.cart.find(p => p.id === id)
        );

        if (productExists) {
          const amount = productExists.amount + 1;

          yield put(updateAmount(id, amount));
        } else {
          const response = yield call(api.get, `/products/${id}`);

          const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
          };

          yield put(addToCartSuccess(data));
        }
      }

      export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);


### Flex Architecture - Module 07 - Stock during adding product to cart


   1) - On src/store/modules/cart

    a) Change the sagas.js as per bellow

      import { call, select, put, all, takeLatest } from 'redux-saga/effects';

      import api from '../../../services/api';
      import { formatPrice } from '../../../util/format';

      import { addToCartSuccess, updateAmount } from './actions';

      function* addToCart({ id }) {
        const productExists = yield select(state =>
          state.cart.find(p => p.id === id)
        );

        const stock = yield call(api.get, `/stock/${id}`);

        const stockAmount = stock.data.amount;
        const currentAmount = productExists ? productExists.amount : 0;

        const amount = currentAmount + 1;

        if (amount > stockAmount) {
          console.tron.warn('ERRO');
          return;
        }

        if (productExists) {
          yield put(updateAmount(id, amount));
        } else {
          const response = yield call(api.get, `/products/${id}`);

          const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
          };

          yield put(addToCartSuccess(data));
        }
      }

      export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);


### Flex Architecture - Module 07 - React ToastifyReact Toastify


  1) Add the libray react-toastify. This lib is used to show friendly messages.

    yarn add react-toastify 


  2) On src
  
    a) Change the App.js as per bellow

      import React from 'react';
      import { BrowserRouter } from 'react-router-dom';
      import { Provider } from 'react-redux';
      import { ToastContainer } from 'react-toastify';

      import './config/ReactotronConfig';

      import GlobalStyle from './styles/global';
      import Header from './components/Header';
      import Routes from './routes';

      import store from './store';

      function App() {
        return (
          <Provider store={store}>
            <BrowserRouter>
              <Header />
              <Routes />
              <GlobalStyle />
              <ToastContainer autoClose={3000} />
            </BrowserRouter>
          </Provider>
        );
      }

      export default App;


  3) On src/styles
  
    a) Change the global.js as per bellow

      import { createGlobalStyle } from 'styled-components';

      import 'react-toastify/dist/ReactToastify.css';
      import background from '../assets/images/background.svg';

      export default createGlobalStyle`
        @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

        * {
          margin: 0;
          padding: 0;
          outline: 0;
          box-sizing: border-box;
        }

        body {
          background: #191920 url(${background})  no-repeat center top;
          -webkit-font-smoothing: antialiased;
        }

        body, input, button {
          font: 14px Roboto, sans-serif;
        }

        #root {
          max-width: 1020px;
          margin: 0 auto;
          padding: 0 20px 50px;
        }

        button {
          cursor: pointer;
        }

      `;


  
  4) On src/store/modules/cart
  
    a) Change the sagas.js as per bellow

      import { call, select, put, all, takeLatest } from 'redux-saga/effects';
      import { toast } from 'react-toastify';

      import api from '../../../services/api';
      import { formatPrice } from '../../../util/format';

      import { addToCartSuccess, updateAmount } from './actions';

      function* addToCart({ id }) {
        const productExists = yield select(state =>
          state.cart.find(p => p.id === id)
        );

        const stock = yield call(api.get, `/stock/${id}`);

        const stockAmount = stock.data.amount;
        const currentAmount = productExists ? productExists.amount : 0;

        const amount = currentAmount + 1;

        if (amount > stockAmount) {
          toast.error('Quantidade solicitada fora do estoque');
          return;
        }

        if (productExists) {
          yield put(updateAmount(id, amount));
        } else {
          const response = yield call(api.get, `/products/${id}`);

          const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
          };

          yield put(addToCartSuccess(data));
        }
      }

      export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);


### Flex Architecture - Module 07 - Stock during changing quantities

  
  1) On src/store/modules/cart
  
    a) Change the actions.js as per bellow

      export function addToCartRequest(id) {
        return {
          type: '@cart/ADD_REQUEST',
          id,
        };
      }

      export function addToCartSuccess(product) {
        return {
          type: '@cart/ADD_SUCCESS',
          product,
        };
      }

      export function removeFromCart(id) {
        return {
          type: '@cart/REMOVE',
          id,
        };
      }

      export function updateAmountRequest(id, amount) {
        return {
          type: '@cart/UPDATE_AMOUNT_REQUEST',
          id,
          amount,
        };
      }

      export function updateAmountSuccess(id, amount) {
        return {
          type: '@cart/UPDATE_AMOUNT_SUCCESS',
          id,
          amount,
        };
      }



  2) On src/pages/Cart
  
    a) Change index.js as per bellow

      import React from 'react';
      import { connect } from 'react-redux';
      import { bindActionCreators } from 'redux';
      import {
        MdRemoveCircleOutline,
        MdAddCircleOutline,
        MdDelete,
      } from 'react-icons/md';

      import { formatPrice } from '../../util/format';

      import * as CartActions from '../../store/modules/cart/actions';

      import { Container, ProductTable, Total } from './styles';

      function Cart({ cart, total, removeFromCart, updateAmountRequest }) {
        function increment(product) {
          updateAmountRequest(product.id, product.amount + 1);
        }

        function decrement(product) {
          updateAmountRequest(product.id, product.amount - 1);
        }

        return (
          <Container>
            <ProductTable>
              <thead>
                <tr>
                  <th />
                  <th>PRODUTO</th>
                  <th>QTD</th>
                  <th>SUBTOTAL</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {cart.map(product => (
                  <tr>
                    <td>
                      <img src={product.image} alt={product.title} />
                    </td>
                    <td>
                      <strong>{product.title}</strong>
                      <span>{product.priceFormatted}</span>
                    </td>
                    <td>
                      <div>
                        <button type="button" onClick={() => decrement(product)}>
                          <MdRemoveCircleOutline size={20} color="#7159c1" />
                        </button>
                        <input type="number" readOnly value={product.amount} />
                        <button type="button" onClick={() => increment(product)}>
                          <MdAddCircleOutline size={20} color="#7159c1" />
                        </button>
                      </div>
                    </td>
                    <td>
                      <strong>{product.subtotal}</strong>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <MdDelete size={20} color="#7159c1" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </ProductTable>

            <footer>
              <button type="button">Finalizar pedido</button>

              <Total>
                <span>TOTAL</span>
                <strong>{total}</strong>
              </Total>
            </footer>
          </Container>
        );
      }

      const mapStateToProps = state => ({
        cart: state.cart.map(product => ({
          ...product,
          subtotal: formatPrice(product.price * product.amount),
        })),
        total: formatPrice(
          state.cart.reduce((total, product) => {
            return total + product.price * product.amount;
          }, 0)
        ),
      });

      const mapDispatchToProps = dispatch =>
        bindActionCreators(CartActions, dispatch);

      export default connect(
        mapStateToProps,
        mapDispatchToProps
      )(Cart);
      

  
  3) On src/store/modules/cart
  
    a) Change the sagas.js as per bellow

      import { call, select, put, all, takeLatest } from 'redux-saga/effects';
      import { toast } from 'react-toastify';

      import api from '../../../services/api';
      import { formatPrice } from '../../../util/format';

      import { addToCartSuccess, updateAmountSuccess } from './actions';

      function* addToCart({ id }) {
        const productExists = yield select(state =>
          state.cart.find(p => p.id === id)
        );

        const stock = yield call(api.get, `/stock/${id}`);

        const stockAmount = stock.data.amount;
        const currentAmount = productExists ? productExists.amount : 0;

        const amount = currentAmount + 1;

        if (amount > stockAmount) {
          toast.error('Quantidade solicitada fora do estoque');
          return;
        }

        if (productExists) {
          yield put(updateAmountSuccess(id, amount));
        } else {
          const response = yield call(api.get, `/products/${id}`);

          const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
          };

          yield put(addToCartSuccess(data));
        }
      }

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Quantidade solicitada fora do estoque');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);


  
  4) On src/store/modules/cart
  
    a) Change the reducer.js as per bellow

      import produce from 'immer';

      export default function cart(state = [], action) {
        switch (action.type) {
          case '@cart/ADD_SUCCESS':
            return produce(state, draft => {
              const { product } = action;

              draft.push(product);
            });
          case '@cart/REMOVE':
            return produce(state, draft => {
              const productIndex = draft.findIndex(p => p.id === action.id);

              if (productIndex >= 0) {
                draft.splice(productIndex, 1);
              }
            });
          case '@cart/UPDATE_AMOUNT_SUCCESS': {
            return produce(state, draft => {
              const productIndex = draft.findIndex(p => p.id === action.id);

              if (productIndex >= 0) {
                draft[productIndex].amount = Number(action.amount);
              }
            });
          }
          default:
            return state;
        }
      }


### Flex Architecture - Module 07 - Navigating on Saga


  1) Add the libray history. This lib control the history API from browser, which means the routes that the reacto router dom uses

    yarn add history

  
  2) On src/services

    a) Create a file history.js as per bellow

      import { createBrowserHistory } from 'history';

      const history = createBrowserHistory();

      export default history;


  3) On src
  
    a) Change the App.js as per bellow

      import React from 'react';
      import { Router } from 'react-router-dom';
      import { Provider } from 'react-redux';
      import { ToastContainer } from 'react-toastify';

      import './config/ReactotronConfig';

      import GlobalStyle from './styles/global';
      import Header from './components/Header';
      import Routes from './routes';

      import history from './services/history';
      import store from './store';

      function App() {
        return (
          <Provider store={store}>
            <Router history={history}>
              <Header />
              <Routes />
              <GlobalStyle />
              <ToastContainer autoClose={3000} />
            </Router>
          </Provider>
        );
      }

      export default App;



  4) On src/store/modules/cart
  
    a) Change the sagas.js as per bellow

      import { call, select, put, all, takeLatest } from 'redux-saga/effects';
      import { toast } from 'react-toastify';

      import api from '../../../services/api';
      import history from '../../../services/history';
      import { formatPrice } from '../../../util/format';

      import { addToCartSuccess, updateAmountSuccess } from './actions';

      function* addToCart({ id }) {
        const productExists = yield select(state =>
          state.cart.find(p => p.id === id)
        );

        const stock = yield call(api.get, `/stock/${id}`);

        const stockAmount = stock.data.amount;
        const currentAmount = productExists ? productExists.amount : 0;

        const amount = currentAmount + 1;

        if (amount > stockAmount) {
          toast.error('Quantidade solicitada fora do estoque');
          return;
        }

        if (productExists) {
          yield put(updateAmountSuccess(id, amount));
        } else {
          const response = yield call(api.get, `/products/${id}`);

          const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
          };

          yield put(addToCartSuccess(data));

          history.push('/cart');
        }
      }

      function* updateAmount({ id, amount }) {
        if (amount <= 0) return;

        const stock = yield call(api.get, `/stock/${id}`);
        const stockAmount = stock.data.amount;

        if (amount > stockAmount) {
          toast.error('Quantidade solicitada fora do estoque');
          return;
        }

        yield put(updateAmountSuccess(id, amount));
      }

      export default all([
        takeLatest('@cart/ADD_REQUEST', addToCart),
        takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
      ]);



  5) In order to test it might be added the property -d on in order to start a delay during API call. For instance on the example bellow we are adding a delay of 2 seconds

    json-server server.json -p 3333 -w -d 2000


### React Hooks - Module 08 - Configurating structure

  1) Based on ESLint, Prettier configuration from module 05, create an react app called modulo08

  2) Add the library eslint-plugin-react-hooks as development dependency

    yarn add eslint-plugin-react-hooks -D

  3) On .eslintrc.js

    a) On the plugins section, after prettier, add the react-hooks plugin as per bellow

      plugins: [
        'react',
        'prettier',
        'react-hooks',
      ],

    b) On the rules section, add the new rules as per bellow

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      Note that the first rule will let us know about hooks errors and the second rule when we to use the hook use effect, it will warn us about pending dependencies. Basically these are the two rules for who is starting with rect hooks.


### React Hooks - Module 08 - Hook useState

  The useState is a hook which will belong to a function in order to create states on the function instead of create it in the class format.


  1) Change the App.js in order to have the following code:

    import React, { useState } from 'react';

    function App() {
      const [tech, setTech] = useState(['ReactJS', 'React Native']);
      const [newTech, setNewTech] = useState('');

      function handleAdd() {
        setTech([...tech, newTech]);
        setNewTech(''); // clean up the input text
      }

      return (
        <>
          <ul>
            {tech.map(t => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <input value={newTech} onChange={e => setNewTech(e.target.value)} />
          <button type="button" onClick={handleAdd}>
            Adicionar
          </button>
        </>
      );
    }

    export default App;

  
    Some considerations:

      a) Note that for this first example will create a functionality about techonologies list.
      
      b) Lets say we would like to store the list in a component state to after that add more information or change it.
      
      c) On the old way we needed transform the function in a class, define a variable state = {} and then we would access everything through of this.state.

      d) With the React Hooks its possible create states inside to a function.

      e) For each of information we'll need need a single state. On the old way we had a huge state object with all information stored on it.

      f) The useState return an array. On first position it returns the state itself(we have to give an name to it in order to use the state on the code; i.e: tech). On the second position its a function which serves to refresh the state information. On this case we also have to give a function name and then create it (i.e: setTech).

      g) On the old way we had the this.setState which was used to update all states at once. With hooks we use a single function by state in order to update only the state which is necessary. 


### React Hooks - Module 08 - Hook useEffect

  The useEffect is a hook which ovelap the previous application methods: componentDidMount, componentDidUpdate and componentWillUnmount.

  1) Change the App.js in order to have the following code:


    import React, { useState, useEffect } from 'react';

    function App() {
      const [tech, setTech] = useState([]);
      const [newTech, setNewTech] = useState('');

      function handleAdd() {
        setTech([...tech, newTech]);
        setNewTech(''); // clean up the input text
      }

      // This hook is being run at once. That one replace the componentDidMount
      useEffect(() => {
        const storageTech = localStorage.getItem('tech');

        if (storageTech) {
          setTech(JSON.parse(storageTech));
        }
      }, []);

      // This hook replace the componentDidUpdate
      useEffect(() => {
        localStorage.setItem('tech', JSON.stringify(tech));
      }, [tech]);

      return (
        <>
          <ul>
            {tech.map(t => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <input value={newTech} onChange={e => setNewTech(e.target.value)} />
          <button type="button" onClick={handleAdd}>
            Adicionar
          </button>
        </>
      );
    }

    export default App;



    Some considerations:


      a) componentDidUpdate

        Previously if we would like to store information on local storage whenever a state changed, we had to use the componentDidUpdate, compare the previous with current state then perform a local store setItem to add a new value to current one.

        Using the hook useEffect this process is more simple once its necessary create a call similar that: useEffect(() => <{function to be run}>, <when run the function>)

            useEffect(() => {
              localStorage.setItem('tech', JSON.stringify(tech));
            }, [tech]);

          i - The fist parameter is the function to be run

          ii - The second parameter is when the function will be run. It also is an array of dependencies which stay monitoring changes in certain variables. For instance, lets say I would like to monitor the variable tech. The hook will manage it to run the function of first parameter whenever the variable tech changed.

      
      b) componentDidMount

        In order to run the useEffect at once, similar to componentDidMount, we have to use almost the same sintax of item a. The variable for the second parameter must be ommited, It means that the array of dependencies regarding to "when it should be run" must be empty.

            useEffect(() => {
              const storageTech = localStorage.getItem('tech');

              if (storageTech) {
                setTech(JSON.parse(storageTech));
              }
            }, []);


      c) componentWillUnmount

        Although there will be few cases on this situation, in order to perform a function as soon as the component is no longer mounted its necessary only return a function from the useEffect components, However, basically that is done when is done for instance an event listener on the useEffect. It means that if we would like to remove that event listener on the moment of the componet no long exists we have to return a function similar to bellow

          return () => {
            document.removeEventListener()
          };
      
        
### React Hooks - Module 08 - Hook useMemo


  The useMemo is a hook which is used for when is necessary perform complex calculations for instance that is nedded return a function or value. It means actions which does not need be called whenever the component is rendered. Also, the useMemo returns a single value.


  1) Change the App.js in order to have the following code:

    import React, { useState, useEffect, useMemo } from 'react';

    function App() {
      const [tech, setTech] = useState([]);
      const [newTech, setNewTech] = useState('');

      function handleAdd() {
        setTech([...tech, newTech]);
        setNewTech(''); // clean up the input text
      }

      // This hook is being run at once. That one replace the componentDidMount
      useEffect(() => {
        const storageTech = localStorage.getItem('tech');

        if (storageTech) {
          setTech(JSON.parse(storageTech));
        }
      }, []);

      // This hook replace the componentDidUpdate
      useEffect(() => {
        localStorage.setItem('tech', JSON.stringify(tech));
      }, [tech]);

      const techSize = useMemo(() => tech.length, [tech]);

      return (
        <>
          <ul>
            {tech.map(t => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <strong>Você tem {techSize} tecnologias</strong>
          <br />
          <input value={newTech} onChange={e => setNewTech(e.target.value)} />
          <button type="button" onClick={handleAdd}>
            Adicionar
          </button>
        </>
      );
    }

    export default App;


### React Hooks - Module 08 - Hook useCallback


  The useCallback is similar to useMemo. However instead of return a single value it returns a function. This hook is used to avoid run function unnecessarily. For instance the function handleAdd
  only will be called once newTech and tech variables changed. The sintaxe of current function must be changed to became a arrow function. The useCallback is usually used in function which handle states, component properties of any type of variable inside.

  1) Change the App.js in order to have the following code:

    import React, { useState, useEffect, useMemo, useCallback } from 'react';

    function App() {
      const [tech, setTech] = useState([]);
      const [newTech, setNewTech] = useState('');

      const handleAdd = useCallback(() => {
        setTech([...tech, newTech]);
        setNewTech(''); // clean up the input text
      }, [newTech, tech]);

      // This hook is being run at once. That one replace the componentDidMount
      useEffect(() => {
        const storageTech = localStorage.getItem('tech');

        if (storageTech) {
          setTech(JSON.parse(storageTech));
        }
      }, []);

      // This hook replace the componentDidUpdate
      useEffect(() => {
        localStorage.setItem('tech', JSON.stringify(tech));
      }, [tech]);

      const techSize = useMemo(() => tech.length, [tech]);

      return (
        <>
          <ul>
            {tech.map(t => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <strong>Você tem {techSize} tecnologias</strong>
          <br />
          <input value={newTech} onChange={e => setNewTech(e.target.value)} />
          <button type="button" onClick={handleAdd}>
            Adicionar
          </button>
        </>
      );
    }

    export default App;


### React Hooks - Module 08 - Converting classes


    In order to learn more deeply the concepts of React Hooks we'll convert the classes of modulo07 application to functions using React Hooks. Said that, proceed with the steps:

    1) Add the library eslint-plugin-react-hooks as development dependency

      yarn add eslint-plugin-react-hooks -D

    3) On .eslintrc.js

      a) On the plugins section, after prettier, add the react-hooks plugin as per bellow

        plugins: [
          'react',
          'prettier',
          'react-hooks',
        ],

      b) On the rules section, add the new rules as per bellow

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

    4) On src/pages/Home/index.js transform the class into function using hooks as per bellow

        import React, { useState, useEffect } from 'react';
        import { connect } from 'react-redux';
        import { bindActionCreators } from 'redux';
        import { MdAddShoppingCart } from 'react-icons/md';
        import { formatPrice } from '../../util/format';
        import api from '../../services/api';

        import * as CartActions from '../../store/modules/cart/actions';

        import { ProductList } from './styles';

        function Home({ amount, addToCartRequest }) {
          const [products, setProducts] = useState([]);

          useEffect(() => {
            async function loadProducts() {
              const response = await api.get('products');

              const data = response.data.map(product => ({
                ...product,
                priceFormatted: formatPrice(product.price),
              }));

              setProducts(data);
            }

            loadProducts();
          }, []);

          function handleAddProduct(id) {
            addToCartRequest(id);
          }

          return (
            <ProductList>
              {products.map(product => (
                <li key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>

                  <button type="button" onClick={() => handleAddProduct(product.id)}>
                    <div>
                      <MdAddShoppingCart size={16} color="#FFF" />{' '}
                      {amount[product.id] || 0}
                    </div>
                    <span>ADICIONAR AO CARRINHO</span>
                  </button>
                </li>
              ))}
            </ProductList>
          );
        }

        const mapStateToProps = state => ({
          amount: state.cart.reduce((amount, product) => {
            amount[product.id] = product.amount;

            return amount;
          }, {}),
        });

        const mapDispatchToProps = dispatch =>
          bindActionCreators(CartActions, dispatch);

        export default connect(
          mapStateToProps,
          mapDispatchToProps
        )(Home);


### React Hooks - Module 08 - Hooks with Redux


  1) On src/components/Header/index.js proceed with changes in order to have the code bellow

    import React from 'react';
    import { Link } from 'react-router-dom';
    import { useSelector } from 'react-redux';

    import { MdShoppingBasket } from 'react-icons/md';

    import { Container, Cart } from './styles';

    import logo from '../../assets/images/logo.svg';

    export default function Header() {
      const cartSize = useSelector(state => state.cart.length);

      return (
        <Container>
          <Link to="/">
            <img src={logo} alt="Rocketshoes" />
          </Link>

          <Cart to="/cart">
            <div>
              <strong>Meu carrinho</strong>
              <span>{cartSize} itens</span>
            </div>
            <MdShoppingBasket size={36} color="#FFF" />
          </Cart>
        </Container>
      );
    }

  2) On src/pages/Home/index.js proceed with changes in order to have the code bellow

    import React, { useState, useEffect } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { MdAddShoppingCart } from 'react-icons/md';
    import { formatPrice } from '../../util/format';
    import api from '../../services/api';

    import * as CartActions from '../../store/modules/cart/actions';

    import { ProductList } from './styles';

    export default function Home() {
      const [products, setProducts] = useState([]);
      const amount = useSelector(state =>
        state.cart.reduce((sumAmount, product) => {
          sumAmount[product.id] = product.amount;

          return sumAmount;
        }, {})
      );

      const dispatch = useDispatch();

      useEffect(() => {
        async function loadProducts() {
          const response = await api.get('products');

          const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
          }));

          setProducts(data);
        }

        loadProducts();
      }, []);

      function handleAddProduct(id) {
        dispatch(CartActions.addToCartRequest(id));
      }

      return (
        <ProductList>
          {products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>

              <button type="button" onClick={() => handleAddProduct(product.id)}>
                <div>
                  <MdAddShoppingCart size={16} color="#FFF" />{' '}
                  {amount[product.id] || 0}
                </div>
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          ))}
        </ProductList>
      );
    }


  3) On src/pages/Cart/index.js proceed with changes in order to have the code bellow

    import React from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import {
      MdRemoveCircleOutline,
      MdAddCircleOutline,
      MdDelete,
    } from 'react-icons/md';

    import { formatPrice } from '../../util/format';

    import * as CartActions from '../../store/modules/cart/actions';

    import { Container, ProductTable, Total } from './styles';

    export default function Cart() {
      const total = useSelector(state =>
        formatPrice(
          state.cart.reduce((totalSum, product) => {
            return totalSum + product.price * product.amount;
          }, 0)
        )
      );

      const cart = useSelector(state =>
        state.cart.map(product => ({
          ...product,
          subtotal: formatPrice(product.price * product.amount),
        }))
      );

      const dispatch = useDispatch();

      function increment(product) {
        dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
      }

      function decrement(product) {
        dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
      }

      return (
        <Container>
          <ProductTable>
            <thead>
              <tr>
                <th />
                <th>PRODUTO</th>
                <th>QTD</th>
                <th>SUBTOTAL</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cart.map(product => (
                <tr>
                  <td>
                    <img src={product.image} alt={product.title} />
                  </td>
                  <td>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button" onClick={() => decrement(product)}>
                        <MdRemoveCircleOutline size={20} color="#7159c1" />
                      </button>
                      <input type="number" readOnly value={product.amount} />
                      <button type="button" onClick={() => increment(product)}>
                        <MdAddCircleOutline size={20} color="#7159c1" />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{product.subtotal}</strong>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(CartActions.removeFromCart(product.id))
                      }
                    >
                      <MdDelete size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>

          <footer>
            <button type="button">Finalizar pedido</button>

            <Total>
              <span>TOTAL</span>
              <strong>{total}</strong>
            </Total>
          </footer>
        </Container>
      );
    }



  4) Some considerations

    a) For whenever we need access an information from Redux state, we use the useSelector

    b) For whenever wee need dispatch a Redux action, we use the useDispatch


### GoBarber Web - Module 09 - Configurating structure


  1) Based on ESLint, Prettier configuration from module 05, create an react app called modulo08

  2) Add the library eslint-plugin-react-hooks as development dependency

    yarn add eslint-plugin-react-hooks -D

  3) On .eslintrc.js

    a) On the plugins section, after prettier, add the react-hooks plugin as per bellow

      plugins: [
        'react',
        'prettier',
        'react-hooks',
      ],

    b) On the rules section, add the new rules as per bellow

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      Note that the first rule will let us know about hooks errors and the second rule when we to use the hook use effect, it will warn us about pending dependencies. Basically these are the two rules for who is starting with rect hooks.


### GoBarber Web - Module 09 - API adjustments (module 03)

    Basically the changes which will be done are regarding to avatar. It means return the avatar information in order to be used on web application. Also will be necessary add the library cors to control the API acces by other application.

    1) Add the libray called cors.

      yarn add cors


    2) On src/app.js proceed with the following changes

      a) Import the cors after current import for path

        import cors from 'cors';

      b) On middlewares section, before the one for express, add the following line

        this.server.use(cors());

        Some considerations:

          i - For production, inside to cors(), will be necessary add the url of application which will be allowed to access the API. For example this would be a possible configuration for production:

          this.server.use(cors({ origin: 'http://gobarber.com.br' }));

          ii - For now we'll keep the cors() empty, once we are in development mode, meaning that any application might access the API.


    3) On src/app/controllers/SessionController.js proceed with following changes

      a) Import the File model

          import File from '../models/File';

      b) On the piece of code when is done the findOne for user, add an include as per bellow

          const user = await User.findOne({
            where: { email },
            include: [
              {
                model: File,
                as: 'avatar',
                attributes: ['id', 'path', 'url'],
              },
            ],
          });

      c) On piece of code which return the information, add the information regarding include (avatar) as per bellow

          const { id, name, avatar, provider } = user;
          return res.json({
            user: {
              id,
              name,
              email,
              provider,
              avatar,
            },
            token: jwt.sign({ id }, authConfig.secret, {
              expiresIn: authConfig.expiresIn,
            }),
          });


    4) On src/app/controllers/UserController.js proceed with following changes

      a) Import the file model

        import File from '../models/File';

      b) Replace the piece of code which perform the update and then return the information

        // Updating user information
        await user.update(req.body);

        const { id, name, avatar } = await User.findByPk(req.userId, {
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        });

        return res.json({
          id,
          name,
          email,
          avatar,
        });

    
    5) On src/app/controllers/ScheduleController.js proceed with following changes


        a) On piece of code regarding to findAll add an include as per bellow in order to return the user name

          const appointments = await Appointment.findAll({
            where: {
              provider_id: req.userId,
              canceled_at: null,
              date: {
                [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
              },
            },
            include: [
              {
                model: User,
                as: 'user',
                attributes: ['name'],
              },
            ],
            order: ['date'],
          });


### GoBarber Web - Module 09 - Routes configuration


  1) Add the libraries bellow

    yarn add react-router-dom
    yarn add history


  2) On src folder

    a) Create a folder called routes

      i - Inside to routes folder create a file called index.js as per bellow

        import React from 'react';
        import { Switch, Route } from 'react-router-dom';

        import SignIn from '../pages/SignIn';
        import SignUp from '../pages/SignUp';

        import Dashboard from '../pages/Dashboard';
        import Profile from '../pages/Profile';

        export default function Routes() {
          return (
            <Switch>
              <Route path="/" exact component={SignIn} />
              <Route path="/register" component={SignUp} />

              <Route path="/dashboard" component={Dashboard} />
              <Route path="/profile" component={Profile} />
            </Switch>
          );
        }


    b) Create a folder called pages and the folders/files as per bellow

      i - Dashboard and file index.js with the following code

        import React from 'react';

        // import { Container } from './styles';

        export default function Dashboard() {
          return <div />;
        }

      ii - Profile and file index.js with the following code

        import React from 'react';

        // import { Container } from './styles';

        export default function Profile() {
          return <div />;
        }


      iii - SignIn and file index.js with the following code

        import React from 'react';

        // import { Container } from './styles';

        export default function SignIn() {
          return <div />;
        }

      iv - SignUp and file index.js with the following code

        import React from 'react';

        // import { Container } from './styles';

        export default function SignUp() {
          return <div />;
        }


    c) Create a folder called services

      i - Inside to services folder create a file called history.js as per bellow

      
        import { createBrowserHistory } from 'history';

        const history = createBrowserHistory();

        export default history;



  3) On src/App.js import the routes and history as per bellow

      import React from 'react';

      import { Router } from 'react-router-dom';

      import Routes from './routes';

      import history from './services/history';

      function App() {
        return (
          <Router history={history}>
            <Routes />
          </Router>
        );
      }

      export default App;


### GoBarber Web - Module 09 - Reactotron configuration


  1) Add the the library reactotron-react-js

    yarn add reactotron-react-js

  2) On src folder

    a) Create a folder called config

      i - Inside to config folder create a file called ReactotronConfig.js as per bellow

          import Reactotron from 'reactotron-react-js';

          if (process.env.NODE_ENV === 'development') {
            const tron = Reactotron.configure().connect();

            tron.clear();

            console.tron = tron;
          }

    3) On src/App.js import the ReactotronConfig

      import './config/ReactotronConfig';



### GoBarber Web - Module 09 - Private routes


  1) In order to proceed with property validation and avoid eslint warn, add the library prop-types

    yarn add prop-types

  2) In order to avoid eslint warn about prop spreading is forbidden, on .eslintrc.js file add on section rule the line bellow

    "react/jsx-props-no-spreading": "off",

  3) On src/routes

    a) Create a route component called Route.js as per bellow. This component will be responsible for manage the private routes.

      import React from 'react';
      import PropTypes from 'prop-types';
      import { Route, Redirect } from 'react-router-dom';

      export default function RouteWrapper({
        component: Component,
        isPrivate,
        ...rest
      }) {
        const signed = false;

        if (!signed && isPrivate) {
          return <Redirect to="/" />; // redirect to Login
        }

        if (signed && !isPrivate) {
          return <Redirect to="/dashboard" />;
        }

        return <Route {...rest} component={Component} />;
      }

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};


    b) Change the index.js as per bellow

      i - Exclude the Route from import related to react-router-dom

        import { Switch } from 'react-router-dom';

      ii - Import the Route from Route.js

        import Route from './Route';

      iii - Add on routes dashboard and drofile the property isPrivate

        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/profile" component={Profile} isPrivate />



### GoBarber Web - Module 09 - Layouts by page

  1) Add the libray styled-components

    yarn add styled-components
  
  2) On src/pages

    a) Create a folder called _layouts

    b) Inside to folder _layouts

      i - Create a folder called auth and
      
        1) Create a file called index.js as per bellow

          import React from 'react';
          import PropTypes from 'prop-types';

          import { Wrapper } from './styles';

          export default function AuthLayout({ children }) {
            return <Wrapper>{children}</Wrapper>;
          }

          AuthLayout.propTypes = {
            children: PropTypes.element.isRequired,
          };


        2) Create a file styles.js as per bellow

          import styled from 'styled-components';

          export const Wrapper = styled.div`
            height: 100%;
            background: linear-gradient(-90deg, #7159c1, #ab59c1);
            overflow-y: auto;
          `;

      ii - Create folder called default and
      
        1) Create a file called index.js as per bellow

          import React from 'react';
          import PropTypes from 'prop-types';

          import { Wrapper } from './styles';

          export default function DefaultLayout({ children }) {
            return <Wrapper>{children}</Wrapper>;
          }

          DefaultLayout.propTypes = {
            children: PropTypes.element.isRequired,
          };


        2) Create a file called styles.js as per bellow

          import styled from 'styled-components';

          export const Wrapper = styled.div`
            height: 100%;
            background: #333;
          `;


  3) On src/routes/Route.js proceed as per bellow

    a) Import the layouts AuthLayout and DefaultLayout

      import AuthLayout from '../pages/_layouts/auth';
      import DefaultLayout from '../pages/_layouts/default';

    b) Before define the routes its necessary create a conditional to know which one layout to use and then adapt the return to contemplate it. Said that proceed as per bellow

      return (
        <Route
          {...rest}
          render={props => (
            <Layout>
              <Component {...props} />
            </Layout>
          )}
        />
      );


### GoBarber Web - Module 09 - Global styles


  1) Create under src
  
    a) Crete a folder called styles and then

      i - Create a file called global.js as per bellow

        import { createGlobalStyle } from 'styled-components';

        export default createGlobalStyle`
          @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

          * {
            margin: 0;
            padding: 0;
            outline: 0;
            box-sizing: border-box;
          }

          *:focus {
            outline: 0;
          }

          html, body, #root {
            height: 100%;
          }

          body {
            -webkit-font-smoothing: antialiased;
          }

          body, input, button {
            font: 14px 'Roboto', sans-serif;
          }

          a {
            text-decoration: none;
          }

          ul {
            list-style: none;
          }

          button {
            cursor: pointer;
          }

        `;


    b) On App.js

      i - Import the global.js

        import GlobalStyle from './styles/global';

      ii - Add the GlobalStyle inside to Router. Note that it might be in any place of application. The reason for choice the Router is because here is the start point of routes for application.

        <Router history={history}>
          <Routes />
          <GlobalStyle />
        </Router>


### GoBarber Web - Module 09 - Using Root Import


  1) Add the libraries bellow. These libs will allow the navigation by files in a simple way without using too many ../ for proceed with imports

    yarn add customize-cra react-app-rewired -D
    yarn add babel-plugin-root-import -D
    yarn add eslint-import-resolver-babel-plugin-root-import -D

  
  2) On .eslintrc.js, after rules section add a new one called settings as per bellow

    settings: {
      "import/resolver": {
        "babel-plugin-root-import": {
          rootPathSuffix: "src"
        }
      }
    }

  3) On root folder create a file called config-overrides.js with the following content

    const { addBabelPlugin, override } = require('customize-cra');

    module.exports = override(
      addBabelPlugin([
        'babel-plugin-root-import',
        {
          rootPathSuffix: 'src',
        },
      ])
    );

    Some considertions:
    
      a) This file is loaded automatically by the library react-app-rewired

      b) The notation used on the file is Node.js

  
  4) On root folder create a file called jsconfig.json with the following content.

    {
      "compilerOptions": {
        "baseUrl": "src",
        "paths": {
          "~/*": ["*"]
        }
      }
    }


    Note that this file is being created in order to allow the utilizaton of functionality ctrl + left mouse button to open files when the path have the ~ instead of ../

  
  5) On src folder replace the javascript files as per bellow


    from

      ../ or ../../ or ../../../

    to

      ~/

    Note that the ~ means the current src folder


  6) On package.json, on scripts section

    a) Replace the lines regarding to start, build and test to use react-app-rewired instead of react-scripts  

       "scripts": {
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject"
      },  


  7) Restart the application by run the yarn start


### GoBarber Web - Module 09 - Authentication Stylization

  Note that as the styles of siging and signup will be shared, it was choosen to setup it on styles.js from auth folder (which is shared for both one)

  1) Add the library polished

    yarn add polished

  2) On src/pages/_layouts/auth/styles.js proceed with the following configuration

    import styled from 'styled-components';
    import { darken } from 'polished';

    export const Wrapper = styled.div`
      height: 100%;
      background: linear-gradient(-90deg, #7159c1, #ab59c1);
      display: flex;
      justify-content: center;
      align-items: center;
    `;

    export const Content = styled.div`
      width: 100%;
      max-width: 315px;
      text-align: center;

      form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
          background: rgba(0, 0, 0, 0.1);
          border: 0;
          border-radius: 4px;
          height: 44px;
          padding: 0 15px;
          color: #fff;
          margin: 0 0 10px;

          &::placeholder {
            color: rgba(255, 255, 255, 0.7);
          }
        }

        button {
          margin: 5px 0 0;
          height: 44px;
          background: #3b9eff;
          font-weight: bold;
          color: #fff;
          border: 0;
          border-radius: 4px;
          font-size: 16px;
          transition: background 0.2s;

          &:hover {
            background: ${darken(0.03, '#3b9eff')};
          }
        }

        a {
          color: #fff;
          margin-top: 15px;
          font-size: 16px;
          opacity: 0.8;

          &:hover {
            opacity: 1;
          }
        }
      }
    `;


  3) On src/pages/_layouts/auth/index.js procee with following configuration

    a) Add the value Content to import from styles file

      import { Wrapper, Content } from './styles';

    b) Add the Content inside to Wrapper and around to children

      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>

  4) On src/pages/SignIn/index.js replace the content as per bellow

    import React from 'react';
    import { Link } from 'react-router-dom';

    import logo from '~/assets/logo.svg';

    export default function SignIn() {
      return (
        <>
          <img src={logo} alt="GoBarber" />
          <form>
            <input type="email" placeholder="Seu e-mail" />
            <input type="password" placeholder="Sua senha secreta" />

            <button type="submit">Acessar</button>
            <Link to="/register">Criar conta gratuita</Link>
          </form>
        </>
      );
    }


  5) On src/pages/SignUp/index.js replace the content as per bellow

    import React from 'react';
    import { Link } from 'react-router-dom';

    import logo from '~/assets/logo.svg';

    export default function SignUp() {
      return (
        <>
          <img src={logo} alt="GoBarber" />
          <form>
            <input placeholder="Nome completo" />
            <input type="email" placeholder="Seu e-mail" />
            <input type="password" placeholder="Sua senha secreta" />

            <button type="submit">Criar conta</button>
            <Link to="/">Já tenho login</Link>
          </form>
        </>
      );
    }


### GoBarber Web - Module 09 - Using Unform

  By default on react when we would like to get the information from input, store it and handle it we need create a state for each one and monitor the changes which occur using the onChange method. The Rocketseat created a library to facilidate this process also working on concept of perfomance in the forms. This libray is the one called: @rocketseat/unform. On the next section there will be some steps about how to use it. 
  
  
  1) Add the library bellow

    yarn add @rocketseat/unform

  
  2) On src/pages/SignIn/index.js and src/pages/SignUp/index.js  proceed with the following configurations

    a) Import the library @rocketseat/unform as per bellow

      import { form, input } from '@rocketseat/unform';

    b) Replace the tags form and input to Form and Input

    c) Add an attribute name in each Input as per bellow

      i - SignIn

        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

      ii - SignUp

        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

    d) On Form add the method onSubmit which should call a function called handleSubmit

      <Form onSubmit={handleSubmit}>
  
  
  ### GoBarber Web - Module 09 - Validations


  1) Add the library yup. This is library is used for validation in both frontend and backend. This uses schema validation through of chaining.

    yarn add yup


  2) On src/pages/SignIn/index.js and src/pages/SignUp/index.js proceed with the following configurations
 
    a) Import the yup as per bellow

      import * as Yup from 'yup' 

    b) Before the function SignIn, defines the schema validation as per bellow.

       i - SignIn

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Insira um e-mail válido')
            .required('O e-email é obrigatório'),
          password: Yup.string().required('A senha é obrigatória'),
        });

      ii - SignUp

        const schema = Yup.object().shape({
          name: Yup.string().required('O nome é obrigatório'),
          email: Yup.string()
            .email('Insira um e-mail válido')
            .required('O e-email é obrigatório'),
          password: Yup.string()
            .min(6, 'A senha precisa ter no mínimo 6 caracteres')
            .required('A senha é obrigatória'),
        });

    c) Pass the schema defined on item b to property called also schema inside to form.

      <Form schema={schema} onSubmit={handleSubmit}>

  3) On src/pages/_layouts/auth/styles.js proceed with following configuration

    a) Inside to form, between input and button,  add a span styles as per bellow

      span {
        color: #fb6f91;
        align-self: flex-start;
        margin: 0 0 10px;
        font-weight: bold;
      }


### GoBarber Web - Module 09 - Configuration store

  As the session information and the use information might be acessed for several parts of application we'll store it by using redux. Said that on next steps will be cofigured all backstage for application works with redux.

  1) Add the libraries bellow

    yarn add redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer

  2) On src

    a) Create a folder called store, then

       i - Create a file called index.js as per bellow

          import createSagaMiddleware from 'redux-saga';
          import createStore from './createStore';

          import rootReducer from './modules/rootReducer';
          import rootSaga from './modules/rootSaga';

          const sagaMonitor =
            process.env.NODE_ENV === 'development'
              ? console.tron.createSagaMonitor()
              : null;

          const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

          const middlewares = [sagaMiddleware];

          const store = createStore(rootReducer, middlewares);

          sagaMiddleware.run(rootSaga);

          export default store;


       ii - Create a file called createStore as per bellow

          import { createStore, compose, applyMiddleware } from 'redux';

          export default (reducers, middlewares) => {
            const enhancer =
              process.env.NODE_ENV === 'development'
                ? compose(
                    console.tron.createEnhancer(),
                    applyMiddleware(...middlewares)
                  )
                : applyMiddleware(...middlewares);

            return createStore(reducers, enhancer);
          };


       iii - Create a folder called modules

        1) Create a folder called auth, then
        
          a) Create a file called actions.js and keep it empty for now.


          b) Create a file called sagas.js as per bellow

            import { all } from 'redux-saga/effects';

            export default all([]);


          c) Create a file called reducer.js as per bellow

            const INITIAL_STATE = {};

            export default function auth(state = INITIAL_STATE, action) {
              switch (action.type) {
                default:
                  return state;
              }
            }


        2) Create a file called rootReducer.js as per bellow 

          import { combineReducers } from 'redux';

          import auth from './auth/reducer';

          export default combineReducers({
            auth,
          });


        3) Create a file called rootSaga.js as per bellow

          import { all } from 'redux-saga/effects';

          import auth from './auth/sagas';

          export default function* rootSaga() {
            return yield all([auth]);
          }


    b) On config/ReactotronConfig.js proceed as per bellow

      i - Import the reactotronRedux and reactotronSaga

        import { reactotronRedux } from 'reactotron-redux';
        import reactotronSaga from 'reactotron-redux-saga';

      ii - Change the variable tron as per bellow

        const tron = Reactotron.configure()
          .use(reactotronRedux())
          .use(reactotronSaga())
          .connect();

    c) On App.js proceed with the following changes

      i - Import the Provider from react-redux

        import { Provider } from 'react-redux';

      ii - Add the Provider around application

        <Provider>
          <Router history={history}>
            <Routes />
            <GlobalStyle />
          </Router>
        </Provider>

      iii - Import store from store folder. Note that it must be after import of ReactotronConfig in order to have access to functionalities about sagaMonitor or createEnhancer

        import store from './store';

      iv - Pass the store variable to Provider

        <Provider store={store}>
          <Router history={history}>
            <Routes />
            <GlobalStyle />
          </Router>
        </Provider>


### GoBarber Web - Module 09 - Authentication

  1) Add the libray axios

    yar add axios

  2) On src/services
  
    a) Create a file called api.js as per bellow

      import axios from 'axios';

      const api = axios.create({
        baseURL: 'http://localhost:3333',
      });

      export default api;

  3) On src/store/modules/auth/actions.js proceed as per bellow

    export function signInRequest(email, password) {
      return {
        type: '@auth/SIGN_IN_REQUEST',
        payload: { email, password },
      };
    }

    export function signInSuccess(token, user) {
      return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { token, user },
      };
    }

    export function signFailure() {
      return {
        type: '@auth/SIGN_FAILURE',
      };
    }


  4) On src/store/modules/auth/sagas.js proceed as per bellow

    import { takeLatest, call, put, all } from 'redux-saga/effects';

    import history from '~/services/history';
    import api from '~/services/api';

    import { signInSuccess } from './actions';

    export function* signIn({ payload }) {
      const { email, password } = payload;

      const response = yield call(api.post, 'sessions', {
        email,
        password,
      });

      const { token, user } = response.data;

      if (!user.provider) {
        console.tron.error('Usuário não é prestador');
        return;
      }

      yield put(signInSuccess(token, user));

      history.push('/dashboard');
    }

    export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);


  5) On src/pages/SignIn/index.js proceed as per bellow

    a) Import the useDispatch from react-redux

      import { useDispatch } from 'react-redux';

    b) Import the signInRequest from actions

      import { signInRequest } from '~/store/modules/auth/actions';

    c) Before function handleSubmit, add the line bellow

      const dispatch = useDispatch();

    d) Replace the content of function handleSubmit as per bellow

      function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
      }

  6) On src/store/modules/auth/reducer.js replace the code as per bellow

    import produce from 'immer';

    const INITIAL_STATE = {
      token: null,
      signed: false,
      loading: false,
    };

    export default function auth(state = INITIAL_STATE, action) {
      switch (action.type) {
        case '@auth/SIGN_IN_SUCCESS':
          return produce(state, draft => {
            draft.token = action.payload.token;
            draft.signed = true;
          });
        default:
          return state;
      }
    }

  
  7) On src/routes/Route.js proceed as per bellow

    a) Import the store

      import store from '~/store';

    b) Replace the const signed as per bellow

      const { signed } = store.getState().auth;


### GoBarber Web - Module 09 - Storing profile


  1) On src/store/modules create a folder called user then

    a) Create a file called actions.js and keep as empty for now

    b) Create a file called reducer.js as per bellow

      import produce from 'immer';

      const INITIAL_STATE = {
        profile: null,
      };

      export default function user(state = INITIAL_STATE, action) {
        switch (action.type) {
          case '@auth/SIGN_IN_SUCCESS':
            return produce(state, draft => {
              draft.profile = action.payload.user;
            });
          default:
            return state;
        }
      }


    c) Create a file called sagas.js as per bellow

      import { all } from 'redux-saga/effects';

      export default all([]);

  2) On src/store/modules/rootReducer.js proceed as per bellow

    a) Import the user reducer

      import user from './user/reducer';

    b) Add the user to combineReducers

      export default combineReducers({
        auth,
        user,
      });

  3) On src/store/modules/rootSaga.js proceed as per bellow

    a) Import the user sagas

      import user from './user/sagas';

    b) Add the user to all array

      export default function* rootSaga() {
        return yield all([auth, user]);
      }


### GoBarber Web - Module 09 - Persisting Authentication


  1) Add the library called redux-persist

    yar add redux-persist


  2) On src/store create a file called persistReducers.js as per bellow

    import storage from 'redux-persist/lib/storage';
    import { persistReducer } from 'redux-persist';

    export default reducers => {
      const persistedReducer = persistReducer(
        {
          key: 'gobarber',
          storage,
          whitelist: ['auth', 'user'],
        },
        reducers
      );

      return persistedReducer;
    };


  3) On src/store/index.js proceed with changes as per bellow

    a) Import the method called persistStore from redux-persist

      import { persistStore } from 'redux-persist';

    b) Import the function persistReducers

      import persistReducers from './persistReducers';

    c) Change the constant store as per bellow

      const store = createStore(persistReducers(rootReducer), middlewares);

    d) After constant store create a new one called persistor as per bellow

      const persistor = persistStore(store);

    e) Change the export default store as per bellow

      export { store, persistor };


  4) On src/App.js proceed with the following changes

    a) As per bellow replace the current import:  import store from './store';

      import { store, persistor } from './store';

    b) After curret import regarding to react import PersistGate as per bellow

      import { PersistGate } from 'redux-persist/integration/react';

    c) Add the PersistGate around to Router as per bellow

      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Routes />
            <GlobalStyle />
          </Router>
        </PersistGate>
      </Provider>

      A brief explanation about PersistGate on this application. It basically will render the content of routes only after get the information from application storage.


  5) On src/routes/Route.js proceed with following changes

    a) As per bellow replace the current import: import store from '~/store';

      import { store } from '~/store';



### GoBarber Web - Module 09 - Authentication loadign


  1) On src/store/modules/auth/reducer.js, function auth,  add a SING_IN_REQUEST AND SIGN_FAILURE and add the loading variable on SINGN_IN_SUCCESS as per bellow

    export default function auth(state = INITIAL_STATE, action) {
      return produce(state, draft => {
        switch (action.type) {
          case '@auth/SIGN_IN_REQUEST': {
            draft.loading = true;
            break;
          }
          case '@auth/SIGN_IN_SUCCESS': {
            draft.token = action.payload.token;
            draft.signed = true;
            draft.loading = false;
            break;
          }
          case '@auth/SIGN_FAILURE': {
            draft.loading = false;
            break;
          }
          default:
        }
      });
    }


  2) On src/pages/SignIn/index.js proceed with changes as per bellow

    a) Import the useSelector from react-redux

      import { useDispatch, useSelector } from 'react-redux';

    b) Inside to SignIn function define a variable called loading as per bellow

      const loading = useSelector(state => state.auth.loading);

    c) On submit button add ternary condition as per bellow

      <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>


  3) On src/store/modules/auth/sagas.js
  
    a) Import the signFailure from actions

      import { signInSuccess, signFailure } from './actions';

    b) On function signIn, add a try/catch as per bellow

      try {
        const { email, password } = payload;

        const response = yield call(api.post, 'sessions', {
          email,
          password,
        });

        const { token, user } = response.data;

        if (!user.provider) {
          console.tron.error('Usuário não é prestador');
          return;
        }

        yield put(signInSuccess(token, user));

        history.push('/dashboard');
      } catch (error) {
        yield put(signFailure());
      }

  
### GoBarber Web - Module 09 - Showing messages using toasts


  In order to have the warning/error messages more friendly, the library toasts was used.

    
    1) Add the library react-tostify

      yar add react-tostify

    2) On src/App.js

      a) Import from react-tostify the method ToastContainer

        import { ToastContainer } from 'react-toastify';

      b) Add the ToasContainer after GlobalStyle as per bellow

        <ToastContainer autoClose={3000} />

    3) On src/styles/global.js proceed with the following changes

      a) Import the react toastify styles


    4) On src/store/modules/auth/sagas.js

      a) Import the toast from react-toastify

        import { toast } from 'react-toastify';

      b) Replace the console.tron.error by toast.error

        toast.error('Usuário não é prestador');

      c) Add on cath error the message bellow

        toast.error('Falha na autenticação, verifique seus dados!');

      d) On user provider validation, before the return, add the line bellow

         yield put(signFailure());


### GoBarber Web - Module 09 - SignUp on application


  1) On src/store/modules/auth/actions.js proceed as per bellow

    a) Create a function called signUpRequest

      export function signUpRequest(name, email, password) {
        return {
          type: '@auth/SIGN_UP_REQUEST',
          payload: { name, email, password },
        };
      }

  
  2) On src/pages/SignUp/index.js proceed as per bellow

    a) Import the useDispatch from react-redux

      import { useDispatch } from 'react-redux';

    b)  Import the signUpRequest from actions

      import { signUpRequest } from '~/store/modules/auth/actions';

    c) Inside to SignUp function

      i - Create a variable called dispatch as per bellow

        const dispatch = useDispatch();

      ii - Change the signature of handleSubmit to use the name, email and password

        function handleSubmit({ name, email, password })

      iii - Replace the console.tron.log(data);, inside to handlSubmit, as per bellow

        dispatch(signUpRequest(name, email, password));


  3) On src/store/modules/auth/sagas.js proceed as per bellow

    a) Create a function called signUp as per bellow

      export function* signUp({ payload }) {
      try {
          const { name, email, password } = payload;

          yield call(api.post, 'users', {
            name,
            email,
            password,
            provider: true,
          });

          history.push('/');
        } catch (error) {
          toast.error('Falha no cadastro, verifique seus dados!');

          yield put(signFailure());
        }
      }


    b) Add on export default all a new takeLatest as per bellow

      export default all([
        takeLatest('@auth/SIGN_IN_REQUEST', signIn),
        takeLatest('@auth/SIGN_UP_REQUEST', signUp),
      ]);

    

### GoBarber Web - Module 09 - Requests authenticated

  These steps are the basis to JWT authentication works on client side. Nowadays we are storing the user token on Redux state in a variable also called token. However, would be better perform a way to all api requests add it token inside to header of authorization on the axios.

  Note that JWT (JSON Web Token) is a standard method (RCT 7519) from industry to perform authentication among two parts (for instance backend and frontend) byt using a token assined which authenticate a web request. Basically this token is a code em Base64 which store JSON objects with all data which allows the authentication request. 

  1) On src/store/modules/auth/sagas.js proceed as per bellow


    a) On SignIn function before yield regarding to success add the line bellow. It means set a header called Authorization.

      api.defaults.headers.Authorization = `Bearer ${token}`;

      Note that the api.default is used basically to set information used in all requests.

    b) On export default all add a new takeLatest as per bellow

      takeLatest('persist/REHYDRATE', setToken),

    c) Before, export default all, create a function called setToken as per bellow

      export function setToken({ payload }) {
        if (!payload) return;

        const { token } = payload.auth;

        if (token) {
          api.defaults.headers.Authorization = `Bearer ${token}`;
        }
      }


    Note that the steps b and c are necessary to guarantee the set of Authorization also when the user pass by login authentication. That will be possible because the Redux persist only get available on screen after recovery the data from storage. It meas that the user token always will be availabled once the user is logged. It means that from now on all api request will send the authentication token.


  2) In order to if a certain api will be done with user toke, lets test it changing the src/pages/Dashboard/index.js as per bellow

    a) Import the api

      import api from '~/services/api';

    b) Inside to Dashboard function, add an API call as per bellow

      api.get('appointments');


### GoBarber Web - Module 09 - Header configuration

  Note: During developtment, a good approach regarding to temporary avatar images, is to use the http://avatars.adorable.io/.

  1) Change the src/pages/_layouts/default/styles.js replacing the current background configuration to

    background: linear-gradient(-90deg, #7159c1, #ab59c1);

  2) On src folder

    a) Create a folder called components, then

      i - Create a folder called Header, then 

        1) Create a file called styles.js as per bellow

          import styled from 'styled-components';

          export const Container = styled.div`
            background: #fff;
            padding: 0 30px;
          `;

          export const Content = styled.div`
            height: 64px;
            max-width: 900px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;

            nav {
              display: flex;
              align-items: center;

              img {
                margin-right: 20px;
                padding-right: 20px;
                border-right: 1px solid #eee;
              }

              a {
                font-weight: bold;
                color: #7159c1;
              }
            }

            aside {
              display: flex;
              align-items: center;
            }
          `;

          export const Profile = styled.div`
            display: flex;
            margin-left: 20px;
            padding-left: 20px;
            border-left: 1px solid #eee;

            div {
              text-align: right;
              margin-right: 10px;

              strong {
                display: block;
                color: #333;
              }

              a {
                display: block;
                margin-top: 2px;
                font-size: 12px;
                color: #999;
              }
            }

            img {
              height: 32px;
              border-radius: 50%;
            }
          `;


        2) Create a file called index.js as per bellow

          import React from 'react';
          import { Link } from 'react-router-dom';

          import logo from '~assets/logo-purple.svg';

          import { Container, Content, Profile } from '~/components/Header/styles';

          export default function Header() {
            return (
              <Container>
                <Content>
                  <nav>
                    <img src={logo} alt="GoBarber" />
                    <Link to="/dashboard">DASHBOARD</Link>
                  </nav>

                  <aside>
                    <Profile>
                      <div>
                        <strong>Adriano Souza</strong>
                        <Link to="/profile">Meu perfil</Link>
                      </div>
                      <img
                        src="https://api.adorable.io/avatars/50/abott@adorable.png"
                        alt="Adriano Souza"
                      />
                    </Profile>
                  </aside>
                </Content>
              </Container>
            );
          }


  3) On src/pages/_layouts/default/index.js proceed with changes as per bellow

    a) Import the Header

      import Header from '~/components/Header';

    b) Add the Header before the {children}

      <Wrapper>
        <Header />
        {children}
      </Wrapper>


### GoBarber Web - Module 09 - Styling notification

  1) Add the libraries bellow
  
    a) react-icons

      yarn add react-icons

    b) react-perfect-scrollbar

      yarn add react-perfect-scrollbar

      Note that 
  
  2) On src/components

    a) Create a folder called Notifications

      i - Create a file called index.js as per bellow

        import React from 'react';

        import { MdNotifications } from 'react-icons/md';

        import {
          Container,
          Badge,
          NotificationList,
          Scroll,
          Notification,
        } from './styles';

        export default function Notifications() {
          return (
            <Container>
              <Badge hasUnread>
                <MdNotifications color="#7159c1" size={20} />
                <NotificationList>
                  <Scroll>
                    <Notification unread>
                      <p>Você possui um novo agendamento para amanhã</p>
                      <time>há 2 dias</time>
                      <button type="button">Marcar como lida</button>
                    </Notification>
                    <Notification>
                      <p>Você possui um novo agendamento para amanhã</p>
                      <time>há 2 dias</time>
                      <button type="button">Marcar como lida</button>
                    </Notification>
                    <Notification>
                      <p>Você possui um novo agendamento para amanhã</p>
                      <time>há 2 dias</time>
                      <button type="button">Marcar como lida</button>
                    </Notification>
                    <Notification>
                      <p>Você possui um novo agendamento para amanhã</p>
                      <time>há 2 dias</time>
                      <button type="button">Marcar como lida</button>
                    </Notification>
                    <Notification>
                      <p>Você possui um novo agendamento para amanhã</p>
                      <time>há 2 dias</time>
                      <button type="button">Marcar como lida</button>
                    </Notification>
                    <Notification>
                      <p>Você possui um novo agendamento para amanhã</p>
                      <time>há 2 dias</time>
                      <button type="button">Marcar como lida</button>
                    </Notification>
                  </Scroll>
                </NotificationList>
              </Badge>
            </Container>
          );
        }


      ii - Create a file called styles.js as per bellow

        import styled, { css } from 'styled-components';
        import PerfectScrollbar from 'react-perfect-scrollbar';
        import { lighten } from 'polished';

        export const Container = styled.div`
          position: relative;
        `;

        export const Badge = styled.button`
          background: none;
          border: 0;
          position: relative;

          ${props =>
            props.hasUnread &&
            css`
              &::after {
                position: absolute;
                right: 0;
                top: 0;
                width: 8px;
                height: 8px;
                background: #ff892e;
                content: '';
                border-radius: 50%;
              }
            `};
        `;

        export const NotificationList = styled.div`
          position: absolute;
          width: 260px;
          left: calc(50% - 130px);
          top: calc(100% + 30px);
          background: rgba(0, 0, 0, 0.6);
          border-radius: 4px;
          padding: 15px 5px;
          display: ${props => (props.visible ? 'block' : 'none')};

          &::before {
            content: '';
            position: absolute;
            left: calc(50% - 20px);
            top: -20px;
            width: 0;
            height: 0;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-bottom: 20px solid rgba(0, 0, 0, 0.6);
          }
        `;

        export const Scroll = styled(PerfectScrollbar)`
          max-height: 260px;
          padding: 5px 15px;
        `;

        export const Notification = styled.div`
          color: #fff;

          & + div {
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }

          p {
            font-size: 13px;
            line-height: 18px;
          }

          time {
            display: block;
            font-size: 12px;
            opacity: 0.6;
            margin-bottom: 5px;
          }

          button {
            font-size: 12px;
            border: 0;
            background: none;
            color: ${lighten(0.2, '#7159c1')};
          }

          ${props =>
            props.unread &&
            css`
              &::after {
                content: '';
                display: inline-block
                width: 8px;
                height: 8px;
                background: #ff892e;
                border-radius: 50%;
                margin-left: 10px;
              }
            `}
        `;



        Some considerations:

        a) By the utilization of library react-perfect-scrollbar, in order to functionality runs as expected, its necessary utilize the import 'react-perfect-scrollbar/dist/css/styles.css'; (which are described on site: https://github.com/goldenyz/react-perfect-scrollbar). Said that, proceed also as per bellow

          i - On src/styles/global.js, add the line import bellow

            import 'react-perfect-scrollbar/dist/css/styles.css';


  3) On src/components/Header/index.js

    a) Before logo import, perform the import of the Notifications as per bellow

      import Notifications from '~/components/Notifications';

    b) Before the Profiles add the Notifications as per bellow

      <Notifications />


### GoBarber Web - Module 09 - Notifications


  1) Add the library date-fns@next

    yarn add date-fns@next

    Note that the @next is guarantee the most recent version

  2) On src/components/Notifications/index.js proceed with changes as per bellow

    a) Create a state to store whether the notifications is visible or not.

      i - Import the useState from react

        import React, { useState } from 'react';

      ii - Inside to Notifications function

        1) Create the states called visible  as per bellow

          const [visible, setVisible] = useState(false);

        2) Add the state visible to NotificationList as per bellow

          <NotificationList visible={visible}>

        3) On Badge, as it is a button, add event onClick as per bellow

          <Badge onClick={handleToggleVisible} hasUnread>

        4) After states declarations create a function called handleToggleVisible as per bellow

          function handleToggleVisible() {
            setVisible(!visible);
          }

    a) Proceed as per bellow to load the notifications from api

      i - Import the api after react-icons as per bellow

        import api from '~/services/api';

      ii - In order to dispatch the api once component is mounted
      
        1) Import the useEffect from react

          import React, { useState, useEffect } from 'react';

        2) Import the parseISO and formatDistance from date-fns

          import { parseISO, formatDistance } from 'date-fns';

        3) Import the portuguese idioma from date-fns/locale/pt

          import pt from 'date-fns/locale/pt';

        4) Create a state for notifications

          const [notifications, setNotifications] = useState([]);

        5) Using the hook useEffect, dispatch an action as per bellow which should contemplate a function called loadNotifications (add it after notifications state variable)

          useEffect(() => {
            async function loadNotifications() {
              const response = await api.get('notifications');

              const data = response.data.map(notification => ({
                ...notification,
                timeDistance: formatDistance(
                  parseISO(notification.createdAt),
                  new Date(),
                  { addSuffix: true, locale: pt }
                ),
              }));

              setNotifications(data);
            }

            loadNotifications();
          }, []);

        6) Using the state notifications, perform a map inside to Scroll as per bellow

          <Scroll>
            {notifications.map(notification => (
              <Notification key={notification._id} unread>
                <p>{notification.content}</p>
                <time>{notification.timeDistance}</time>
                <button type="button">Marcar como lida</button>
              </Notification>
            ))}
          </Scroll>

    b) Proceed as per bellow to mark notifictions as read

      i - Create a async function called handleMarkAsRead as per bellow

        async function handleMarkAsRead(id) {
          await api.put(`notifications/${id}`);

          setNotifications(
            notifications.map(notification =>
              notification._id === id ? { ...notification, read: true } : notification
            )
          );
        }

      ii - Add the handleMarkAsRead on onClick of Notification button

        <button
          type="button"
          onClick={() => handleMarkAsRead(notification._id)}
        >
          Marcar como lida
        </button>

    c) Proceed as per bellow to mark notifictions bullet on Header visiable or not. It means that it only should be visible if the user does have notififictions not read.

      i - Import the hook useMemo from react

        import React, { useState, useEffect, useMemo } from 'react';

      ii - Create a variable called hasUnreaad as per bellow

        const hasUnread = useMemo(
          () => !!notifications.find(notification => notification.read === false),
          [notifications]
        );

      iii - Pass the hasUnread variable to hasUnread property on Badge as per bellow

        <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>

      iv - Add a condition to Notification button to only be available if do have notifications not read

          <NotificationList visible={visible}>
            <Scroll>
              {notifications.map(notification => (
                <Notification key={notification._id} unread={!notification.read}>
                  <p>{notification.content}</p>
                  <time>{notification.timeDistance}</time>
                  {!notification.read && (
                    <button
                      type="button"
                      onClick={() => handleMarkAsRead(notification._id)}
                    >
                      Marcar como lida
                    </button>
                  )}
                </Notification>
              ))}
            </Scroll>
          </NotificationList>


  3) On src/components/Notifications/styles.js proceed with following changes

    a) Change the NotificationList as per bellow

      i - Add a display to it based on visible property

        display: ${props => (props.visible ? 'block' : 'none')}


### GoBarber Web - Module 09 - Profile page


  1) On src/pages/Profile create a file called styles.js as per bellow

    import styled from 'styled-components';
    import { darken } from 'polished';

    export const Container = styled.div`
      max-width: 600px;
      margin: 50px auto;

      form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
          background: rgba(0, 0, 0, 0.1);
          border: 0;
          border-radius: 4px;
          height: 44px;
          padding: 0 15px;
          color: #fff;
          margin: 0 0 10px;

          &::placeholder {
            color: rgba(255, 255, 255, 0.7);
          }
        }

        span {
          color: #fb6f91;
          align-self: flex-start;
          margin: 0 0 10px;
          font-weight: bold;
        }

        hr {
          border: 0;
          height: 1px;
          background: rgba(255, 255, 255, 0.2);
          margin: 10px 0 20px;
        }

        button {
          margin: 5px 0 0;
          height: 44px;
          background: #3b9eff;
          font-weight: bold;
          color: #fff;
          border: 0;
          border-radius: 4px;
          font-size: 16px;
          transition: background 0.2s;

          &:hover {
            background: ${darken(0.08, '#3b9eff')};
          }
        }

        a {
          color: #fff;
          margin-top: 15px;
          font-size: 16px;
          opacity: 0.8;

          &:hover {
            opacity: 1;
          }
        }
      }

      > button {
        width: 100%;
        margin: 10px 0 0;
        height: 44px;
        background: #f64c75;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.08, '#f64c75')};
        }
      }
    `;


  2) Change the src/pages/Profile/index.js as per bellow

    a) Import the Form and Input from @rocketseat/unform

      import { Form, Input } from '@rocketseat/unform';

    b) Enable the Container import from styles

      import { Container } from './styles';

    c) Replace the Profile function as per bellow

      export default function Profile() {
      return (
        <Container>
          <Form>
            <Input name="name" placeholder="Nome completo" />
            <Input type="email" name="email" placeholder="Seu endereço de e-mail" />

            <hr />

            <Input
              type="password"
              name="oldPassword"
              placeholder="Sua senha atual"
            />
            <Input type="password" name="password" placeholder="Nova senha" />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirmação de senha"
            />
            <button type="submit">Atualizar perfil</button>
          </Form>
          <button type="button">Sair do GoBarber</button>
        </Container>
      );
    }

  3) In order to load the user information change the src/pages/Profile/index.jsproceed as per bellow

    a) Import the useSelector from react-redux

      import { useSelector } from 'react-redux';

    b) Inside to Profile function
    
      i - Create a variable called profile as per bellow

        const profile = useSelector(state => state.user.profile);

      ii - Create a function called handleSubmit as per bellow

      function handleSubmit(data) {}

    c) On Form add a property called initialData passing the profile as argument and also on onSubmit envent call the function handleSubmit

      <Form initialData={profile} onSubmit={handleSubmit}>

      Note that the information about user name and e-mail will be loaded automatically once the property initialData is being used.


### GoBarber Web - Module 09 - Profile updating


  1) On src/store/modules/user/actions.js proceed with following configuration for create an update profile action

  2) On src/store/modules/user/sagas.js proceed with the following changes

    a) In order to "hear" the action
    
      i - Import the takeLatest, call and put from redux-saga/effects

        import { takeLatest, call, put, all } from 'redux-saga/effects';

      ii - Import the api

        import api from '~/services/api';

      iii - Import the toast from react-toastify

        import { toast } from 'react-toastify';

      iv - Import the actions

        import { updateProfileSuccess, updateProfileFailure } from './actions';


    b) For when the update profile is dispatched
    
      i -  Change the method all to run a saga called updateProfile as per bellow

        export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);

      ii - Create the updateProfile as per bellow

        export function* updateProfile({ payload }) {
          try {
            const { name, email, ...rest } = payload.data;

            const profile = {
              name,
              email,
              ...(rest.oldPassword ? rest : {}),
            };

            const response = yield call(api.put, 'users', profile);

            toast.success('Perfil atualizado com sucesso!');

            yield put(updateProfileSuccess(response.data));
          } catch (error) {
            toast.error('Erro ao atualizar perfil, configura seus dados!');

            yield put(updateProfileFailure());
          }
        }


  3) On src/pages/Profile/index.js proceed with following changes

    a) Import the useDispatch from react-redux

      import { useSelector, useDispatch } from 'react-redux';

    b) Import the actions

      import { updateProfileRequest } from '~/store/modules/user/actions';

    c) Inside to Profile function

      a) Declare a variable called dispatch as per bellow

        const dispatch = useDispatch();

      b) Inside to handleSubmit add the variable dispatch as per bellow

        dispatch(updateProfileRequest(data));


  4) On src/store/modules/user/reducer.js proceed with following changes to user profile update state became available with changes dones.

    a) Add a case regarding to @user/UPDATE_PROFILE_SUCCESS

      export default function user(state = INITIAL_STATE, action) {
        return produce(state, draft => {
          switch (action.type) {
            case '@auth/SIGN_IN_SUCCESS': {
              draft.profile = action.payload.user;
              break;
            }
            case '@user/UPDATE_PROFILE_SUCCESS': {
              draft.profile = action.payload.profile;
              break;
            }
            default:
          }
        });
      }


### GoBarber Web - Module 09 - Profile avatar


  1) On src/pages/Profile
  
    a) Create a foler called AvatarInput, then
    
      i - Create a file called styles.js as per bellowimport styled from 'styled-components';

        export const Container = styled.div`
          align-self: center;
          margin-bottom: 30px;

          label {
            cursor: pointer;

            &:hover {
              opacity: 0.7;
            }

            img {
              height: 120px;
              width: 120px;
              border-radius: 50%;
              border: 3px solid rgba(255, 255, 255, 0.3);
              background: #eee;
            }

            input {
              display: none;
            }
          }
        `;


      ii - Create a file called index.js as per bellow

        import React, { useState, useRef, useEffect } from 'react';
        import { useField } from '@rocketseat/unform';
        import api from '~/services/api';

        import { Container } from './styles';

        export default function AvatarInput() {
          const { defaultValue, registerField } = useField('avatar');

          const [file, setFile] = useState(defaultValue && defaultValue.id);
          const [preview, setPreview] = useState(defaultValue && defaultValue.url);

          const ref = useRef();

          useEffect(() => {
            if (ref.current) {
              registerField({
                name: 'avatar_id',
                ref: ref.current,
                path: 'dataset.file',
              });
            }
          }, [ref, registerField]);

          async function handleChange(e) {
            const data = new FormData();

            data.append('file', e.target.files[0]);

            const response = await api.post('files', data);

            const { id, url } = response.data;

            setFile(id);
            setPreview(url);
          }

          return (
            <Container>
              <label htmlFor="avatar">
                <img
                  src={
                    preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'
                  }
                  alt=""
                />

                <input
                  type="file"
                  id="avatar"
                  accept="image/*"
                  data-file={file}
                  onChange={handleChange}
                  ref={ref}
                />
              </label>
            </Container>
          );
        }


  2) On src/pages/Profile/index.js proceed with following changes

    a) Import the AvatarInput component

      import AvatarInput from './AvatarInput';

    b) Add it together to other inputs (as first one)

      <AvatarInput name="avatar_id" />

  3) On src/store/modules/user/sagas.js

    a) Add also the avatar_id on profile constants

      const { name, email, avatar_id, ...rest } = payload.data;

      const profile = {
        name,
        email,
        avatar_id,
        ...(rest.oldPassword ? rest : {}),
      };


### GoBarber Web - Module 09 - Header data


  1) On src/components/Header/index.js proceed as per bellow

    a) Import the useSelector from react-redux

    b) Inside to Header function, add a constant called profile as per bellow

      const profile = useSelector(state => state.user.profile);

    c) Using the variable profile replace the profile name and avatar as per bellow

      <Profile>
        <div>
          <strong>{profile.name}</strong>
          <Link to="/profile">Meu perfil</Link>
        </div>
        {profile.avatar ? (
          <img src={profile.avatar.url} alt={profile.name} />
        ) : (
          <img
            src="https://api.adorable.io/avatars/50/abott@adorable.png"
            alt={profile.name}
          />
        )}
      </Profile>

  2) On src/components/Header/styles.js proceed as per bellow

    a) Add the width: 32px; for img

      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
      }
        

### GoBarber Web - Module 09 - Application Logout

  1) On src/store/modules/auth/actions.js proceed with following changes

    a) Create an action called signOut as per bellow

      export function signOut() {
        return {
          type: '@auth/SIGN_OUT',
        };
      }

  2) On src/store/modules/auth/reducer.js proceed with following changes

    a) Add a new case to 'hear' the action @auth/SIGN_OUT

      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }

  3) On src/store/modules/user/reducer.js proceed with following changes

    
    a) Add a new case to 'hear' the action @auth/SIGN_OUT

      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }

  4) On src/store/modules/auth/sagas.js proceed with following changes

    a) Add a saga to hear the signOut as per bellow

      takeLatest('@auth/SIGN_OUT', signOut),

    b) Create the function signOut as per bellow

      export function signOut() {
        history.push('/');
      }

  5) On src/pages/Profile/index.js proceed as per bellow

    a) Import the signOut from auth/actions

      import { signOut } from '~/store/modules/auth/actions';

    b) Inside to Profile function

       i - Create a function called handleSignOut as per bellow

        function handleSignOut() {
          dispatch(signOut());
        }

      ii - Add on onClick event of button (Sair do GoBarber) a call for handleSignOut

        <button type="button" onClick={handleSignOut}>
          Sair do GoBarber
        </button>


### GoBarber Web - Module 09 - Styling dashboard

  1) On src/pages/Dashboard/styles.js proceed as per bellow

    import styled from 'styled-components';

    export const Container = styled.div`
      max-width: 600px;
      margin: 50px auto;

      display: flex;
      flex-direction: column;

      header {
        display: flex;
        align-self: center;
        align-items: center;

        button {
          border: 0;
          background: none;
        }

        strong {
          color: #fff;
          font-size: 24px;
          margin: 0 15px;
        }
      }

      ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
        margin-top: 30px;
      }
    `;

    export const Time = styled.li`
      padding: 20px;
      border-radius: 4px;
      background: #fff;

      opacity: ${props => (props.past ? 0.6 : 1)};

      strong {
        display: block;
        color: ${props => (props.available ? '#999' : '#7159c1')};
        font-size: 20px;
        font-weight: normal;
      }

      span {
        display: block;
        margin-top: 3px;
        color: ${props => (props.available ? '#999' : '#666')};
      }
    `;


  2) On src/pages/Dashboard/index.js proceed as per bellow

    import React from 'react';
    import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
    import api from '~/services/api';

    import { Container, Time } from './styles';

    export default function Dashboard() {
      return (
        <Container>
          <header>
            <button type="button">
              <MdChevronLeft size={36} color="#fff" />
            </button>
            <strong>31 de Maio</strong>
            <button type="button">
              <MdChevronRight size={36} color="#fff" />
            </button>
          </header>

          <ul>
            <Time past>
              <strong>08:00</strong>
              <span>Adriano Souza</span>
            </Time>
            <Time available>
              <strong>09:00</strong>
              <span>Em aberto</span>
            </Time>
            <Time>
              <strong>10:00</strong>
              <span>Diego Fernandes</span>
            </Time>
            <Time>
              <strong>11:00</strong>
              <span>Giampaolo Salvadori</span>
            </Time>
          </ul>
        </Container>
      );
    }


  ### GoBarber Web - Module 09 - Navigating among days

    1) On src/pages/Dashboard/index.js proceed as per bellow

      a) Import the hooks useState and useMemo from react.

        import React, { useState, useMemo } from 'react';

      b) Import the format, subDays and addDays from date-fns

        import { format, subDays, addDays } from 'date-fns';

      c) Import the pt from 'date-fns/locale/pt'

        import pt from 'date-fns/locale/pt';

      d) Inside to Dashboard function create a state to store the current day as per bellow

        i - Ceate the states date and setDate

          const { date, setDate } = useState(new Date());

        ii - Create a variable called dateFormatted

        iii - Using dateFormatted, on header, add it to strong

      
      e) In order to navigate among days, inside to Dashboard function, proceed as per bellow

        i - Create a function called handlePrevDay

          function handlePrevDay() {
            setDate(subDays(date, 1));
          }

        ii - Create a function called handleNextDay

          function handleNextDay() {
            setDate(addDays(date, 1));
          }

        iii - On onClick method of Prev button add a call to handlePrevDay

          <button type="button" onClick={handlePrevDay}>
            <MdChevronLeft size={36} color="#fff" />
          </button>

        iv - On onClick method of Next button add a call to handleNextDay

          <button type="button" onClick={handleNextDay}>
            <MdChevronRight size={36} color="#fff" />
          </button>

        
### GoBarber Web - Module 09 - Showing appointment


    1) Add the library date-fns-tz

      yarn add date-fns-tz

    2) On src/pages/Dashboard/index.js, proceed as per below
    
      a) Define the hour range for application

        i - Create a variable rangeconst 
        
          range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

      b) Import the useEffect from react

        import React, { useState, useMemo, useEffect } from 'react';

      c) Import the setHours, setMinutes, setSeconds, isBefore, isEqual and parseISO from date-fns

        import {
          format,
          subDays,
          addDays,
          setHours,
          setMinutes,
          setSeconds,
          isBefore,
          isEqual,
          parseISO
        } from 'date-fns';

      d) Import the utcToZonedTime from date-fns-tz

        import { utcToZonedTime } from 'date-fns-tz';

      e) Inside to function Dashboard
      
        a) Create a state schedule, setSchedule to store the appointments

          const [schedule, setSchedule] = useState([]);

        b) Create an effect to process the data to be used by schedule state

          useEffect(() => {
            async function loadSchedule() {
              const response = await api.get('schedule', {
                params: { date },
              });

              const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

              const data = range.map(hour => {
                const checkDate = setMilliseconds(
                  setSeconds(setMinutes(setHours(date, hour), 0), 0),
                  0
                );
                const compareDate = utcToZonedTime(checkDate, timezone);

                return {
                  time: `${hour}:00h`,
                  past: isBefore(compareDate, new Date()),
                  appointment: response.data.find(a =>
                    isEqual(parseISO(a.date), compareDate)
                  ),
                };
              });

              setSchedule(data);
            }

            loadSchedule();
          }, [date]);

        c) Use the schedule state to interate the appointments on ul/Time(li)

          <ul>
            {schedule.map(time => (
              <Time key={time.time} past={time.past} available={!time.appointment}>
                <strong>{time.time}</strong>
                <span>
                  {time.appointment ? time.appointment.user.name : 'Em aberto'}
                </span>
              </Time>
            ))}
          </ul>



### GoBarber Mobile - Module 10 - Configurating Structure

      
  1) Create a react native project based on instructions of Module 06

  


