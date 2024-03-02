import { Link, useNavigate } from "react-router-dom";


export default function SingupPage() {
    const navigate = useNavigate();

    const goToMain = () => {
        navigate("/login")
    }
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Автомобили"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Регистрация
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
        <legend className="text-sm font-semibold leading-6 text-gray-900">Выберите роль:</legend>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-user"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-user" className="block text-sm font-medium leading-6 text-gray-900">
                    Я пользователь
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-manager"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-manager" className="block text-sm font-medium leading-6 text-gray-900">
                    Я менеджер
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="push-seller"
                    name="push-notifications"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label htmlFor="push-seller" className="block text-sm font-medium leading-6 text-gray-900">
                    Я продавец
                  </label>
                </div>
              </div>
        </div>
      <div>
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
            Имя
          </label>
          <div className="mt-2">
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              required
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
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
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Пароль
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Номер телефона
            </label>
            <div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={goToMain}
          >
            Войти
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Уже есть аккаунт?{' '}
        <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Войти
        </Link>
      </p>
    </div>
  </div>
    )
}