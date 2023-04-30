import { Wrapper,Button } from "./styled";

const ButtonCalc = ({ onClick }) => (

    <Wrapper>
        <Button onClick={onClick}>
            Przelicz
        </Button>
    </Wrapper>
);

export default ButtonCalc;