export interface Iitem {
  id: number;
  img: string;
  title: string;
  desc: string;
  github: string
  link: string;
}

export interface IServiceType {
  id: number;
  img: string;
  title: string;
  counter: number;
}

export interface ICounter {
  from: number;
  to: number;
  text: string;
}

