import React, { useState } from 'react';

const Iframe = () => {  
  const iframeUrl = 'http://172.16.174.201:81/test_navision/test_mms/Middleware_ctrl/middleware';
  const [isLoaded, setIsLoaded] = useState(false);
  const [iframeKey, setIframeKey] = useState(0); // Initialize the key

  const handleLoad = () => {
    // This function will be called when the iframe has fully loaded
    setIsLoaded(true);
    // alert('Iframe content has been fully loaded.');
    // You can display a prompt or perform other actions here

    // Increment the key to trigger a re-mount of the iframe
    setIframeKey(prevKey => prevKey + 1);
  };

  return (
    <div>
      <header>
        {/* <p>This is iframe</p> */}
      </header>
      <iframe
        key={iframeKey} // Set the key to trigger re-mount
        title="Your Frame Title"
        src={iframeUrl}
        width="100%"
        height="125px"
        frameBorder="0"
        onLoad={handleLoad}
      ></iframe>
      {/* {isLoaded && <p>The iframe content has been fully loaded.</p>} */}
    </div>
  );
}

export default Iframe;
