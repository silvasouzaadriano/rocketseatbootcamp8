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

    - After close the repository to a local folder
    - Assure that the file package.json is on root folder then run the command:
      - yarn
    - For start the application in manually mode run the command:
      - node <main JS file>. i.e: node index.js

### Installing Insomnia

    - For simulate the execution of APIs a good application would the Insomnia.
    - In order to install it access the url https://insomnia.rest/ and follow the instructions

### Installing dependencies for Nodejs - Modulo01

    - Inside to project folder created run the following line commands:
      - yarn add express
      - yarn add nodemon -D (the flag D is to avoid the deploy in production, whih means only for development). Note that the nodemon is used to watch the appllication and run it automatically
        - After install the nodemon, it's necessary create a script called dev, informing the main file to use it on terminal. For achieve it, inside to package.json, before dependencies add a tag called scripts as per example bellow.

            "scripts": {
              "dev": "nodemon index.js"
            }

        - For run the script, on terminal use the line command: yarn dev
        - yarn add sucrase -D (This a lib for use the notation import instead of require. i.e: import { Router} from 'express')

### Installing dependencies for Nodejs - Modulo02

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
              - Forth screen
              - Fifth screen, unmark Browser (press tab space) and choose Node (press tabe space)
              - Sixth screen, choose: Use a popular style guide
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





  
