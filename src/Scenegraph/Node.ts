import { Visitor } from "../Visitor/Visitor"
import { Component } from "../Components/Component";
import { Multimap, ArrayListMultimap } from "../Utils/Multimap";

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
  public getParent( ): Node
  {
    return this._parent;
  }
  // TODO: Problems with setParent visibility! :(
  public setParent( node: Node )
  {
    this._parent = node;
  }
  public name( ) : string
  {
    return this._name;
  }
  public addComponent( comp: Component )
  {
    (<any>comp).setNode( this );
    this._components.put( comp.GetUID( ), comp );
    comp.onAttach( );
  }
  public startComponents( )
  {
    for( let comp of this._components.entries )
    {
      (<any>comp).value.start( );
    }
  }
  protected _name: string;
  protected _parent: Node = null;
  protected _components: Multimap< string, Component > = new ArrayListMultimap< string, Component >();
}
