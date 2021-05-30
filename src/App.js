import { useEffect, useState } from "react";
import axios from "axios";
import infoIcon from "./components/assets/info-icon.svg";
import Filter from "./components/Filter";
import TemplateCard from "./components/TemplateCard";
import Pagination from "./components/Pagination";
import "./App.scss";

function App() {
  const [templateList, setTemplateList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [templatesPerPage, setTemplatesPerPage] = useState(20);

  // fetch templates
  useEffect(() => {
    const fetchTemplates = async () => {
      const res = await axios.get(
        "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
      );
      setTemplateList(res.data);
      setLoading(false);
      console.log(res.data);
    };
    fetchTemplates();
  }, []);


  //Get current Posts
  const indexOfLastTemplate = currentPage * templatesPerPage;
  const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;
  const CurrentList = templateList.slice(
    indexOfFirstTemplate,
    indexOfLastTemplate
  );


  // handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="App">
      <Filter />
      <div className="freetemplate-info">
        <img src={infoIcon} alt="info" className="info-icon" />
        <span className="info-text">
          Tada! Get started with a free template. Can’t find what you are
          looking for? Search from the 1000+ available templates
        </span>
      </div>
      <div className="template-container">
        <div className="templatecontainer-header">
          <h4 className="templatecontainer-headertext">All Templates</h4>
          <span className="numberof-templates">
            {loading? " " : templateList.length} templates
          </span>
        </div>
        {loading ? (
          <p>Loading, please wait...</p>
        ) : (
          <div className="template">
            {CurrentList.map((template) => {
              return <TemplateCard 
              key={template.created}
              template = {template}
               />;
            })}
          </div>
        )}
      </div>
      {loading ? (
        ""
      ) : (
        <Pagination
          templatesPerPage={templatesPerPage}
          totaltemplates={templateList.length}
          handlePageChange={handlePageChange}
        />
      )}
    </section>
  );
}

export default App;
