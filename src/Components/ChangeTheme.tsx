import { useState } from 'react';
import Form from 'react-bootstrap/Form'

const themes = {
    "dark-mode": 0,
    "light-mode": 1
}

const ChangeTheme = () =>{

    const [theme, setTheme] = useState(0);



    return(
        <Form>
            <Form.Check 
                type="switch"
                id="theme-switch"
                label="Change Theme"
            />
        </Form>
    );
}

export default ChangeTheme;