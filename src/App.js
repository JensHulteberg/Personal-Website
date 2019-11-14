import React from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline';

import ProfessionalListItem from './professionalComponents/ProfessionalListItem'
import ProfessionalSidebar from './professionalComponents/ProfessionalSidebar'
import ProfessionalTopbar from './professionalComponents/ProfessionalTopbar'

function App() {

  return (
    <div>
      <header>

      </header>
      <ProfessionalTopbar />
      <div className="root">


        <main className="content">
          <ProfessionalListItem />
          <ProfessionalListItem />
          <ProfessionalListItem />
        </main>
      </div>
    </div>
  );
}

export default App;
