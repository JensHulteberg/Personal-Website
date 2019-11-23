import React from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';

import ProfessionalListItem from './professionalComponents/ProfessionalListItem'
import ProfessionalTopbar from './professionalComponents/ProfessionalTopbar'
import ProfessionalInfoCard from './professionalComponents/ProfessionalInfoCard'
import TopPresentation from './professionalComponents/TopPresentation'
import FeedCreator from './FeedCreator'



function App() {

  return (
    <div>
      <header>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </header>
      <ProfessionalTopbar />
      <div className="root">


        <main className="content">
          <TopPresentation />
          <FeedCreator />
        </main>
      </div>
    </div>
  );
}

export default App;
