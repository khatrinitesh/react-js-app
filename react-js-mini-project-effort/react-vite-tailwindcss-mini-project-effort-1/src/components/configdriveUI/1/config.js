export const UserLoginFormConfig = [
    {
        name: 'name', 
        type: "text", 
        className: "width-100",
        component: 'text-field',
        label: 'User name',
        required: true,
        defaultValue: "",
        value: "",
        placeholder: "Write your full name..."   
   }, {
        name: 'password', 
        type: "password", 
        className: "width-100",
        component: 'text-field',
        label: 'Password',
        required: true,
        defaultValue: "",
        value: "",
        placeholder: "Write your password...."
   }, 
   // ...other additional properties
];