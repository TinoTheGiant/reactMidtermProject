import React, { useEffect, useState } from "react";
import "./App.css";

const ManUtdFixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [filteredFixtures, setFilteredFixtures] = useState([]);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFixtures = async () => {
      const url =
        "https://api.allorigins.win/get?url=https://fixturedownload.com/feed/json/epl-2024";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const proxyData = await response.json();
        const data = JSON.parse(proxyData.contents);

        const manUtdFixtures = data.filter(
          (match) =>
            match.HomeTeam === "Man Utd" || match.AwayTeam === "Man Utd"
        );

        setFixtures(manUtdFixtures);
        setFilteredFixtures(manUtdFixtures);
      } catch (err) {
        console.error("Error fetching fixtures:", err);
        setError(err.message);
      }
    };

    fetchFixtures();
  }, []);

  useEffect(() => {
    if (filter === "home") {
      setFilteredFixtures(
        fixtures.filter((match) => match.HomeTeam === "Man Utd")
      );
    } else if (filter === "away") {
      setFilteredFixtures(
        fixtures.filter((match) => match.AwayTeam === "Man Utd")
      );
    } else {
      setFilteredFixtures(fixtures);
    }
  }, [filter, fixtures]);

  return (
    <div className="fixtures-container">
      <h1 id="fixtures">Manchester United Fixtures (2024/25)</h1>
      <div className="fixtures-buttons">
        <button onClick={() => setFilter("all")}> All </button>
        <button onClick={() => setFilter("home")}>Home</button>
        <button onClick={() => setFilter("away")}>Away</button>
      </div>
      {error ? (
        <div className="error-message">Error: {error}</div>
      ) : filteredFixtures.length > 0 ? (
        <div className="fixtures-grid">
          {filteredFixtures.map((fixture, index) => (
            <div className="fixtures-grid-item" key={index}>
              <strong>
                {fixture.HomeTeam} vs {fixture.AwayTeam}
              </strong>
              <p id="date">Date: {new Date(fixture.DateUtc).toLocaleString()}</p>
              <p id="location">Location: {fixture.Location}</p>
              <div className="fixtures-score">
                  {fixture.HomeTeamScore} - {fixture.AwayTeamScore}
                </div>
            </div>
          ))}
        </div>
      ) : (
        <img src="/loader.gif" alt="loading" />
      )}
    </div>
  );
};

export default ManUtdFixtures;






