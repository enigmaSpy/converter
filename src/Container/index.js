import { BodyContainer } from "./styled";

const Container = ({header,content}) => (
    <BodyContainer>
        {header}
        {content}
    </BodyContainer>
);

export default Container;