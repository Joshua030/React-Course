import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote  } from "../03-examples";
// import { Quote } from "./Quote ";
// import { useFetch } from "../hooks/useFetch"

export const Layout = () => {
    const {counter,increment} = useCounter();
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];
    
    
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            {/* {adfjklñ}
                isLoading

                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-1">{quote}</p>
                            <footer className="blockquote-footer"> Jose Ceballos </footer>
                        </blockquote>
                    )
            } */}
           { isLoading
            ? <LoadingQuote />
            : <Quote  
            author = {author}
            quote = {quote}
            />
           }
<button 
disabled={isLoading}
onClick={()=>increment()} 
className="btn btn-primary">
Next quote
</button>


        </>
    )
}
