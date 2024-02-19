import axios from 'axios';
import { Search } from 'lucide-react';

const SearchForm = ({
  username,
  setUsername,
  setUserInfos,
  setPendingRequest,
  setFetchError,
}) => {
  const searchUserInfos = async (event, username) => {
    event.preventDefault();

    try {
      setPendingRequest(true);
      setFetchError('');
      const infos = await axios.get(`https://api.github.com/users/${username}`);
      setUserInfos(infos.data);
      setPendingRequest(false);
    } catch (e) {
      setUserInfos(null);
      setFetchError(`Couldn't find user ${username}`);
      setPendingRequest(false);
    }
  };

  return (
    <form
      className="flex justify-center max-w-sm gap-3 mx-auto mb-5"
      onSubmit={(e) => searchUserInfos(e, username)}>
      <input
        type="text"
        className="input input-bordered"
        placeholder="Search by username..."
        value={username}
        onChange={(e) => setUsername(e.target.value.toLowerCase())}
      />
      <button
        type="submit"
        className="btn btn-outline">
        <Search />
      </button>
    </form>
  );
};

export default SearchForm;
