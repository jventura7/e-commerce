import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex h-96 w-96 flex-col items-center space-y-6 rounded-xl bg-slate-300 text-black">
      <h1 className="p-6 text-2xl font-bold text-zinc-900">login.</h1>
      <div className="w-60">
        <input
          className="w-full border-b-2 border-black bg-slate-300 focus:outline-none"
          placeholder="Username"
          name="username"
          id="username"
        ></input>
      </div>
      <div className="w-60">
        <input
          className="w-full border-b-2 border-black bg-slate-300 focus:outline-none"
          placeholder="Password"
          name="username"
          id="username"
        ></input>
      </div>
      <button className="rounded-xl bg-yellow-700 p-6 py-2 tracking-wide text-white transition duration-500 hover:bg-yellow-400">
        login.
      </button>
      <p>
        Don't have an account?{' '}
        <Link className="text-blue-600" href="/register">
          Register
        </Link>
      </p>
      <h1>OR</h1>
    </div>
  );
}
