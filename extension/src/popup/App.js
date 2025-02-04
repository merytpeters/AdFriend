import React from 'react';

const Popup = () => {
    // All features will be handled here

    // api call to get motivational quotes
    const apiUrl = "https://zenquotes.io/api/quotes"
    fetch(apiUrl)
       .then((response) => response.json())

    // sends changes via message to background.js with chrome.runtime.onMessage

    return (
    <div>
        <h1>Popup Page</h1>
        <p>Popup Content</p>
    </div>
    )
}

export default Popup;