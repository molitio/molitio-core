import { ResourceValet } from "../resource/resourceValet";
import { PublicInfo } from "./publicInfo";

export interface Human {
  name: string;
  public: PublicInfo;
  resourceValet: ResourceValet;
}
