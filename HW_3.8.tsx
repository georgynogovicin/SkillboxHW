import React from "react";
//1
type ConcatFn = (a: string, b: string) => string;

//2
interface IMyHomeTask {
  howIDoIt: string,
  simeArray: Array<string | number>,
  withData: Array<Omit <IMyHomeTask, "withData">>
}

//or
interface IMyHomeTask2 {
  howIDoIt: string,
  simeArray: Array<string | number>,
  withData?: Array<IMyHomeTask2>
}

//3
interface MyArray<T> {
  [N: number]: T;
  reduce<U>(fn: (prev: U , curr: T, index: number, array: T[]) => U, initialValue: U): U
}

//4
interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  }
}

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N];
}

const homeTask: MyPartial<IHomeTask> = {
  externalData: {
    value: "win"
  }
}

//5
type TMyType<T> = T extends React.ComponentType<infer TProps> ? TProps : T;

//6
type TGetJSXPropsProp<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;
type TDivProps = TGetJSXPropsProp<"div">

const props: TDivProps = {
  some: "123",
  className: "handler",
}



