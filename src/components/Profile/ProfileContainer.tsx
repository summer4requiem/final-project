import React from 'react';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Profile from './Profile';
import {getProfile} from '../../Redux/profile-reducer';
import {PokemonTypes} from '../../types/pokemon-type';
import {AppStateType} from '../../Redux/redux-store';

type matchType = {
    params: {
        id: number,
    }
}

type PropsTypes = {
    profile: PokemonTypes,
    match: matchType,
    getProfile: (id: number) => PokemonTypes,
}

class ProfileContainer extends React.Component<PropsTypes> {
    componentDidMount() {
        let id = this.props.match.params.id;
        if (!id) {
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

const mapStateToProps = (state: AppStateType) => {
    const {profile} = state.profilePage;
    return {
        profile: profile,
    }
}

export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
)(ProfileContainer);
