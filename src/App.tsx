import React, { useState } from 'react';
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";
import Sidebar from './Components/Sidebar';
import HomeContainer from './Containers/HomeContainer';
import Landing from './Pages/Landing';
import BooksContainer from './Containers/BooksContainer';
import ExploreContainer from './Containers/ExploreContainer';
import FriendsContainer from './Containers/FriendsContainer';
import GamesContainer from './Containers/GamesContainer';
import MoviesContainer from './Containers/MoviesContainer';
import HeaderContainer from './Components/HeaderContainer';

interface handleAuth {
  isAuth: boolean;
}

const App: React.FC = () => {

  const [isAuth, setAuth] = useState<boolean>(true);

  return (
    <Router>
     <Switch>
      {isAuth
        ? <div className="container-page d-flex">
            <Sidebar/>
            <div className="content-wrapper w-100 d-flex flex-column px-md-5 px-4 overflow-scroll">
              <HeaderContainer/>
              <Route path="/Home" exact component={HomeContainer} />
              <Route path="/Books" exact component={BooksContainer} />
              <Route path="/Movies" exact component={MoviesContainer} />
              <Route path="/Games" exact component={GamesContainer} />
              <Route path="/Friends" exact component={FriendsContainer} />
              <Route path="/Explore" exact component={ExploreContainer} />
            </div>
          </div>
        : <Landing/>
      }
      </Switch>
    </Router>
  );
}
export default App;
