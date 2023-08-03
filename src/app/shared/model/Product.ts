import { Observable } from "rxjs";

export interface Iproducts  {
  Pname: string;
  Pid: number;
  Pstatus: Ipstatus;
  canReturn:number;
}


export type  Ipstatus = "In progress"|"Delevered"|"In dispached"
export interface IcanDeactivate {
  canDeactive :()=>boolean| Promise<boolean>|Observable<boolean>
}
