# Webro Pay :credit_card: :page_facing_up:
Development for a fullstack job examination at WeBropay 

This is the front-end page of a full-stack activity proposed by WebroPay as part of their selection exam. It is a simple application, using only regular props for components communication in React.js. It has being designed through React-hooks dynamics (including Browser Router).

## Tools and technologies :wrench:

<p align="center">
<img width="40px" src="https://cdn.iconscout.com/icon/free/png-256/nodejs-2-226035.png"/>
<img width="35px" src="https://raw.githubusercontent.com/jalbertsr/logo-badge-images/master/img/react_logo.png"/>
<img width="35px" src="http://3con14.biz/code/_data/js/intro/js-logo.png"/>
<img width="35px" src="https://github.com/MarioTerron/logo-images/blob/master/logos/npm.png"/>
</p>


<p>
<img height="22px" src="https://github.com/Meira-JH/futureEats/blob/master/futureEats/src/imgs/EnvironmentNodejs.png"/>
</p>
<p>
<img height="22px" src="https://github.com/Meira-JH/futureEats/blob/master/futureEats/src/imgs/JSLibReactJS.png"/>
</p>

<p  style="font-size:5px; text-align:left">
<i>Icons by <a href="https://github.com/jalbertsr/logo-badge-images">Joan Albert</a></i>
</p>


## The app  :iphone:

[Documentation](https://app.swaggerhub.com/apis/MeiraJH/swagger-webropay_exam_documentation/1.0.0)

<p align="center" >
<img width="500px" src="https://firebasestorage.googleapis.com/v0/b/joaomeira.appspot.com/o/webropayprint.png?alt=media&token=c4524012-ee33-48d5-a6a9-e79df24da8fd"/>
</p>


## Running the app :running:

On your terminal, type:

```
git clone https://github.com/Meira-JH/webropay-frontend-selection/
```

Install dependencies:
```
npm install
```

ATTENTION! 
```
Before executing the application, go to react-scripts folder, inside node_modules, and change the default port 
(set as _const DEFAULT_PORT = parseInt(process.env.PORT, 10) || **3000**;_) to 3030. 
This will avoid port conflict with the API of the project, in case of development local running.
```

Execute the application:
```
npm start 
```

Obs: the API's CORS is configured to accept requests only from "Access-Control-Allow-Origin: http://localhost:3030"

## Code architecture :computer:

This code was designed concerned with JS best practices. The source folder was divided in pages and img.

:small_blue_diamond: **pages**: folder containing the single page of the applications. Inside of it there are all components used in the page;

:small_blue_diamond: **img**: folder containing all media used;

## License :page_facing_up:

[MIT License](https://choosealicense.com/licenses/mit/)
