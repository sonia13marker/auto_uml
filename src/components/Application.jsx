import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Application({ product, open, setOpen }) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="mt-3 text-center  sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900 text-center"
                    >
                      Оставить заявку
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 text-center">
                        Оставьте заявку на желаемый автомобиль прямо сейчас!
                      </p>
                    </div>
                  </div>
                </div>
                {/* внутреннее содержимое - форма */}
                <form
                  className="space-y-6 px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
                  action="#"
                  method="POST"
                >
                  <h3 className="mb-3 text-xl font-semibold leading-9 tracking-tight text-gray-900">
                    Данные пользователя:
                  </h3>
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Имя
                    </label>
                    <div>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Фамилия
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        required
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  {/*данные машины */}
                  <div>
                    <h3 className="mb-3 text-xl font-semibold leading-9 tracking-tight text-gray-900">
                      Данные машины:
                    </h3>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row gap-1">
                        <h3 className="text-m font-medium text-gray-900">
                          Марка машины и название:
                        </h3>
                        <p className="text-m text-gray-700">{product.name}</p>
                      </div>

                      <div className="flex flex-row gap-5">
                        <span className="flex flex-row gap-1">
                          <h3 className="text-m font-medium text-gray-900">
                            Цвет:
                          </h3>
                          <p className="text-m text-gray-700">
                            {product.color}
                          </p>
                        </span>

                        <span className="flex flex-row gap-1">
                          <h3 className="text-m font-medium text-gray-900">
                            Привод:
                          </h3>
                          <p className="text-m text-gray-700">
                            {product.drive}
                          </p>
                        </span>
                      </div>

                      <div className="flex flex-row gap-4">
                        <span className="flex flex-row gap-1">
                          <h3 className="text-m font-medium text-gray-900">
                            Топливо:
                          </h3>
                          <p className="text-m text-gray-700">{product.fuel}</p>
                        </span>
                        <span className="flex flex-row gap-1">
                          <h3 className="text-m font-medium text-gray-900">
                            л.:
                          </h3>
                          <p className="text-m text-gray-700">
                            {product.liters_count}
                          </p>
                        </span>
                      </div>
                      <div className="flex flex-row gap-1">
                        <h3 className="text-m font-medium text-gray-900">
                          Стоимость:
                        </h3>
                        <p className="text-m font-medium text-red-700">
                          {product.price} ₽
                        </p>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Отправить
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Отмена
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
