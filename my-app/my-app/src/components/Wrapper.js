import { getArticlesByTag } from "../api";



function Wrapper(props) {


    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const getData = async (page='1') => {
        const data = await getArticlesByTag(props.apiRequest, page);
        props.setArticles(data.data.response.results);

    }

    const clickHandler = (event) => {
        getData(event.target.name);
    }

    return (
        <div className="Wrapper">
            {props.children}
            <div className="paginator"> 
            {pages.map((page, index) => {
                return (
                    <button key={index} name={page} onClick={clickHandler}>{page}</button>
                )
            
            })}
            </div>
        </div>
    );
}

export default Wrapper;