export type CredentialsType = {
    password: string;
    email: string;
    username?: string;
}; 

export type ToggleFormType = {
    formTitle: string;
};

export type ButtonProps = {
    animate?: boolean,
    color: string,
    variant?: boolean,
    textColor?: string
}