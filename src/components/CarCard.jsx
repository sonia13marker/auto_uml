import { useState } from "react";
import Application from "./Application";

export default function CarCard({...product}) {
    const [open, setOpen] = useState(false);

    const openApplication = () => {
        setOpen(!open);
    }
    console.log(product)
    return (
    <>
    <div key={product.id} className="group relative">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <img
        src={product.imageSrc}
        alt={product.imageAlt}
        className="h-full w-full object-contain bg-white object-center lg:h-full lg:w-full"
      />
    </div>

    <div className="mt-4 flex justify-between flex-col justify-between">
      <div className="w-full flex justify-between">
        <h3 className="text-sm font-medium text-gray-900 flex flex-row">
            {product.name}, {product.color}
        </h3>
        <p className="text-sm font-medium text-red-700">
          {product.price} ₽
          </p>
      </div>
      <div className="flex flex-row items-center flex-wrap mt-1 gap-2">
        <p className="text-sm text-gray-700">Привод: {product.drive}</p>
        <p className="text-sm text-gray-700">Топливо: {product.fuel}</p>
        <p className="text-sm text-gray-700">л.: {product.liters_count}</p>
      </div>  
     
        <button className="mt-5 flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={openApplication}
        >
            Оставить заявку
        </button>
    </div>
  </div>
  <Application open={open} setOpen={setOpen} product={product}/>
  </>
)
}