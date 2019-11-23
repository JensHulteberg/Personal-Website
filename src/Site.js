import React from 'react';
import ProfessionalListItem from './professionalComponents/ProfessionalListItem'
import ProfessionalTopbar from './professionalComponents/ProfessionalTopbar'
import ProfessionalInfoCard from './professionalComponents/ProfessionalInfoCard'
import TopPresentation from './professionalComponents/TopPresentation'
import FeedCreator from './FeedCreator'
import Profile from './General/Profile'

class Site extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: "profile"
        }
        this.changePage = this.changePage.bind(this);
    }

    changePage(pageName) {
        this.setState({ activePage: pageName })
    }

    render() {
        var page;

        if (this.state.activePage == "portfolio") {
            page = <div><TopPresentation text={"Portfolio"} /><FeedCreator /></div>
        }
        else if (this.state.activePage == "profile") {
            page = <div> <TopPresentation text={"Profile"} /> <Profile /> </div>
        }
        else if (this.state.activePage == "blog") {
            page = <div> <TopPresentation text={"Blog"} /> Placeholder blog page! </div>
        } else {
            page = <div> There is no path for this link. I dont even know how you got here! </div>
        }

        import {
            BrowserRouter as Router,
            Switch,
            Route,
            Link
        } from "react-router-dom";


        return (
            <div>
                <ProfessionalTopbar changePage={this.changePage} activePage={this.state.activePage} />
                <div className="root">
                    <main className="content">
                        {page}
                    </main>
                </div>
            </div>
        )
    }
}

export default Site