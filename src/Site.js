import React from 'react';
import ProfessionalListItem from './professionalComponents/ProfessionalListItem'
import ProfessionalTopbar from './professionalComponents/ProfessionalTopbar'
import ProfessionalInfoCard from './professionalComponents/ProfessionalInfoCard'
import TopPresentation from './professionalComponents/TopPresentation'
import FeedCreator from './FeedCreator'
import Profile from './General/Profile'
import Projects from './assets/Projects'
import BlogPost from './Blog/blog_post'

import WaveLab from './Projects/WaveLab'

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
                                        <div> <TopPresentation text={"Blog"} /> <BlogPost /> <BlogPost /> </div>
                                    </Route>
                                    <Route path="/wavelab">
                                        <WaveLab />
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