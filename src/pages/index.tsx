import { useState, useEffect } from "react";

interface ChatEntry {
  id: number;
  content: string;
  answer: string;
  createdAt: string;
}

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [history, setHistory] = useState<ChatEntry[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await fetch("/api/history");
      const data = await res.json();
      setHistory(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAsk = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer);
      setQuestion("");
      await fetchHistory();
    } catch (err) {
      console.error(err);
      setAnswer("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-gray-100 to-gray-200 font-sans text-gray-800">
      <main className="flex flex-col md:flex-row items-start justify-center flex-grow p-8 gap-12">
        
        <div className="mt-10 w-full md:w-1/2">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-2">AI Assistant</h1>
          <span className="text-sm font-mono text-gray-600 mb-6 block">Model: gpt-3.5-turbo</span>

          <textarea
            className="border border-gray-400 p-4 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white"
            placeholder="Ask me anything..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={5}
          />

          <button
            onClick={handleAsk}
            disabled={loading}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all disabled:bg-gray-400"
          >
            {loading ? "Thinking..." : "Ask"}
          </button>

          {answer && (
            <div className="mt-8 bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-3 text-gray-900">Latest Answer:</h2>
              <p className="text-gray-700 leading-relaxed">{answer}</p>
            </div>
          )}
        </div>

        {history.length > 0 && (
          <div className="mt-10 w-full md:w-1/2">
            <h2 className="text-3xl font-extrabold mb-6 text-blue-700">Chat History</h2>
            <div className="space-y-6">
              {history.map((entry) => (
                <div key={entry.id} className="bg-white p-5 rounded-lg shadow-md">
                  <p className="text-gray-800"><strong>Q:</strong> {entry.content}</p>
                  <p className="mt-2 text-gray-600"><strong>A:</strong> {entry.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      <footer className="w-full flex flex-col items-center justify-center py-6 border-t bg-gray-100">
        <p className="text-gray-700 font-semibold mb-2">
          Developed by Michael Morais
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/itsmorais"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors"
          >
            {/* GitHub Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.746.083-.731.083-.731 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.932 0-1.31.47-2.382 1.236-3.222-.124-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.004 2.045.137 3 .404 2.29-1.553 3.297-1.23 3.297-1.23.655 1.649.243 2.873.12 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.192.694.8.576C20.565 21.795 24 17.297 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/michael-morais22/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-700 transition-colors"
          >
            {/* LinkedIn Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.5c0-1.082-.918-2-2-2s-2 .918-2 2v4.5h-3v-9h3v1.344c.465-.721 1.316-1.344 2.5-1.344 1.654 0 3 1.346 3 3v6z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
