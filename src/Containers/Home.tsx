import { useState } from "react";
import { Container } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

interface IselectOption {
    value: string;
    label: string;
}
const selectItems: IselectOption[] = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

const Home: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState([] as IselectOption[]);

    return (
        <>
            <Container>
                <div>Home</div>
                <Select
                    onChange={(e) => {
                        if (e !== null) {
                            let data: IselectOption[] = e.map((x) => {
                                return { value: x.value, label: x.label };
                            });
                            setSelectedOption(data);
                        }
                    }}
                    isMulti
                    closeMenuOnSelect={true}
                    defaultValue={selectedOption}
                    options={selectItems}
                    components={animatedComponents}
                />
                {selectedOption && selectedOption.length > 0
                    ? <div>Items selected({selectedOption.length}):
                        {selectedOption.map((x, i) =>
                            <div key={i}>{x.value}</div>
                        )}
                    </div>
                    : <label>No Items selected</label>
                }
            </Container>
        </>
    );
};

export default Home;
