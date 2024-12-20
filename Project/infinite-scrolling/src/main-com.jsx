import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Pagination() {
  const [isLoading, setLoading] = useState(false);
  const [value, setValue] = useState([]);
  const [offset, setOffset] = useState(1);
  const containerRef = useRef(null);

  async function fetchAPI() {
    try {
      setLoading(true);
      const url = `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${offset}`;
      const response = await axios.get(url);
      setValue((prevPhotos) => [...prevPhotos, ...response.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleScroll = () => {
    const container = containerRef.current;

    if (
      container.scrollHeight - container.scrollTop <=
      container.clientHeight + 10
    ) {
      setOffset((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [offset]);

  return (
    <>
      <div ref={containerRef} onScroll={handleScroll}>
        {value.map((photo) => (
          <div key={photo.id} style={{ marginBottom: "10px" }}>
            <img src={photo.thumbnailUrl} alt={photo.title} width="100px" />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
      {isLoading && <p style={{ textAlign: "center" }}>Loading...</p>}
    </>
  );
}
