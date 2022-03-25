import { 
    HashtagBlock
} from "./style";
import { Link } from "react-router-dom";

export default function Hashtag({hashtagName}) {

    return(
         <Link to={`/hashtag/${hashtagName.substr(1)}`}><HashtagBlock>{hashtagName}</HashtagBlock></Link>
    );
}