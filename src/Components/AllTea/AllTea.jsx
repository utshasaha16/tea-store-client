import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TeaCard from '../TeaCard/TeaCard';

const AllTea = () => {
    const teas = useLoaderData();
    return (
        <div>
            <h2 className='text-center mt-4 text-2xl font-bold'>All Teas {teas.length}</h2>
            <div className='grid md:grid-cols-3 gap-5 w-[90%] mx-auto'>
                {
                    teas.map(tea => <TeaCard key={tea._id} tea={tea}></TeaCard>)
                }
            </div>
        </div>
    );
};

export default AllTea;