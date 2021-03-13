import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import Profile from './Profile';
import { getProfile } from '../../Redux/profile-reducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        if(!id){
            id = 1;
        }
        this.props.getProfile(id);
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose(
    connect(mapStateToProps, { getProfile }),
    withRouter,
)(ProfileContainer);
