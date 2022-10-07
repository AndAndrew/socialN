import React from "react";
import Profile from "./Profile";
import {AppStateType} from "../../Redux/reduxStore";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string,
}

type MapStateToPropsType = {
    // profile: any
    profile: {
        aboutMe: string,
        contacts: {
            facebook: string,
            website: string,
            vk: string,
            twitter: string,
            instagram: string,
            youtube: string,
            github: string,
            mainLink: string
        },
        lookingForAJob: boolean,
        lookingForAJobDescription: string,
        fullName: string,
        userId: number,
        photos: {
            small: string,
            large: string
        }
    } | null
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
});

const WithURLProfileContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithURLProfileContainerComponent);
