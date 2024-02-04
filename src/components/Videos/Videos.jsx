
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const API=null;
// const API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${
//   import.meta.env.VITE_APPLE_CHANNEL_ID
// }&maxResults=6&order=date&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const BASE_URL = "https://www.youtube.com/watch?v=";

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideos(data.items);
      });
  }, []);
  return (
    <>
      <h1 className="text-center mt-4">Latest Videos</h1>
      <div className="row container mx-auto">
        {videos?.map((video, i) => {
          let videoId = video.id.videoId;
          let videoLink = `${BASE_URL}${videoId}`;
          return (
            <div key={i} className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Card style={{ width: "21rem" }} className="text-center">
                <a href={videoLink} className="text-lead text-decoration-none">
                  <Card.Img
                    variant="top"
                    src={video.snippet.thumbnails.high.url}
                  />
                </a>
                <Card.Body>
                  <a href={videoLink} style={{ textDecoration: "none" }}>
                    <Card.Title>{video.snippet.title}</Card.Title>
                  </a>
                  <Card.Text>{video.snippet.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Videos;
