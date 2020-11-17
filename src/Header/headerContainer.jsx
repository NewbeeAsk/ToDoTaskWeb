import React from "react";
import {connect} from "react-redux";
import Header from "./header";



class HeaderContainer extends React.Component{

    render() {
        return(
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userData: state.auth.userData,

})



export default connect(mapStateToProps,{})(HeaderContainer);


