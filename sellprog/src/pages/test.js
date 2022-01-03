import { useState } from "react";
function Test() {
  const [companyName, setCompanyName] = useState("Apple");

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>
    </div>
  );
}
export default Test;
