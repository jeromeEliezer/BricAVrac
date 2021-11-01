# This project is technical test by Bric A Vrac


[https://bricavrac.com](https://bricavrac.com)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

posibilités de faire un dossier routes avec un index.tsx pour gerer le systeme des routes. :fire:
Autres exemples de navigation possible...

```.tsx

 <Router>
            <Switch>
                <Route path='/' exact component={Home}  />
                <Route path='/Profil' exact component={Profil}  />
                <Route path='/Trending' exact component={Trending}  />
                <Redirect to='/' />
            </Switch>
        </Router>
        
        ```
        





