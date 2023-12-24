export type formField = {
  title: string;
  type: string;
};
export let fieldsOfLogin: formField[] = [
  { title: "Email", type: "email" },
  { title: "Password", type: "password" },
];
export let fieldsOfRegister: formField[] = [
  { title: "First name", type: "text" },
  { title: "Last name", type: "text" },
  { title: "Email", type: "email" },
  { title: "Password", type: "password" },
  { title: "Confirm password", type: "password" },
];
