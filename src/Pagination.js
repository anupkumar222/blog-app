import "./style/pagination.css"

function Pagination(props) {
let {articlesCount, articlesPerPage, activePageIndex, updateCurrentPageIndex} = props
let numberOfPages = Math.ceil(articlesCount / articlesPerPage)
let pagesArray = [];


for(let i = 1; i <= numberOfPages; i++) {
    pagesArray.push(i)
}

    return(
        <ul className="flex justify-between">
            <p
            className="prev"
            onClick={() => updateCurrentPageIndex(activePageIndex -1 < 1 ? 1 : activePageIndex -1)} 
            ><i className="fa-solid fa-backward"></i> Prev
                </p>
            {pagesArray.map((page) => (
                <li  className="page-box">
                    <span onClick={() => updateCurrentPageIndex(page)} 
                    className={`${activePageIndex === page ? "active-page page-link" : "page-link"}`}>
                        {page}
                        </span>
                </li>
            ))}
            
              <p
              className="prev"
            onClick={() => updateCurrentPageIndex(
                activePageIndex + 1 > numberOfPages ? numberOfPages : activePageIndex + 1)} 
            > Next <i className="fa-solid fa-forward"></i></p>
        </ul>
    )
}

 export default Pagination