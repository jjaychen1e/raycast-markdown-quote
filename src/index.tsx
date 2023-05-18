import {Form} from "@raycast/api";
import {useState} from "react";

export default function Command() {
  const [input, setInput] = useState("");
  const [quotedInput, setQuotedInput] = useState("");

  const onTextInputChange = (text: string) => {
    setInput(text);
    setQuotedInput(text.split("\n").map(line => "> " + line).join("\n"));
  }

  return (
    <Form>
      <Form.TextArea
        id="text-input"
        title="Text Input"
        placeholder="Enter text"
        defaultValue=""
        value={input}
        onChange={(text) => onTextInputChange(text)}
      />
      <Form.TextArea
        id="quoted-text"
        title="Quoted Text"
        placeholder={""}
        value={quotedInput}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {
        }}
      />
    </Form>
  );
}
