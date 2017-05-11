import { Node } from "../Scenegraph/Node";
import { Group } from "../Scenegraph/Group";
import { Light } from "../Scenegraph/Light";
import { Camera } from "../Scenegraph/Camera";

export class Visitor
{
  public reset( )
  {

  }
  public traverse( n: Node )
  {
    this.reset( );
    n.accept( this );
  }
  public visitNode( node: Node )
  {
    // do nothing
  }
  public visitGroup( group: Group )
  {
    let self = this;
    group.forEachNode((node: Node) =>
    {
      node.accept( self );
    });
  }
  public visitLight( light: Light )
  {
    this.visitNode( light );
  }
  public visitCamera( camera: Light )
  {
    this.visitNode( camera );
  }
}
