import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import notify from '../utils/notify';

const MyProfile = () => {
  document.title = 'My Profile | Mentora';
  // scroll to top when the page loads
  window.scrollTo(0, 0);
  const { user, updateUserProfile, loading } = useAuth();
  const [formOpen, setFromOpen] = useState(false);
  const [fullName, setFullName] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [error, setError] = useState('');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size={5} />
      </div>
    );
  }

  const handleEditProfile = () => {
    setFromOpen(!formOpen);
    setFullName(user.displayName);
    setPhotoUrl(user.photoURL);
  };

  const handleProfileUpdate = (event) => {
    event.preventDefault();
    if (!fullName || !photoUrl) {
      setError('Please fill all the fields');
      return;
    }
    updateUserProfile(fullName, photoUrl);
    notify.success('Profile updated successfully');
    setFromOpen(!formOpen);
  };

  return (
    <section className="max-width-wrapper mt-20 kanak min-h-[60rem] mb-20">
      <div className="mx-auto group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-eminence-200 to-minsk-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
        <div className="w-28 h-28 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
          <img
            className="w-full h-full rounded-full object-cover object-center"
            src={user.photoURL}
            alt={user.displayName}
          />
        </div>
        <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
          <span className="text-2xl font-semibold">{user.displayName}</span>
          <p>{user.email}</p>
        </div>
        <button
          onClick={handleEditProfile}
          className="bg-eminence-600 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-eminence-700 shadow-btn">
          Edit Profile
        </button>
      </div>

      {/* Update form */}
      {formOpen && (
        <div className="mt-16 kanak mx-auto bg-slate-50 max-w-80 p-6 rounded-2xl">
          <form onSubmit={handleProfileUpdate}>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Full name"
                name="fullName"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                className="w-full rounded-md border border-minsk-200 bg-transparent px-5 py-3 text-base outline-none focus-visible:shadow-none "
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Photo URL"
                name="photoUrl"
                onChange={(e) => setPhotoUrl(e.target.value)}
                value={photoUrl}
                className="w-full rounded-md border border-minsk-200 bg-transparent px-5 py-3 text-base outline-none focus-visible:shadow-none "
              />
            </div>

            {/* error message */}
            <span>
              {error && <div className="text-red-500 mb-1">{error}</div>}
            </span>

            <div className="mb-10">
              <input
                type="submit"
                value="Update Profile"
                className="w-full cursor-pointer rounded-md border btn px-5 py-3 text-base font-medium bg-minsk-500 text-white transition hover:bg-opacity-90"
              />
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default MyProfile;
