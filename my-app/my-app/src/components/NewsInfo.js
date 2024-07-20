import newsImage from './../assets/news.jpg';

function NewsInfo({ article, isSearchPage, searchWord }) {
    return (
        <div className='News-info'>

            {isSearchPage
                ? <>
                    <h2>
                    <a href={article.webUrl}>
                            {article.webTitle.split(searchWord)[0]}
                            <span style={{ backgroundColor: "yellow" }}>{searchWord}</span>
                            {article.webTitle.split(searchWord)[1]}
                        </a>
                    </h2>
                    <img src={newsImage} />
                    <p id="date-info">{article.webPublicationDate.split("T")[0]}</p>
                    <hr />
                    <p>In the aftermath of Joe Biden’s disastrous debate performance, left-leaning Americans can’t stop talking about the vice-president online. Memes about Kamala Harris are spreading with a speed and enthusiasm previously unseen on X and Instagram.</p>

                </>
                :
                <>

                    <h2>
                    <a href={article.webUrl}>{article.webTitle}</a>
                    </h2>
                    <img src={newsImage} />
                    <p id="date-info">{article.webPublicationDate.split("T")[0]}</p>
                    <hr />
                    <p>In the aftermath of Joe Biden’s disastrous debate performance, left-leaning Americans can’t stop talking about the vice-president online. Memes about Kamala Harris are spreading with a speed and enthusiasm previously unseen on X and Instagram.</p>

                </>
            }
        </div>

    );
}

export default NewsInfo;