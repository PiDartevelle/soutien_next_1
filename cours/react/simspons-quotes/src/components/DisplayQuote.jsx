import React from 'react';

function DisplayQuote({quote}) {
  return (
    quote && (
      <>
      <div>{quote.quote}</div>
      <div>{quote.character}</div>
      <img src={quote.image} alt='machin' img/>
      </>
    )
  )
}

export default DisplayQuote;