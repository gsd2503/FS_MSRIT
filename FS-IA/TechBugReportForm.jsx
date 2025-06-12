import { useState } from "react";
import "./Exe15.css";

const TechBugReportForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [module, setModule] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Bug title is required.";
    if (!description.trim()) newErrors.description = "Description is required.";
    if (!module) newErrors.module = "Please select a module.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <p className="success-message">Bug report submitted successfully!</p>
    );
  }

  return (
    <form className="bug-form" onSubmit={handleSubmit}>
      <h2>Tech Bug Report</h2>

      <label>
        Bug Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={errors.title ? "input-error" : ""}
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </label>

      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={errors.description ? "input-error" : ""}
        />
        {errors.description && (
          <span className="error">{errors.description}</span>
        )}
      </label>

      <label>
        Affected Module:
        <select
          value={module}
          onChange={(e) => setModule(e.target.value)}
          className={errors.module ? "input-error" : ""}
        >
          <option value="">-- Select Module --</option>
          <option value="UI">UI</option>
          <option value="API">API</option>
          <option value="Database">Database</option>
          <option value="Network">Network</option>
        </select>
        {errors.module && <span className="error">{errors.module}</span>}
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default TechBugReportForm;
