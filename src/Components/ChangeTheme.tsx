import Form from 'react-bootstrap/Form'

const themes = {
    "dark-mode": 0,
    "light-mode": 1
}

const ChangeTheme = () =>{

    const [theme, setTheme] = useState(0);

    const getTheme = () =>{
        setTheme()
    }

    return(
        <Form>
            <Form.Check 
                type="switch"
                id="theme-switch"
                label="Change Theme"
                onChange={getTheme}
            />
        </Form>
    );
}

export default ChangeTheme;