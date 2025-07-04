import { useState } from "react";

export function ControlledComponent() {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <form className="flex flex-col gap-2">
      <label className="text-white font-bold text-xl">Email:</label>
      <input
        type="email"
        className="p-2 outline-none rounded-lg border border-amber-600 text-white"
        value={email}
        onChange={handleChange}
      />
      <p className="text-sky-300 font-medium text-lg">Entered: {email}</p>
    </form>
  );
}
