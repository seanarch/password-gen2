import "./styles.css";
import { useState } from "react";
import usePasswordGenerator from "./hooks/use-password-generator";
import useConvertPassword from "./hooks/use-convert-password";
import PasswordStrengthIndicator from "./components/StrengthChecker";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";

export default function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include Lowercase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const [copied, setCopied] = useState(false);
  const [phrase, setPhrase] = useState("");

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();
  const { converted, convertPassword } = useConvertPassword();

  return (
    <div className="container">
      <div className="title">
        <span>
          <label>PASSWORD GENERATOR</label>
        </span>
      </div>
      {/* Password Text and Copy */}
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <Button
            text={copied ? "Copied" : "copy"}
            onClick={handleCopy}
            customClass="copyBtn"
          />
        </div>
      )}
      {/* Character Length */}
      <div className="charlength">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      {/* Checkboxes */}
      <div className="checkboxes">
        {checkboxData.map((checkbox, index) => {
          return (
            <Checkbox
              key={index}
              title={checkbox.title}
              onChange={() => handleCheckboxChange(index)}
              state={checkbox.state}
            />
          );
        })}
      </div>
      {/* Strength */}
      <PasswordStrengthIndicator password={password} />

      {/* Error Handling */}
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}

      {/* Generate Button */}
      <Button
        text="Generate Password"
        onClick={() => generatePassword(checkboxData, length)}
        customClass="generateBtn"
      />
      <hr></hr>
      <br />
      <div className="title">
        <span>
          <label>PASSWORD GENERATOR 2</label>
        </span>
        <input
          className="phrase"
          type="text"
          placeholder="Enter your phrase"
          onChange={(e) => setPhrase(e.target.value)}
        />
        <div className="showphrase">{converted}</div>
        <Button
          text="Convert Password"
          onClick={() => convertPassword(phrase)}
          customClass="generateBtn"
        />
      </div>
    </div>
  );
}
