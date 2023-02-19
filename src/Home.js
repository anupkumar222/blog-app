import React from "react"
import Banner from "./Banner"
import FeedNav from "./FeedNav"
import Posts from "./Posts"
import Pagination from "./Pagination"
import Sidebar from "./Sidebar"

function Home() {
    return(
        <main>
            <Banner />
            <div className="container flex justify-between">
                <div className="section ">
                <FeedNav />
                <Posts />
                <Pagination />
                </div>
                <Sidebar />
            </div>
        </main>
    )
}

export default Home