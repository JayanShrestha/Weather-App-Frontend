import { useState, useEffect } from "react";

export default function useCitySearch(query) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query || query.length < 2) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setResults([]);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setLoading(true);

        const url =
          "https://nominatim.openstreetmap.org/search?" +
          new URLSearchParams({
            q: query,
            format: "json",
            addressdetails: 1,
            limit: 5,
          });

        const res = await fetch(url, {
          headers: {
            "User-Agent": "MyWeatherApp/1.0 (contact: jayan@example.com)",
            "Accept-Language": "en",
          },
        });

        const text = await res.text();

        let data = [];
        try {
          data = JSON.parse(text);
        } catch {
          console.error("City Search Error: Response was not JSON:", text);
          return;
        }

        const shaped = data.map((item) => ({
          name:
            item.address.city ||
            item.address.town ||
            item.address.village ||
            item.display_name,
          country: item.address.country,
          lat: item.lat,
          lon: item.lon,
        }));

        setResults(shaped);
      } catch (err) {
        console.error("City Search Error:", err);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [query]);

  return { results, loading };
}
