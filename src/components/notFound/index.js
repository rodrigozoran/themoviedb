import React from 'react'
import { useRouteError } from "react-router-dom";

import '../notFound/styles.css'

export default function ErrorPage() {

    const error = useRouteError();
    //console.log(error);

  return (
      <div id="error-page">
          <h1>Oops!</h1>
          <p>Foi mal, mas essa página não existe.</p>
          <p>
              <i>{error.statusText} </i>
              <i> | {error.status}</i>
          </p>
      </div>
  )
}
