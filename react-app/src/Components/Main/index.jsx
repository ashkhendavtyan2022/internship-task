import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { GetPictures } from "../../Platform/Api";

export const Main = () => {
    const { id } = useParams()
    const [images, setCatImages]  = useState([])
    const [pagecount, setPagecount] = useState(1)

    useEffect(()=>{
        GetImageList(pagecount, id)
    }, [id])
       
    const GetImageList = async(page, id) => {
        const result = await GetPictures(page, id)
        if (result.data) {
            setCatImages(result.data)
        }
    }

   const loadMore = async (page) => {
        try {
            page++;
            const result = await GetPictures(page, id)
            result.data.map(item => images.push(item))
            setPagecount(page)
        } catch (error) {
            console.log(error)
        }
   }


   return <div className="main" >
    <div className="img-boxes">
        {images.map ((item, index) => {
                return <div key={index} className="img-div">
                <img src={item.url}  alt="img" />
            </div>
        }) }
    </div>
    <button className="loadmore" onClick={() => loadMore(pagecount)}>Load More</button>
   </div>
}