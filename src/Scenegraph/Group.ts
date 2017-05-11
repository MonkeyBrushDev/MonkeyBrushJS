import { Node } from "./Node"
import { Visitor } from "../Visitor/Visitor"

export class Group extends Node
{
  constructor( name: string )
  {
    super( name );
  }
  public accept( visitor: Visitor )
  {
    visitor.visitGroup( this );
  }
}
