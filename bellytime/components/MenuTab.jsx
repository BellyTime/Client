//메인페이지, 검색페이지, 채팅페이지에서 필터에 따라 불러오는 데이터가 다를 시 쓰는 메뉴탭

export const MenuTab = () => {
  return (
    <>
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">
          Select your country
        </label>
        <select
          id="tabs"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Profile</option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>
      </div>
      <ul class="flex hidden rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700">
        <li class="w-full">
          <a
            href="#"
            class="inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 focus:z-20 active dark:bg-gray-700 dark:text-white"
            aria-current="page"
          >
            Profile
          </a>
        </li>
        <li class="w-full">
          <a
            href="#"
            class="inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-500 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:z-20 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
          >
            Dashboard
          </a>
        </li>
        <li class="w-full">
          <a
            href="#"
            class="inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-500 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:z-20 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
          >
            Settings
          </a>
        </li>
        <li class="w-full">
          <a
            href="#"
            class="inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-500 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:z-20 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
          >
            Invoice
          </a>
        </li>
      </ul>
    </>
  );
};
