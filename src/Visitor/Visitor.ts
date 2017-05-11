import { Node } from "../Scenegraph/Node"
import { Group } from "../Scenegraph/Group"

export class Visitor
{
  reset( )
  {

  }
  traverse( n: Node )
  {
    this.reset( );
    n.accept( this );
  }
  visitNode( node: Node )
  {
    // do nothing
  }
  visitGroup( group: Group )
  {

  }
}
