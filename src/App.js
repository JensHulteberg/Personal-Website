import React from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';

import ProfessionalListItem from './professionalComponents/ProfessionalListItem'
import ProfessionalTopbar from './professionalComponents/ProfessionalTopbar'
import FeedCreator from './FeedCreator'

function App() {

  return (
    <div>
      <header>

      </header>
      <ProfessionalTopbar />
      <div className="root">


        <main className="content">
          <FeedCreator />
        </main>
      </div>
    </div>
  );
}

export default App;
