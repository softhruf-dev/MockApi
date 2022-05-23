import {CWork} from "./work"

export class CWorkCallRule extends CWork {
  inputs: number;
  outputs: number;

  constructor(name: string)
  {
    super(name);
    this.inputs = 1;
    this.outputs = 1;
  }

  run() {
    console.log("CallRule running")
  }
}
