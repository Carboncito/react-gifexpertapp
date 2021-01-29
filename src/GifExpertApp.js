import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);

    // const handleAdd = () => setcategories([...categories, "newCategory"] );
    // const handleAdd = () => setcategories( cats => [...cats, "newCategory"]  );

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories} />
            <hr />

            <ol>
                {
                    categories.map((category, i) =>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    )
};

export default GifExpertApp;
