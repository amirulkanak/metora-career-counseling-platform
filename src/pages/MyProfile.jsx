import { useState } from 'react';

const MyProfile = () => {
  document.title = 'My Profile | Mentora';
  // scroll to top when the page loads
  window.scrollTo(0, 0);

  const [formOpen, setFromOpen] = useState(false);
  return (
    <section className="max-width-wrapper mt-20 kanak min-h-[60rem] mb-20">
      <div class="mx-auto group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-eminence-200 to-minsk-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
        <div class="w-28 h-28 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
        <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
          <span class="text-2xl font-semibold">George Johnson</span>
          <p>Support Specialist</p>
        </div>
        <button
          onClick={() => setFromOpen(!formOpen)}
          class="bg-eminence-600 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-eminence-700 shadow-btn">
          Edit Profile
        </button>
      </div>

      {/* Update form */}
      {formOpen && (
        <div class="mt-8 bg-slate-50 w-80 p-6 rounded-2xl">
          <form class="flex flex-col gap-4">kanak</form>
        </div>
      )}
    </section>
  );
};

export default MyProfile;
