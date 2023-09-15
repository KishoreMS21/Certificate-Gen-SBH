import Certificate from "./Pages/Certificate/Certificate";
// import Generate from "./Pages/Generation/Generate";
// import Login from "./Pages/Login/Login";


function App() {
  const studentName = "Kishore Taylor";

  return (
    <div className="App">
      {/* <Generate /> */}
      {/* <Login /> */}
      <Certificate studentName={studentName}/>
    </div>
  );
}

export default App;
