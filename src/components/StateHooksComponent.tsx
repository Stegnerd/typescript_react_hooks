import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Form, Input, Button } from "antd";

interface Props {}

const StateHooksComponent: React.FC<Props> = ({}) => {
  // Props using hooks
  // The useState will return 2 things, one is the state variable,
  // and the other is the dispatcher to set this state
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  /**
   * If the array is empty, the function will get executed once during the
   *  mounting of the component, and the return function will be executed during unmounting.
   *  For example, this can be used to initiate API calls to fetch data that needs to be shown on the UI.
   *
   * If no array is provided, the function will be executed on before and after each render,
   *  this is used to record how many times rendering is taking place.
   *
   * If there is any state variable inside the array, then the effects function is executed once on the mounting of the component,
   *  and then each time the state is changed, the function is called. A very useful example of this property is,
   *  suppose you want to show an autosuggest options, let’s say user is typing in an input field and based on
   *  the initial text you want to show him auto-suggested words/sentence, then you can use this property to
   *  fetch the data from backend each time the input value is changing.
   */

  // run on mounting of the component, and the return function will be executed during unmounting
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component will be unmount");
    };
  }, []);

  // render after every change
  useEffect(() => {
    console.log(`Any state changed name: ${name}, Address: ${address}`);
  });

  // run when state changes of the specific property
  useEffect(() => {
    console.log(`Name changed: ${name}`);
  }, [name]);

  return (
    <Form layout="inline" onSubmit={handleSubmit}>
      <Form.Item>
        <Input
          type="text"
          placeholder="name"
          value={name}
          onChange={onNameChange}
        />
        <Input
          type="text"
          placeholder="address"
          value={address}
          onChange={onAddressChange}
        />
        <Button htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StateHooksComponent;
