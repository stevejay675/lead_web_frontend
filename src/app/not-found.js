import Link from "next/link";

export default function NotFound(){
    return(
       <div className="not-found-page">
         <h1>Page not found!!!!</h1>
         <Link href={'/'} className="return-link">go back to HomePage</Link>
       </div>
    );
}