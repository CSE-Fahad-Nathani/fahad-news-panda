import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewsBody from './components/NewsBody';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [category, setCategory] = useState("sports");
  const country = "us";
  const itemsPerPage = 6;

  // Fetching news
  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${category}&language=en&sortBy=publishedAt&apiKey=d8a5af0e801043bc8a880bda4b6f75fb`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch news data. Please try again.");
        console.error("Fetch error:", err);
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, country, currentPage]);

  if (loading)
    return (
      <h2
        style={{
          marginTop: '20%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Loading news...
      </h2>
    );

  if (error)
    return (
      <h2
        style={{
          marginTop: '20%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {error}
      </h2>
    );

  return (
    <div className='outermost-div'>
      <Header category={category} setCategory={setCategory} />
      <NewsBody
        itemsPerPage={itemsPerPage}
        articles={articles}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
