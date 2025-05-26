// src/pages/SignOut.jsx
export default function SignOut({ onSignOut }) {
  return (
    <div className="flex items-center justify-center h-screen bg-green-100">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
        <p className="mb-4">You are signed in.</p>
        <button
          onClick={onSignOut}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
