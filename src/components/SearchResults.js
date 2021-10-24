import React from 'react';


const SearchResults = React.memo((props) => {
    const {urlsData} = props;

    function copyLink(text) {
        

        // getLink.select();
        // getLink.setSelectionRange(0, 9999);

        navigator.clipboard.writeText(text)
    }
    
    return (
        <>
            <ul>
                {urlsData && (urlsData.map((data) => {
                    return <li key={data.originalLink}><span className="left">{data.shortLink}</span><span className="right">{data.originalLink}<button className="copyBtn" onClick={() => copyLink(data.shortLink)}>Copy</button></span></li>
                }))}
            </ul>
        </>
    )
})


export default SearchResults;