# react-express FrontEnd Test
ReactJs / Node - SAP to display Mercado Libre products using ML production api.

### Usage

1. Clone repository
    ```
    $ git clone ''
    $ cd mlfetest
    $ rm -rf .git
    ```

2. Install yarn and pm2
    ```
    $ npm install -g yarn pm2
    ```
    
3. Config file default props.
    ```
    PORT=4000
    DEV_PORT=3000
    SECRET_KEY="SECRET_KEY"
    OG_TITLE=
    OG_DESCRIPTION=
    OG_IMAGE=
    TITLE="React Express Boilerplate"
    ```
 
4. Run server
    ```
    for development (using HMR)
      $ yarn start:dev
    for production (using pm2)
      $ yarn start:prod
      $ yarn stop
    ```
