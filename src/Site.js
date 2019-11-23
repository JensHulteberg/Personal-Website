import React from 'react';
import ProfessionalListItem from './professionalComponents/ProfessionalListItem'
import ProfessionalTopbar from './professionalComponents/ProfessionalTopbar'
import ProfessionalInfoCard from './professionalComponents/ProfessionalInfoCard'
import TopPresentation from './professionalComponents/TopPresentation'
import FeedCreator from './FeedCreator'

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

        if (this.state.activePage == "profile") {
            page = <div><TopPresentation /><FeedCreator /></div>
        }
        else if (this.state.activePage == "contact") {
            page = <div> Placeholder contact page! </div>
        }
        else if (this.state.activePage == "blog") {
            page = <div> Placeholder blog page! </div>
        } else {
            page = <div> There is no path for this link. I dont even know how you got here! </div>
        }

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