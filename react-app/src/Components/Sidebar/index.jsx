import React, { useEffect, useState } from "react";
import "./style.css";
import { GetCategory } from "../../Platform/Api";
import { NavLink } from "react-router-dom";


export const Sidebar = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        getCategoryList()
    }, [])
    

    const getCategoryList = async() => {
        try {
            const result = await GetCategory()
            if(result.data) {
                setCategory(result.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return <nav className="sidebar">
        <ul className="cat-items">
            {category ? category.map((item, index) =>
                <li className="cat-item" key={index} >
                    <NavLink 
                        className={({isActive}) => isActive ? "active" : null} 
                        to={`${item.id}`} 
                    >
                        {item.name}
                    </NavLink>
                </li>     
                ) :null                
            }
        </ul>
    </nav>
}