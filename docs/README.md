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

    a) yarn add react-nactive-vector-icons

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


  1) Createa of  a basic project configurating prettier and eslint (based on module 05)


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


### Flex Architecture - Module 07 - React Toastify


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




