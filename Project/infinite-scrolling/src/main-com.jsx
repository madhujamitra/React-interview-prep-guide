import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";

export default function Pagination() {
  const [isLoading, setLoading] = useState(false);
  const [value, setValue] = useState([]);
  const [offset, setOffset] = useState(1);
  const containerRef = useRef(null);

  const fetchAPI = useCallback(async () => {
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
  }, [offset]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (
      !isLoading &&
      container.scrollHeight - container.scrollTop <=
        container.clientHeight + 10
    ) {
      setOffset((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  return (
    <>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        style={{
          height: "500px",
          overflowY: "auto",
          border: "1px solid gray",
          padding: "10px",
        }}
      >
        {value.map((photo) => (
          <div key={photo.id} style={{ marginBottom: "10px" }}>
            <img src={photo.thumbnailUrl} alt={photo.title} width="100px" />
            <p>{photo.title}</p>
          </div>
        ))}
        {isLoading && <p style={{ textAlign: "center" }}>Loading...</p>}
      </div>
    </>
  );
}
