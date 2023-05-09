import Header from "./Header";
import Form from "./Form";
import Table from "./Table";
import Main from "./Main"
import Container from "./Container";
import Loading from "./Loading";
import ErrorMessage from './ErrorMessage';
import {useRatesData} from "./useRatesData";

function App() {
 
  const ratesData = useRatesData();
  return (ratesData.state === "loading"? (
    <Container
      content={<Loading/>}>
    </Container>
  ) : ratesData.state === "error"? (
    <Container
      content={<ErrorMessage/>}
    >
    </Container>
  ): (
    <Container
      header={<Header ratesData={ratesData}/>}
      content={<Main form={<Form ratesData={ratesData}/>} table={<Table ratesData={ratesData}/>} />}>
    </Container>
  ))
}

export default App;
