import Hashtag from "../../components/hashtag";
import { 
    TrendingBox, 
    TrendingTitle, 
    TrendingSeparator, 
    TrendingList,
    TrendingContainer } 
from "./style";

export default function Trending({hashtagsList}) {
    
    return(
    <TrendingContainer>
        <TrendingBox>
            <TrendingTitle>trending</TrendingTitle>
                <TrendingSeparator/>
                    <TrendingList>
                    {(
                        hashtagsList?.map((hash, i) => <Hashtag key={i} hashtagName={'#'+hash.name} />)
                    )}
                    </TrendingList>
            </TrendingBox>
    </TrendingContainer>
    );
}