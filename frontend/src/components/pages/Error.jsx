import "../../styles/pages/Error.scss";
import {useEffect} from "react";

const Error = () => {
  useEffect(() => {
    document.title = "Page Not Found | ActiVi"
  }, [])

  return(
    <div className="error-page">
      <h1>404 Page Not Found</h1>
      <p>Hmm... seems like the page you were looking for was not found</p>
    </div>

  )
}

export default Error;