import CardList from "../components/CardList";
import PriceInputs from "../components/PriceInputs";
import SearchIcon from "../icons/SearchIcon";

export default function MainPage() {

    return (
        <div className="bg-white py-24 sm:py-16 container mx-auto">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-5">Главная страница</h2>
                </div>
            </div>

<div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

<div className="w-full flex flex-row justify-between max-w-7xl">
        <div className="relative mt-3 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon />
            </div>

            <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md border-0 py-1.5 pl-8 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Поиск..."
            />
        </div>

       <PriceInputs />
        </div>
</div>

        <CardList />
        </div>
    )
}