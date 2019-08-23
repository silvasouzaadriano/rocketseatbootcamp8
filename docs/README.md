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
        - yarn add sucrase -D (This a lib for use the notation import instead of require. i.e: import { Router} from 'express')   
        - For run the script, on terminal use the line command: yarn dev     

### Debbuging on VSCODE

    - First stop the nodemon
    - On VSCODE, click on forth button (with bug image)
    - Then click on open launch icon to create the launch.json file with the setup
    - Add the .vscode folder on .gitignore file
    - So, the IDE is ready for debugging process




  
