/*
original author : Amon K. Daniel
Last updated by: Amon K. Daniel
date : 06/12/2024

description :  media query for desktop devices
*/
import React from "react";

// Hook for Media Query
export default function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [query]);

  return matches;
}
