import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { productsSearch } from "../../features/productsSlice";
import { blogsSearch } from "../../features/blogsSlice";
import { booksSearch } from "../../features/booksSlice";
import { sculpturesSearch } from "../../features/sculpturesSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchResults, setSearchResults] = useState("");

  const { searchResults: productResults, searchStatus: productStatus } =
    useSelector((state) => state.products);
  const { searchResults: blogResults, searchStatus: blogStatus } = useSelector(
    (state) => state.blogs
  );
  const { searchResults: bookResults, searchStatus: bookStatus } = useSelector(
    (state) => state.books
  );
  const { searchResults: sculptureResults, searchStatus: sculptureStatus } =
    useSelector((state) => state.sculptures);

  const handleSearch = (e) => {
    e.preventDefault();
    resetSearchResults();
    if (searchCategory === "products") {
      dispatch(productsSearch({ name: searchTerm, type: searchType }));
    } else if (searchCategory === "blogs") {
      dispatch(blogsSearch({ title: searchTerm, content: searchType }));
    } else if (searchCategory === "books") {
      dispatch(booksSearch({ title: searchTerm, author: searchType }));
    } else if (searchCategory === "sculptures") {
      dispatch(sculpturesSearch({ name: searchTerm, material: searchType }));
    }
  };

  const handleClear = () => {
    setSearchTerm("");
    setSearchType("");
    resetSearchResults();
  };

  const handleCategoryChange = (e) => {
    setSearchCategory(e.target.value);
    handleClear();
  };

  const resetSearchResults = () => {
    // Clear previous search results
    setSearchResults({
      products: [],
      blogs: [],
      books: [],
      sculptures: []
    });
  };

  return (
    <div className="container">
      <CategorySelect onChange={handleCategoryChange} value={searchCategory}>
        <option value="">Select Search Category</option>
        <option value="products">Products</option>
        <option value="blogs">Blogs</option>
        <option value="books">Books</option>
        <option value="sculptures">Sculptures</option>
      </CategorySelect>
      {searchCategory && (
        <SearchForm onSubmit={handleSearch}>
          <SearchInput
            type="text"
            placeholder={`Search by ${
              searchCategory === "blogs" ? "title" : "name"
            }...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchInput
            type="text"
            placeholder={`Search by ${
              searchCategory === "books" ? "author" : "type"
            }...`}
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          />
          <SearchButton type="submit">Search</SearchButton>
          <SearchButton type="button" onClick={handleClear}>
            Clear All
          </SearchButton>
        </SearchForm>
      )}

      {searchCategory === "products" && (
        <Section>
          <h2>Product Results</h2>
          {productStatus === "pending" && <p>Loading...</p>}
          {productStatus === "rejected" && (
            <p>Something went wrong. Please try again.</p>
          )}
          {productStatus === "success" && (
            <Results>
              {productResults.length ? (
                productResults.map((product) => (
                  <ProductCard key={product._id}>
                    <ProductName>{product.name}</ProductName>
                    <Type>{product.type}</Type>
                    <ProductImage src={product.image.url} alt={product.name} />
                    <Desc>{product.desc}</Desc>
                    <Price>{product.price}</Price>
                  </ProductCard>
                ))
              ) : (
                <p>No products found.</p>
              )}
            </Results>
          )}
        </Section>
      )}

      {searchCategory === "blogs" && (
        <Section>
          <h2>Blog Results</h2>
          {blogStatus === "pending" && <p>Loading...</p>}
          {blogStatus === "rejected" && (
            <p>Something went wrong. Please try again.</p>
          )}
          {blogStatus === "success" && (
            <Results>
              {blogResults.length ? (
                blogResults.map((blog) => (
                  <ProductCard key={blog._id}>
                    <ProductName>{blog.title}</ProductName>
                    <ProductImage src={blog.image.url} alt={blog.title} />
                    <Type>{blog.category}</Type>
                    <Desc>{blog.content}</Desc>
                  </ProductCard>
                ))
              ) : (
                <p>No blogs found.</p>
              )}
            </Results>
          )}
        </Section>
      )}

      {searchCategory === "books" && (
        <Section>
          <h2>Book Results</h2>
          {bookStatus === "pending" && <p>Loading...</p>}
          {bookStatus === "rejected" && (
            <p>Something went wrong. Please try again.</p>
          )}
          {bookStatus === "success" && (
            <Results>
              {bookResults.length ? (
                bookResults.map((book) => (
                  <ProductCard key={book._id}>
                    <ProductName>{book.title}</ProductName>
                    <ProductImage src={book.image.url} alt={book.title} />
                    <Type>{book.genre}</Type>
                    <Desc>{book.description}</Desc>
                    <Price>{book.price}</Price>
                  </ProductCard>
                ))
              ) : (
                <p>No books found.</p>
              )}
            </Results>
          )}
        </Section>
      )}

      {searchCategory === "sculptures" && (
        <Section>
          <h2>Sculpture Results</h2>
          {sculptureStatus === "pending" && <p>Loading...</p>}
          {sculptureStatus === "rejected" && (
            <p>Something went wrong. Please try again.</p>
          )}
          {sculptureStatus === "success" && (
            <Results>
              {sculptureResults.length ? (
                sculptureResults.map((sculpture) => (
                  <ProductCard key={sculpture._id}>
                    <ProductName>{sculpture.name}</ProductName>
                    <ProductImage
                      src={sculpture.image.url}
                      alt={sculpture.name}
                    />
                    <Type>{sculpture.material}</Type>
                    <Desc>{sculpture.description}</Desc>
                    <Price>{sculpture.price}</Price>
                  </ProductCard>
                ))
              ) : (
                <p>No sculptures found.</p>
              )}
            </Results>
          )}
        </Section>
      )}
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ccc;
`;

const CategorySelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  margin-bottom: 20px;
`;

const Section = styled.section`
  width: 100%;
  padding: 40px 0;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 200px;
`;

const SearchButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #1c2826;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 600px;
`;

const ProductCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  width: 300px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
`;

const Type = styled.p`
  font-size: 14px;
  color: #777;
  margin: 0;
`;

const Desc = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
`;

const Price = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
  font-weight: bold;
`;

export default Search;
