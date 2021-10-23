import React from 'react';


const SearchResults = (props) => {
    const {urlsData} = props;
    
    return (
        <>
            <ul>
                {urlsData && (urlsData.map((data) => {
                    return <li key={data.originalLink}><span className="left">{data.shortLink}</span><span className="right">{data.originalLink}</span></li>
                }))}
            </ul>
        </>
    )
}


export default SearchResults;