import React, { useEffect, useState } from 'react';

const LocationComp = () => {

  return (
    <>
      <UrlPropertiesExample/>
    </>
  );
}

export default LocationComp;

const UrlPropertiesExample = () => {
    const [urlProperties, setUrlProperties] = useState({
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      port: '',
      protocol: '',
      search: '',
    });
  
    useEffect(() => {
      // Set initial URL properties from window.location
      setUrlProperties({
        hash: window.location.hash,
        host: window.location.host,
        hostname: window.location.hostname,
        href: window.location.href,
        origin: window.location.origin,
        pathname: window.location.pathname,
        port: window.location.port,
        protocol: window.location.protocol,
        search: window.location.search,
      });
    }, []);
  
    const updateUrl = () => {
      // Example of updating the URL properties
      const newHash = '#new-section';
      const newSearch = '?query=example';
  
      // Update the URL without reloading
      window.history.pushState({}, '', `${window.location.pathname}${newSearch}${newHash}`);
  
      // Update state with new values
      setUrlProperties((prev) => ({
        ...prev,
        hash: newHash,
        search: newSearch,
      }));
    };
  
    return (
      <div>
        <h1>URL Properties</h1>
        <p><strong>Hash:</strong> {urlProperties.hash}</p>
        <p><strong>Host:</strong> {urlProperties.host}</p>
        <p><strong>Hostname:</strong> {urlProperties.hostname}</p>
        <p><strong>Href:</strong> {urlProperties.href}</p>
        <p><strong>Origin:</strong> {urlProperties.origin}</p>
        <p><strong>Pathname:</strong> {urlProperties.pathname}</p>
        <p><strong>Port:</strong> {urlProperties.port}</p>
        <p><strong>Protocol:</strong> {urlProperties.protocol}</p>
        <p><strong>Search:</strong> {urlProperties.search}</p>
        <button onClick={updateUrl}>Update URL</button>
      </div>
    );
  };
  
