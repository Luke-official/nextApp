
interface UserData {
    username: string;
    quote: string;
    level: number;

}

const HeaderData: React.FC<UserData> = ({username, quote, level}) => {

    return (
        <div className={`card d-flex p-3 text-white shadow`}>
            <h1 className=" fw-bold fs-4 mb-3">
                Welcome {username}
            </h1>
            <span>{quote}</span>
            <span>{level}</span>
        </div>
    );

}

export default HeaderData