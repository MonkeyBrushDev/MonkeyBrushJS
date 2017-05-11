import { Visitor } from "./Visitor";
import { Node } from "../Scenegraph/Node";
import { Group } from "../Scenegraph/Group";

export class LambdaVisitor extends Visitor
{
  constructor( callback: Function )
  {
    super( );
    this._callback = callback;
  }

  public visitNode( n: Node )
  {
    this._callback( n );
  }

  public visitorGroup( g: Group )
  {
    this._callback( g );
    super.visitGroup( g );
  }

  protected _callback : Function;
}
