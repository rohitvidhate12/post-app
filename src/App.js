import { useEffect, useMemo, useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import Filter from "./components/filter";
import { useDispatch, useSelector } from "react-redux";
import { getPostList, searchPosts } from "./store/postSlice";

function App() {
  const [value, setValue] = useState("");
  const [sortBy, setSortBy] = useState("id");

  const filteredPostList = useSelector((state) => state.post.filteredPostList);
  const dispatch = useDispatch();

  const onSearch = (e) => {
    const val = e.target.value;
    setValue(val);
    dispatch(searchPosts(val));
  };

  const onSortSearch = (e) => {
    const val = e.target.value;
    console.log({ val });
    setSortBy(val);
  };

  useEffect(() => {
    dispatch(getPostList());
  }, []);

  const sortedList = useMemo(() => {
    const list = [...filteredPostList];
    if (sortBy === "id") {
      list.sort((x, y) => x.id - y.id);
    } else {
      list.sort((x, y) => y.id - x.id);
    }
    console.log(sortBy, list);

    return list;
  }, [filteredPostList.length, sortBy]);

  return (
    <div className="App">
      <Filter
        inputValue={value}
        setInputValue={onSearch}
        sortBy={sortBy}
        onChange={onSortSearch}
      />
      <PostList list={sortedList} />
    </div>
  );
}

export default App;
