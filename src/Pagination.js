import "./style/pagination.css"

function Pagination() {
    let pageNo = [];
for (var i = 1; i <= 20; i++) {
   pageNo.push(i);
}
console.log(pageNo)
    return(
        <ul className="flex justify-between">
            {pageNo.map((page, index) => (
                <li key={index}>
                    <a href="/" className="page-link">{page}</a>
                </li>
            ))}
        </ul>
    )
}

 export default Pagination