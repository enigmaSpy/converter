import { ErrorMessageContainer, ErrorMessageHeading, ErrorMessageSubheading, ErrorMessageText } from "./styled";

const ErrorMessage = ({err}) => {
    return (
        <ErrorMessageContainer>
            <ErrorMessageHeading>Ooops!!</ErrorMessageHeading>
            <ErrorMessageSubheading>Something went wrong!</ErrorMessageSubheading>
            <ErrorMessageText>Please try again later</ErrorMessageText>
        </ErrorMessageContainer>
    );
};

export default ErrorMessage;