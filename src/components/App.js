import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

// import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

import useVideos from '../hooks/useVideos';

const App = () => {
  // // Videos - Output of custom hook -> videos
  // const [videos, setVideos] = useState([]);

  // Selection
  const [selectedVideo, setSelecteVideo] = useState(null);

  // Call custom hooks 
  const [videos, search] = useVideos('Pekora Peko')

  // alternative to setSelecteVideo(response.data.items[0]);
  // making use of the useEffect whenever there a new videos
  useEffect(()=>{
    setSelecteVideo(videos[0]);
  }, [videos])

  // // Videos - Input to Custom Hook
  // // roughly equivalent to componentDidMount
  // useEffect(() => {
  //   onTermSubmit('Pekora Peko');
  // }, []);


  // // Videos - Output of custom hook -> onTermSubmit
  // const onTermSubmit = async (term) => {
  //   // console.log(term);
  //   const response = await youtube.get('/search', {
  //     params: {
  //       q: term,
  //     },
  //   });

  //   // console.log(response.data.items);
  //   setVideos(response.data.items);


  //   // Selection
  //   setSelecteVideo(response.data.items[0]);
  // };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      {/* <SearchBar onFormSubmit={onTermSubmit} /> */}
      <br />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onVideoSelect={setSelecteVideo}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
/*
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('Pekora Peko');
  }

  onTermSubmit = async (term) => {
    // console.log(term);
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    // console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    // console.log('From the App!', video);
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <br />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
*/
