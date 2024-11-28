const PersonalAccount = () => (
  <div className="p-4 text-center">
    <h1 className="text-lg font-roboto">Bxiд</h1>
    <form className="mt-4 flex flex-col items-center">
      <input
        type="text"
        placeholder="Логін"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-64"
      />
      <input
        type="password"
        placeholder="Пароль"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-64"
      />
      <button className="bg-active text-white px-6 py-2 rounded-md">
        Увійти
      </button>
    </form>
  </div>
);

export default PersonalAccount;
