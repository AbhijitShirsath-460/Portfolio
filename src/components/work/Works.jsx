import React, { useEffect, useState } from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import WorksItem from './WorksItem';

const Works = () => {

    const [item, setItem] = useState({ name: "all" });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData)
        }
        else {

            const newProjects = projectsData.filter((project) => {
                return project.category.toLocaleLowerCase() === item.name;
            })

            setProjects(newProjects);

        }
    }, [item]);
    

    let handleClick = (e, index)=>{

        setItem({name: e.target.textContent.toLocaleLowerCase() });
        setActive(index);
    };


    // if(active== index){
    //     return "active-work";
    // }

    return (

        <div>
            <div className="work__filters">


                {
                    projectsNav.map((item, index) => {

                        return (

                            <span onClick={(e) =>{ handleClick(e, index);}} 
                            
                            className= {`${active === index ? "active-work" : " " } work__item` } 
                            
                            key={index}>{item.name}</span> 

                            // work__item

                        )
                    })
                }
            </div>


            <div className="work__container container grid">

                {
                    projects.map((item) => {

                        return <WorksItem item={item} key={item.id} data-aos="zoom-in" />;

                    })
                }
            </div>

        </div>
    )
}

export default Works
