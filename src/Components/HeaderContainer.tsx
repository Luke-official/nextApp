import { InputGroup, FormControl, Button} from "react-bootstrap";
import { ReactComponent as SearchIcon } from "../media/icons/search_white_24dp.svg";

const HeaderContainer: React.FC = () => {

    return (
        <header className="w-100 d-flex flex-column py-3 justify-content-center align-items-center">
            <InputGroup className="form-container form-search">
                <FormControl
                    className="searchbar"
                    placeholder="Search..."
                    aria-label="Search..."
                    aria-describedby="searchbar"
                />
                <Button variant="" id="searchbar">
                     <SearchIcon/> 
                </Button>
            </InputGroup>
        </header>
    );

}

export default HeaderContainer