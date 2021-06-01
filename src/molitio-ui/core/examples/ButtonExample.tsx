export interface ButtonExampleProps {
    props: {
      primary: boolean;
      label: string;
    };
  }
  
  export function ButtonExample({ props }: ButtonExampleProps): JSX.Element {
    return (
      <main>
        <label>{props.label}</label>
        <input type="button" value={props.label}></input>
      </main>
    );
  }