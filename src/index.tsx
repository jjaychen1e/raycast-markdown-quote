import { ActionPanel, Action, Form } from "@raycast/api";
import { useState } from "react";

export default function Command() {
  const [input, setInput] = useState("");
  const [quotedInput, setQuotedInput] = useState("");

  const onTextInputChange = (text: string) => {
    setInput(text);
    if (text === "") {
      setQuotedInput("");
    } else {
      setQuotedInput(text.split("\n").map(line => "> " + line).join("\n"));
    }
  };

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.CopyToClipboard content={quotedInput} />
        </ActionPanel>
      }
    >
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
