import { useEffect, useState } from "react";
import axios from "axios";
import infoIcon from "./components/assets/info-icon.svg";
import Filter from "./components/Filter";
import TemplateCard from "./components/TemplateCard"
import "./App.scss";


function App() {

  const [templateList, setTemplateList] = useState([])
  const [loading, setLoading] = useState(true)


useEffect(()=>{
  const fetchTemplates = async ()=>{
 const res = await axios.get(
   "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
 )
 console.log(res.data)
  }
  fetchTemplates()
},[])

  return (
    <section className="App">
      <Filter />
      <div className="freetemplate-info">
        <img src={infoIcon} alt="info" />
        <span className="info-text">
          Tada! Get started with a free template. Can’t find what you are
          looking for? Search from the 1000+ available templates
        </span>
      </div>
      <div className="template-container">
        <div className="templatecontainer-header">
          <h4 className="templatecontainer-headertext">All Templates</h4>
          <span className="numberof-templates">templates</span>
        </div>
        <TemplateCard/>
      </div>
     
    </section>
  );
}

export default App;
