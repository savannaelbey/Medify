function Search(props) {
  const { setSearch } = props;

  return (
    <>
      <input type="text" onChange={(event) => {setSearch(event.target.value);}}></input>
    </>
  );
}

export default Search;
