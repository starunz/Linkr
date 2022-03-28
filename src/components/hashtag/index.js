import { 
    HashtagBlock
} from "./style";

export default function Hashtag({hashtagName}) {

    return(
        <a href={`/hashtag/${hashtagName.substr(1)}`} >
            <HashtagBlock>
                {hashtagName}
            </HashtagBlock>
        </a>
    );
}