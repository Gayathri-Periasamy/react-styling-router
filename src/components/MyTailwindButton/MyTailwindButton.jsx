import 'tailwindcss'
function MyTailwindButton() {
    return (
            <button type="button" className="bg-black text-white rounded-lg font-bold cursor-pointer
              transition-all duration-300 ease-in-out w-full md:w-auto px-4 py-2 md:px-6 md:py-3
              hover:bg-gray-700 hover:shadow-md 
              md:hover:shadow-xl disabled:bg-gray-500 disabled:text-gray-200 
              disabled:cursor-not-allowed disabled:opacity-50 ">Tailwind Button</button>
    )

}
export default MyTailwindButton