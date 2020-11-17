import {connect} from "react-redux";
import {createToDoPointThunk} from "../../redux/toDoReducer";
import WorkContainerComponent from "./toDoPost";

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userData.id,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (contact_id, point) => {
            dispatch(createToDoPointThunk(contact_id, point));
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (WorkContainerComponent);

export default MyPostsContainer;