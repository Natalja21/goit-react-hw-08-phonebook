import { Box, Text, Button } from "./UserMenu.styled";
import { useSelector, useDispatch, } from "react-redux";
import { getUser } from "../../redux/selectors";
import { logout } from "redux/auth-redux/auth-operations";


const UserMenu = () => {
    const dispatch = useDispatch();
    const { name } = useSelector(getUser);
    return (
        <Box>
            <Text>{name}</Text>
            <Button type="button" onClick={() => dispatch(logout()) }>Logout</Button>
        </Box>
    )
}
export default UserMenu