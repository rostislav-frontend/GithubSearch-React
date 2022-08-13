import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";
import { useLazyGetUserReposQuery, useSearchUsersQuery } from "../store/github/github.api"

import { RepoCard } from "../components/RepoCard";

export function HomePage() {
  const [search, setSearch] = useState('')
  const [dropdown, setDropdown] = useState<Boolean>(false)
  // custom hooks
  const debounced = useDebounce(search)

  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    // обновление данных при фокусе на страницу
    refetchOnFocus: true
  })

  const [fetchRepos, { isLoading: areReposLoading, data: repos }] = useLazyGetUserReposQuery()

  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0)
  }, [debounced, data])


  const clickHandler = (username: string) => {
    fetchRepos(username)
    setDropdown(false)
  }

  return (

    <section className='flex justify-center pt-10 mx-auto h-full w-full'>
      {isError && <p>Somethung went wrong... {isError}</p>}
      <div className='relative w-[560px]'>
        <input
          type="text"
          className='border py-2 px-4 w-full h-[42px] mb-2 focus:outline-none'
          placeholder="Search for Github username..."
          value={search}
          onChange={e => setSearch(e.target.value)}

        />

        {dropdown && <ul className="list-none overflow-y-scroll absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
          {isLoading && <p className="text-center">Loading</p>}
          {data?.map(user => (
            <li
              key={user.id}
              onClick={() => clickHandler(user.login)}
              className='py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
            >
              {user.login}
            </li>
          ))}
        </ul>}
        <div className="container list-repos">
          {areReposLoading && <p className="text-center">Repos are loading...</p>}
          {repos?.length === 0 ? <h2 className='text-[24px] font-bold text-center mt-[20px]'>Публичные репозитории отсутствуют</h2> : repos?.map( repo => <RepoCard repo={repo} key={repo.id} />)}
        </div>

      </div>


    </section>

  )
}
