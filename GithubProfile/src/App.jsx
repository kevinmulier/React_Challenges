import axios from 'axios';
import { Folder, Search, UserCheck } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [userInfos, setUserInfos] = useState(null);
  const [pendingRequest, setPendingRequest] = useState(false);
  const [fetchError, setFetchError] = useState('');

  const searchUserInfos = async (username) => {
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

  if (pendingRequest) {
    return (
      <>
        <section className="flex items-center justify-center w-full max-w-xl gap-8 p-4 sm:px-10 sm:py-6 rounded-2xl max-sm:flex-col bg-gradient-to-br from-base-100 to-base-300">
          <div className="w-20 h-20 rounded-full aspect-square skeleton"></div>
          <article className="flex flex-col gap-2">
            <div className="w-24 h-4 skeleton"></div>
            <div className="w-20 h-4 mb-4 skeleton"></div>
            <div className="w-40 h-4 skeleton"></div>
            <div className="w-40 h-4 skeleton"></div>
          </article>
        </section>
      </>
    );
  }

  if (userInfos === null) {
    return (
      <>
        <div className="flex justify-center max-w-sm gap-3 mx-auto mb-5">
          <input
            type="text"
            className="input input-bordered"
            placeholder="Search by username..."
            value={username}
            onChange={(e) => setUsername(e.target.value.toLowerCase())}
          />
          <button
            className="btn btn-outline"
            onClick={() => searchUserInfos(username)}>
            <Search />
          </button>
        </div>
        {fetchError && <p className="alert alert-error">{fetchError}</p>}
      </>
    );
  }

  return (
    <>
      <div className="flex justify-center max-w-sm gap-3 mx-auto mb-5">
        <input
          type="text"
          className="input input-bordered"
          placeholder="Search by username..."
          value={username}
          onChange={(e) => setUsername(e.target.value.toLowerCase())}
        />
        <button
          className="btn btn-outline"
          onClick={() => searchUserInfos(username)}>
          <Search />
        </button>
      </div>
      <section className="flex items-center justify-center w-full max-w-xl gap-8 p-4 sm:px-10 sm:py-6 rounded-2xl max-sm:flex-col bg-gradient-to-br from-base-100 to-base-300">
        <img
          src={userInfos.avatar_url}
          alt={`${userInfos.login}'s avatar`}
          className="max-w-52 sm:w-4/12 border-[10px] rounded-full aspect-square border-neutral"
        />
        <article className="flex flex-col max-sm:text-center sm:w-8/12">
          <h1 className="text-lg font-semibold">{userInfos.login}</h1>
          <span className="text-sm font-thin text-opacity-70 text-info">
            {userInfos.company}
          </span>
          <span className="text-sm italic font-thin text-opacity-70 text-info">
            {userInfos.location}
          </span>
          <p className="mt-2 mb-6 text-xs">{userInfos.bio}</p>
          <div className="flex gap-8 text-xs max-sm:justify-center">
            <span className="flex items-center gap-1">
              <UserCheck />
              {userInfos.followers}
            </span>
            <span className="flex items-center gap-1">
              <Folder />
              {userInfos.public_repos}
            </span>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
