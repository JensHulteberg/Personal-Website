import React from "react";
import PLACEHOLDERIMAGE from "../assets/imgplaceholder.jpg";
import Grow from "@material-ui/core/Grow";

class ProfessionalListItem extends React.Component {

	render() {
		return (
			<Grow in={true}>
				<div className="listCard">
					<div className="listItem">
						<img
							src={require("../../" + this.props.PicPath)}
						/>
						<div className="text">
							<p>{this.props.Name}</p>
							<p className="description">{this.props.Description}</p>
						</div>
					</div>
				</div>
			</Grow>
		);
	}
}

export default ProfessionalListItem;
