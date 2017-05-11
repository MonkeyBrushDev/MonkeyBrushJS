import { Node } from "./Node"
import { Visitor } from "../Visitor/Visitor"

export class Group extends Node
{
  constructor( name: string )
  {
    super( name );
    this._children = new Array< Node >( );
  }
  public numChildren( ): number
  {
    return this._children.length;
  }
  public hasNodes( ): Boolean
  {
    return this._children.length > 0;
  }
  public nodeAt( idx: number ): Node
  {
    return this._children[ idx ];
  }
  addChild( node: Node )
  {
    if( node.getParent() == this )
    {
      return;
    }
    if( node.getParent() !== null )
    {
      throw "HasParentException";
    }
    node.setParent( this );
    this._children.push( node );
  }
  public accept( visitor: Visitor )
  {
    visitor.visitGroup( this );
  }
  public forEachNode( callback: Function/* TODO : Function< Node >*/ )
  {
    this._children.forEach((node: Node) => {
      callback( node );
    });
  }
  protected _children: Array< Node >;
}
