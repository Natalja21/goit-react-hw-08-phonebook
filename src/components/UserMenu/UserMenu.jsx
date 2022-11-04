import { Box, Text, Button } from "./UserMenu.styled";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "redux/selectors";
import { logout } from "redux/auth-redux/auth-operations";

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(selectAuth)
    console.log(user.name)
    return (
        <Box>
            <Text>{user.name}</Text>
            <Button type="button" onClick={() => dispatch(logout()) }>Logout</Button>
        </Box>
    )
}
export default UserMenu