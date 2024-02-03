import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
const api =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=date&key=AIzaSyAW984zpYhC3J6kDPGUBptxcYhGnJif7CM";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(api)
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
          let videoLink = `https://www.youtube.com/watch?v=${videoId}`;
          return (
            <div key={i} className="col-sm-12 col-md-6 col-lg-4 mb-4">
              <Card style={{ width: "25rem" }} className="text-center">
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
