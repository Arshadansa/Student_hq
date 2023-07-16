import React, { useState } from 'react';
import axios from 'axios';

const GptContentGenerator = () => {
  const [topic, setTopic] = useState('');
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: `${topic}: ${prompt}`,
        max_tokens: 200,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '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',
        },
      });

      const { choices } = response.data;
      const generatedText = choices[0].text.trim();
      setGeneratedContent(generatedText);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="topic" className="block mb-2 font-bold text-gray-800">Topic</label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="prompt" className="block mb-2 font-bold text-gray-800">Prompt</label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Generate Content
        </button>
      </form>
      {generatedContent && (
        <div className="mt-8">
          <h2 className="text-xl font-bold">Generated Content:</h2>
          <div
            className="mt-4 prose"
            dangerouslySetInnerHTML={{ __html: generatedContent }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default GptContentGenerator;
