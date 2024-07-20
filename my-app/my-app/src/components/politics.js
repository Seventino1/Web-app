import { useEffect, useState } from "react";
import { getArticlesByTag } from "../api";
import NewsInfo from "./NewsInfo";
import Wrapper from "./Wrapper";


function Politics() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async (tag) => {
        const data = await getArticlesByTag('politics/politics');
        setArticles(data.data.response.results);

    }

    return (
        <Wrapper apiRequest={'politics/politics'} setArticles={setArticles}>
            
            {articles.map(article => {
                return <NewsInfo article={article} />
            })}
        </Wrapper>
    );
}

export default Politics;