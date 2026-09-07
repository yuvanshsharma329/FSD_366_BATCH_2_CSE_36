import Header from "./component/Header";
import {Footer} from "`/components/Footer";
import {About , contact} from "./component/Info";

function App(){
  return(
    <div style={{padding:"20px", fontFamily:"Arial"}}>
      <h1>Import and Export component Example</h1>

      <Header/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;