import React from 'react';
import ProfessionalListItem from './professionalComponents/ProfessionalListItem'
import ProfessionalTopbar from './professionalComponents/ProfessionalTopbar'
import ProfessionalInfoCard from './professionalComponents/ProfessionalInfoCard'
import TopPresentation from './professionalComponents/TopPresentation'
import FeedCreator from './FeedCreator'
import Profile from './General/Profile'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

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


        return (
            <div>
                <Router>
                    <ProfessionalTopbar changePage={this.changePage} activePage={this.state.activePage} />
                    <div className="root">
                        <main className="content">
                            <Switch>
                                <div>
                                    <Route exact path="/">
                                        <div> <TopPresentation text={"Profile"} /> <Profile /> </div>
                                    </Route>
                                    <Route path="/portfolio">
                                        <div> <TopPresentation text={"Portfolio"} /> <FeedCreator /> </div>
                                    </Route>
                                    <Route path="/blog">
                                        <div> <TopPresentation text={"Blog"} /> Placeholder blog page! </div>
                                    </Route>
                                </div>
                            </Switch>
                        </main>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Site