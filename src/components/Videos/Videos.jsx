import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
const api =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&order=date&key=AIzaSyDaCdr3o0J4oCYeh7Kq3mZmgLd3_SmDwJY";

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
      {videos.map((video, i) => {
        let videoId = video.id.videoId;
        let videoLink = `https://www.youtube.com/watch?v=${videoId}`;
        return (
          <Card
            style={{ width: "18rem" }}
            className="container col-sm-12 col-md-6 col-lg-4"
            key={i}
          >
            <a href={videoLink} className="text-lead text-decoration-none">
              <Card.Img variant="top" src={video.snippet.thumbnails.high.url} />
            </a>
            <Card.Body>
              <a href={videoLink} style={{ textDecoration: "none" }}>
                <Card.Title>{video.snippet.title}</Card.Title>
              </a>
              <Card.Text>{video.snippet.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );

};

export default Videos;
