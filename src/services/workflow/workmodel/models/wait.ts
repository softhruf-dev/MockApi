import {CWork} from "./work"
import * as Types from "../../types";

export class CWorkWait extends CWork {
  inputs: number;
  outputs: number;
  type: Types.FlowCatagory;

  constructor(name: string)
  {
    super(name);
    this.inputs = 1;
    this.outputs = 1;
    this.type = Types.FlowCatagory.DELAY;
  }
  run() {
    console.log("Wait running")
  }
}
