import searchImg from "../../assets/images/search-ico.svg";

interface searchBarProps {
  placeholder?: string;
}

const SearchBar = (props: searchBarProps) => {
  const { placeholder } = props;
  return (
    <div className="searchbox">
      <div className="form-group">
        <input
          placeholder={placeholder ? placeholder : "Search Doctors..."}
          type="text"
          id="formBasicSearch"
          className="form-control"
          value=""
        />
      </div>
      <button type="submit" className="btn btn-transparent">
        <img src={searchImg} alt="Find Doctors for you" />
      </button>
    </div>
  );
};

export default SearchBar;
