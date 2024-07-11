import Link from "next/link"; 
export default function NotFound(){
    return(
        <div>
            <h1>
                Sorry there is no page on this url
            </h1>
            <Link href="/">Go to homepage</Link>
        </div>
    )
}