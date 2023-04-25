import Header from "./Header";
import Form from "./Form";
import Table from "./Table";
import Main from "./Main"
function App() {

  return (
    <>
      <Header />

      <Main form={<Form/>} table={<Table />}/>
    </>
  );
}

export default App;
