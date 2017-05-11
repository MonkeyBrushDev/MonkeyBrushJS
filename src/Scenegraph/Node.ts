import { Visitor } from "../Visitor/Visitor"

export class Node
{
  constructor( name: string )
  {
    this._name = name;
    this._parent = null;
  }
  public perform( visitor: Visitor )
  {
    visitor.traverse( this );
  }
  public accept( visitor: Visitor )
  {
    visitor.visitNode( this );
  }
  protected _name: string;
  protected _parent: Node;
}
