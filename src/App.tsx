import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Profile from './components/Profile/Profile';
import Register from './components/Auth/register';

// - Avoir un compte Github
// - Créer un répertoire public pour développer le site Web
// - Déposer tout le code avec des commits sur le répertoire
// - Page d'accueil avec l'affichage du logo au centre
// - Ajouter un lien sur la page d'accueil qui mène vers une page qui indique que c'est une page de connexion
// - Le site Web doit gérer les routes

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login}  />
        <Route exact path='/profile' component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
