import { Node } from "./Node"
import { Visitor } from "../Visitor/Visitor"

export class Light extends Node
{
  constructor( )
  {
    super( "Light" );
  }
  public accept( visitor: Visitor )
  {
    visitor.visitLight( this );
  }
}
