import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const router = useRouteError();
    console.log(router);
    return(
        
        <div>
            <h1>
                Oops...Sorry Not Found!!!
            </h1>
            <h2>
              {router.error.message};
            </h2>
        </div>
    )
}

export default Error;