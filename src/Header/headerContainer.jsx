import React from "react";
import {connect} from "react-redux";
import Header from "./header";



class HeaderContainer extends React.Component{

   /* componentDidMount(props){

        this.props.setMyProfile();
    }*/
    render() {
        return(
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
})



export default connect(mapStateToProps,{})(HeaderContainer);


