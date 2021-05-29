import React from "react"

const Pagination=({templatesPerPage, totaltemplates, handlePageChange})=>{

const pageNumbers = []

const displayPage = Math.ceil(totaltemplates / templatesPerPage);
for(let i=1; i<=displayPage; i++){
    pageNumbers.push(i);
}

	
    return(
        <nav className="pages-container">
<ul className="pages-ul">
{pageNumbers.map((pageNumber)=>{
return(
    <li onClick={()=>handlePageChange(pageNumber)} className="page-number" key={pageNumber}>
{pageNumber}
    </li>
)

})}
</ul>
        </nav>
    )
}




export default Pagination