import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DropdownProfile extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}
  
	render() {
		return (
			<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="navbar-item navbar-user dropdown" tag="div">
				<DropdownToggle tag="a" className="navbar-link dropdown-toggle d-flex align-items-center">
					<div className="image image-icon bg-gray-800 text-gray-600">
						<i className="fa fa-user"></i>
					</div>
					<span>
						<span className="d-none d-md-inline">Adam Schwartz</span>
						<b className="caret"></b>
					</span>
				</DropdownToggle>
				<DropdownMenu className="dropdown-menu dropdown-menu-end" end tag="div">
					<DropdownItem>Edit Profile</DropdownItem>
					<DropdownItem className="d-flex align-items-center">
						Inbox
						<span className="badge bg-danger rounded-pill ms-auto pb-4px">2</span> 
					</DropdownItem>
					<DropdownItem>Calendar</DropdownItem>
					<DropdownItem>Setting</DropdownItem>
					<div className="dropdown-divider"></div>
					<DropdownItem>Log Out</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		);
	}
};

export default DropdownProfile;
