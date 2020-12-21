import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
  // Videos - Output of custom hook -> videos
  const [videos, setVideos] = useState([]);

  // Videos - Input to Custom Hook
  // roughly equivalent to componentDidMount
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  // Videos - Output of custom hook -> onTermSubmit
  const search = async (term) => {
    // console.log(term);
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    // console.log(response.data.items);
    setVideos(response.data.items);

    // // Selection
    // setSelecteVideo(response.data.items[0]);
  };

  // JS Way
  // return { videos, onTermSubmit };
  // React Way
  return [videos, search];
};

export default useVideos;
