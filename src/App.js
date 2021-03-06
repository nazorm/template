import { useEffect, useState } from "react";
import axios from "axios";
import infoIcon from "./components/assets/info-icon.svg";
import Filter from "./components/Filter";
import TemplateCard from "./components/TemplateCard";
import Pagination from "./components/Pagination";
import "./App.scss";

function App() {
  const [templateList, setTemplateList] = useState([]);
  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [templatesPerPage] = useState(20);
  const [filters, setFilters] = useState({ order: "", date: "", search: "" });

  // fetch templates
  useEffect(() => {
    const fetchTemplates = async () => {
      const res = await axios.get(
        "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
      );
      setTemplateList(res.data);
      setFilteredTemplates(res.data);
      setLoading(false);
    };
    fetchTemplates();
  }, []);

  // handle page change
  const handlePageChange = ({ selected }) => {
    const page = selected + 1;
    setCurrentPage(page);
  };

  //handle filters for date and order
  const handleFilters = (newFilters) => {
    let isFilteredTemplates = [...templateList];
    // default
    if (newFilters.order === "default" && newFilters.date === "default") {
      isFilteredTemplates = [...templateList];
      setFilteredTemplates(isFilteredTemplates);
      return;
    }
    // date
    if (newFilters.date) {
      switch (newFilters.date) {
        case "ascending":
          isFilteredTemplates = isFilteredTemplates.sort(
            (a, b) => b.created - a.created
          );
          break;
        case "descending":
          isFilteredTemplates = isFilteredTemplates.sort(
            (a, b) => a.created - b.created
          );
          break;
        default:
          isFilteredTemplates = [...templateList];
          break;
      }
    }
    // order
    if (newFilters.order) {
      switch (newFilters.order) {
        case "ascending":
          isFilteredTemplates = isFilteredTemplates.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
          break;
        case "descending":
          isFilteredTemplates = isFilteredTemplates.sort((a, b) => {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          });
          break;
        default:
          isFilteredTemplates = [...templateList];
          break;
      }
    }
    // search
    if (newFilters.search) {
      isFilteredTemplates = isFilteredTemplates.filter((searched) => {
        return `${searched.name}`
          .toLowerCase()
          .includes(newFilters.search.toLowerCase());
      });
    }
    setFilteredTemplates(isFilteredTemplates);
  };

  // handle order change
  const handleOrder = (e) => {
    const { value } = e.target;
    const newFilters = { ...filters, order: value };
    setFilters(newFilters);
    handleFilters(newFilters);
  };
  //handle date change
  const handleDate = (e) => {
    const { value } = e.target;
    const newFilters = { ...filters, date: value };
    setFilters(newFilters);
    handleFilters(newFilters);
  };
  //handle search change
  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };
  // handle search
  const handleSearch = () => {
    if (searchValue === " ") {
      alert("Enter Something to Search");
      return;
    } else {
      const newFilters = { ...filters, search: searchValue };
      setFilters(newFilters);
      handleFilters(newFilters);
    }
  };

  //Get current Posts
  const indexOfLastTemplate = currentPage * templatesPerPage;
  const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;
  const CurrentList = filteredTemplates.slice(
    indexOfFirstTemplate,
    indexOfLastTemplate
  );

  return (
    <section className="App">
      <Filter
        handleOrder={handleOrder}
        handleDate={handleDate}
        handleSearchChange={handleSearchChange}
        handleSearch={handleSearch}
      />
      <div className="freetemplate-info">
        <img src={infoIcon} alt="info" className="info-icon" />
        <span className="info-text">
          Tada! Get started with a free template. Can???t find what you are
          looking for? Search from the 1000+ available templates
        </span>
      </div>
      <div className="template-container">
        <div className="templatecontainer-header">
          <h4 className="templatecontainer-headertext">All Templates</h4>
          <span className="numberof-templates">
            {loading ? " " : filteredTemplates.length} templates
          </span>
        </div>
        {loading ? (
          <p>Loading, please wait...</p>
        ) : (
          <div className="templates">
            {CurrentList.map((template) => {
              return (
                <TemplateCard key={template.created} template={template} />
              );
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
