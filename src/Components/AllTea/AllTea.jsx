import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TeaCard from '../TeaCard/TeaCard';

const AllTea = () => {
    const loadedTeas = useLoaderData();
    const [teas, setTeas] = useState(loadedTeas)
    return (
        <div>
            <h2 className='text-center mt-4 text-2xl font-bold'>All Teas {teas.length}</h2>
            <div className='grid md:grid-cols-3 gap-5 w-[90%] mx-auto'>
                {
                    teas.map(tea => <TeaCard key={tea._id} teas={teas} setTeas={setTeas} tea={tea}></TeaCard>)
                }
            </div>
        </div>
    );
};

export default AllTea;