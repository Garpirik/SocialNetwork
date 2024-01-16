import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { authAPI } from "../../API/api";
import { getAuthUserData, LogIn, LogOut, setAuthUserData } from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component{

    componentDidMount(){
    this.props.getAuthUserData()
        //     authAPI.me()
    //     .then(response => {   
    //         if(response.data.resultCode ===0){
    //             let{userId,login,email} = response.data.data;
    //             this.props.setAuthUserData(userId,email,login);
    //         }
    //    console.log(response.data.items);
    //     });
    }
    render(){
    return <Header {...this.props} />
}

}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
    
});
export default connect(mapStateToProps,{getAuthUserData, LogIn,LogOut})(HeaderContainer);
