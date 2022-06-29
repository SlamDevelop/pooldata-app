import React from 'react';
import './App.css';
import { Button, Input, Modal, Tabs } from "pooldata-components";
import type { InputType, InputColor, ButtonColor } from "pooldata-components";

interface FieldProps {
  id: string;
  type?: InputType;
  name: string;
  placeholder?: string;
  color?: InputColor;
}

const TABS = [
  {
    id: 'sign-in',
    name: 'Sign In',
    fields: [
      {
        id: 'login',
        name: 'Login',
        placeholder: 'Enter your login'
      } as FieldProps,
      {
        id: 'password',
        type: 'password',
        name: 'Password',
        placeholder: 'Enter your password'
      } as FieldProps
    ]
  },
  {
    id: 'sign-up',
    name: 'Sign Up',
    color: 'yellow' as ButtonColor,
    fields: [
      {
        id: 'login',
        name: 'Login',
        placeholder: 'Enter your login',
        color: 'yellow'
      } as FieldProps,
      {
        id: 'password',
        type: 'password',
        name: 'Password',
        placeholder: 'Enter your password',
        color: 'yellow'
      } as FieldProps,
      {
        id: 'repassword',
        type: 'password',
        name: 'Repeat password',
        placeholder: 'Repeat your password',
        color: 'yellow'
      } as FieldProps
    ]
  }
];

function App() {
  const List = TABS.map((item) => (
    <Tabs.Trigger
      key={`TabsTrigger-${item.id}`}
      value={item.id}
    >
      {item.name}
    </Tabs.Trigger>
  ));

  const Content = TABS.map((item) => (
    <Tabs.Content
      key={`TabsContent-${item.id}`}
      value={item.id}
      className="tab-content"
    >
      {item.fields.map((field) => (
        <div className='field' key={`TabsContent-${item.id}-${field.id}`}>
          <label htmlFor={`${item.id}-${field.id}`}>{field.name}</label>
          <Input
            id={`${item.id}-${field.id}`}
            type={field.type}
            placeholder={field.placeholder}
            color={field.color}
          />
        </div>
      ))}

      <Modal.Close asChild>
        <Button className="tab-button" color={item.color}>Enter</Button>
      </Modal.Close>
    </Tabs.Content>
  ));

  return (
    <div className="App">
      <Modal.Root>
        <Modal.Trigger asChild>
          <Button>Authorization</Button>
        </Modal.Trigger>
        <Modal.Content>
          <Tabs.Root defaultValue="sign-in">
            <Tabs.List>
              {List}
            </Tabs.List>
            {Content}
          </Tabs.Root>
        </Modal.Content>
      </Modal.Root>
    </div>
  );
}

export default App;