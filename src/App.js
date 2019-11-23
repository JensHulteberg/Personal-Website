import React from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';

import ProfessionalListItem from './professionalComponents/ProfessionalListItem'
import ProfessionalTopbar from './professionalComponents/ProfessionalTopbar'
import ProfessionalInfoCard from './professionalComponents/ProfessionalInfoCard'
import TopPresentation from './professionalComponents/TopPresentation'
import FeedCreator from './FeedCreator'
import Site from './Site'
import { borderRadius } from '@material-ui/system';



function App() {

  return (
    <div>
      <header>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </header>
      <body className="body">
        <Site />
      </body>
    </div>
  );
}

export default App;
