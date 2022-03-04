import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "./Loading";
import { NextQuote } from "./NextQuote";
import { Quotes } from "./Quotes";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div className="container m-auto p-4">
      <h1 className="text-xl text-blue-700">Breakingbad Quotes</h1>
      <hr className="my-4" />

      {loading ? <Loading /> : <Quotes author={author} quote={quote} />}

      {!loading && <NextQuote increment={increment} />}
    </div>
  );
};
