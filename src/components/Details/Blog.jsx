import { useState, useEffect } from "react";
import { setHeaders, url } from "../../features/api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Blog = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const res = await axios.get(
          `${url}/blogs/find/${params.id}`,
          setHeaders()
        );

        setBlog(res.data);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <StyledArticle>
      <ArticleContainer>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <ImageContainer>
              <img src={blog.image?.url} alt="article" />
            </ImageContainer>
            <ArticleDetails>
              <h3>{blog.name}</h3>
              <p>
                <span>Type:</span>
                {blog.type}
              </p>
              <p>
                <span>Description:</span>
                {blog.desc}
              </p>
              <p>
                <span>Content:</span>
                {article.content}
              </p>
              <button className="event-add-to-cart">Download</button>
            </ArticleDetails>
          </>
        )}
      </ArticleContainer>
    </StyledArticle>
  );
};

export default Blog;

const StyledArticle = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(5px); /* Blur effect */
`;

const ArticleContainer = styled.div`
  max-width: 500px;
  width: 100%;
  height: auto;
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  padding: 2rem;
`;

const ImageContainer = styled.div`
  flex: 1;
  img {
    width: 100%;
  }
`;

const ArticleDetails = styled.div`
  flex: 2;
  margin-left: 2rem;
  h3 {
    font-size: 35px;
  }
  p span {
    font-weight: bold;
  }
`;
