# NodeJs Example API
NodeJs - example of api to consume an external endpoint. (Mercado Libre endpoints configured by default)

### Usage

1. Clone repository
    ```
    $ git clone ''
    $ cd mlapi
    $ rm -rf .git
    ```

2. Install yarn and pm2
    ```
    $ npm install -g yarn pm2
    ```
    
3. Config file default props.
    ```
    PORT=4000
    ```
 
4. Run server
    ```
    for development (using HMR)
      $ yarn start:dev
    for production (using pm2)
      $ yarn start:prod
      $ yarn stop
    ```
