import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Gadget from './Gadget';

const AllGadgets = () => {

    const { category } = useParams();
    const data = useLoaderData();

    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        if (category) {
            const filterCategory = [...data].filter(
              (gadget) => gadget.category === category
            );
            setGadgets(filterCategory);
        }
        else {
            setGadgets(data);
        }

    },[category, data])

    return (
      <div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {gadgets.map((gadget) => (
            <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
          ))}
        </div>
      </div>
    );
};

export default AllGadgets;