import { Node } from "../Scenegraph/Node";

export abstract class Component
{
  static StaticGetUID(): string
  {
    var classname = this.toString().split ('(' || /s+/)[0].split (' ' || /s+/)[1];
    return classname;
  }
  GetUID(): string
  {
    return this.constructor.name;
  }
  public update( dt: number ) { }
  public start( )
  {
    console.log("Init" + this.GetUID( ) + " component");
  }
  public onAttach( )
  {
    console.log("Attached " + this.GetUID( ) +
      "  to node '" + this._node.name( ) + "'");
  }
  public onDetach( ) { }
  public getNode( ): Node
  {
    return this._node;
  }
  private setNode( n: Node )
  {
    this._node = n;
  }
  protected _node: Node;
}
