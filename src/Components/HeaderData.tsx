import { InputGroup, FormControl, Button} from "react-bootstrap";
import { ReactComponent as SearchIcon } from "../media/icons/search_white_24dp.svg";

interface UserData {
    username: string;
}

const HeaderData: React.FC<UserData> = ({username}) => {

    return (
        <div className={`card d-flex p-3 text-white shadow`}>
            <h1 className=" fw-bold fs-4 mb-3">
                Welcome {username}
            </h1>
            <span>How are you today?</span>
        </div>
    );

}

export default HeaderData