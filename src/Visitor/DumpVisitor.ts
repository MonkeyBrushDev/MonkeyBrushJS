import { Visitor } from "./Visitor";
import { Node } from "../Scenegraph/Node"
import { Group } from "../Scenegraph/Group"

export class DumpVisitor extends Visitor
{
  traverse( n: Node )
  {
    console.log("Traversing ... ");
    super.traverse( n );
    console.log("... Done");
  }
  visitNode( node: Node )
  {
    super.visitNode( node );
    this._dumpNode( node, "Node" );
  }
  visitGroup( group: Group )
  {
    this._dumpNode( group, "Group" );
    ++this._auxLevel;
    super.visitGroup( group );
    --this._auxLevel;
  }
  protected _dumpNode( node: Node, type: string )
  {
    let auxTab = "";
    for ( let i = 0; i < this._auxLevel; ++i )
    {
      auxTab += "  ";
    }
    console.log( auxTab + "[" + type + "]" + node.name( ) );
  }
  protected _auxLevel: number = 0;
}
