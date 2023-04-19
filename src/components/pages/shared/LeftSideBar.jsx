import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const LeftSideBar = () => {
    const [category,setCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])

    console.log(category);
    return (
        <div>
            <h1 className='text-xl font-bold mb-4'>All Category</h1>
            {
                category.map(data => <><button key={data.id} className="btn btn-outline mb-2 w-[75%]">{data.name}</button><br /></>
                )
            }
            
        </div>
    );
};

export default LeftSideBar;