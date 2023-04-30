import Header from "./Header";
import Form from "./Form";
import Table from "./Table";
import Main from "./Main"
import Container from "./Container";

function App() {

  return (
    <Container
      header={<Header />}
      content={<Main form={<Form />} table={<Table />} />}>
    </Container>
  );
}

export default App;
