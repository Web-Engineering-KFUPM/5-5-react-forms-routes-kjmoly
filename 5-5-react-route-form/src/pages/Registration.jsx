import { useState } from "react";

export default function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = {};

    // Email validation
    if (!email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!(email.includes("@") && email.endsWith(".com"))) {
      nextErrors.email = "Enter a valid email address";
    }

    // Password validation
    if (!password.trim()) {
      nextErrors.password = "Password is required";
    }

    // Gender validation
    if (!gender) {
      nextErrors.gender = "Please select your gender";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    // Success alert
    alert(`User Registered: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="card">
      {/* Email */}
      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      {/* Password */}
      <div className="form-row">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>

      {/* Gender */}
      <fieldset className="form-row">
        <legend>Gender</legend>

        <label className="radio">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>

        <label className="radio">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>

        {errors.gender && <p className="error">{errors.gender}</p>}
      </fieldset>

      {/* Submit */}
      <button type="submit" disabled={!email || !password || !gender}>
        Register
      </button>
    </form>
  );
}