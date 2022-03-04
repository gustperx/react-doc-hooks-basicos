export const Quotes = ({ author, quote }) => {
  return (
    <blockquote className="relative p-4 mt-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
      <p className="mb-2 font-medium font-mono">{quote}</p>
      <footer className="text-sm text-violet-500"> --- {author}</footer>
    </blockquote>
  );
};
