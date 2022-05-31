import React, {useRef, useEffect} from 'react';
import marketingMount from 'marketing/MarketingApp'; 
 
const MarketingApp = () => {

    useEffect(() => {
        marketingMount(ref.current);
    },[])

    const ref = useRef();

    return <div ref={ref}/>;
};

export default MarketingApp;