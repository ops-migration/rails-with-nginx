import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMessage = () => {
    setLoading(true);
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("API not reachable"))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h1>React Frontend</h1>
      <button onClick={fetchMessage} disabled={loading}>
        {loading ? "Loading..." : "Get Message from Backend"}
      </button>
      <p>Message from Rails API: {message}</p>
    </div>
  );
}

export default App;
