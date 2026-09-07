import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx"

import Image1 from "/src/assets/mtFuji.png"
import travell_list from "./travell_list.js";


function App() {
  const travell_data = travell_list.map((entry)=>{
    return <Entry 
      key={entry.id}
      {...entry}
    /> 
  })

  return (
    <>
      <Header />
      {travell_data}  
    </>
  );
}

export default App;