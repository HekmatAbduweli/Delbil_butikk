export default function Header() {
  return (
    <header className="bg-gray-800 text-white space-y-2">
      <div className="pt-2 pl-2">
        <h1 className="text-2xl font-bold">Admin Side</h1>
        <p className="text-sm underline">
          Her kan du redigere, slette og laste opp ny delbil liste.
        </p>
      </div>
      <div className="flex justify-between">
        <ul className="flex space-x-4">
          <li className=" p-4 text:white hover:bg-gray-600 active:outline-none active:text-black  active:bg-gray-400">
            home
          </li>
          <li className="p-4 text:white hover:bg-gray-600 active:outline-none active:text-black  active:bg-gray-400">
            statics
          </li>
          <li className=" p-4 text:white hover:bg-gray-600 active:outline-none active:text-black  active:bg-gray-400">
            archives
          </li>
        </ul>
        <button className=" p-4 text:white hover:bg-gray-600 active:outline-none active:text-black  active:bg-gray-400">
           admin
        </button>
      </div>
    </header>
  );
}
