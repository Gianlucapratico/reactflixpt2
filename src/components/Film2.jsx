import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

function Film2() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.omdbapi.com/?apikey=f3555eb4&s=Lord%20Of%20Rings"
      );
      const responseData = await response.json();
      setData(responseData.Search);
    };

    fetchData();
  }, []);

  return (
    <div className="px-4 py-4 bg-dark text-white">
      <h4 className="fs-2">Watch It Again</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-6 mb-4 no-gutters text-center">
        {data ? (
          data.slice(0, 6).map((movie) => (
            <div key={movie.imdbID} className="col mb-2 px-1">
              <Card className="bg-dark border border-0">
                <Card.Img
                  className="img-fluid"
                  src={movie.Poster}
                  alt={movie.Title}
                  style={{ height: "200px", width: "350px" }}
                />
              </Card>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Film2;
