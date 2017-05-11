import { Node } from "./Node";
import { Group } from "./Group";

export class Switch extends Group
{
  constructor( name: string )
  {
    super( name );
    this._currentIdx = 0;
  }
  public forEachNode( callback: Function /*: TODO Function< Node >*/ )
  {
    if( !this.hasNodes( ) )
    {
      return;
    }
    let current = this.nodeAt( this._currentIdx );
    if ( current !== null )
    {
      callback( current );
    }
  }
  public currentNode( ): Node
  {
    return this.nodeAt( this._currentIdx );
  }
  public getCurrentNodeIndex( ): number
  {
    return this._currentIdx;
  }
  public setCurrentNodeIndex( idx: number )
  {
    this._currentIdx = idx;
  }
  selectNextNode( )
  {
    if ( !this.hasNodes( ) )
    {
      return;
    }
    this._currentIdx = ( this._currentIdx + 1 ) % this.numChildren( );
  }
  selectPrevNode( )
  {
    if ( !this.hasNodes( ) )
    {
      return;
    }
    let nChildren: number = this.numChildren( );
    this._currentIdx = ( this._currentIdx + nChildren - 1 ) % nChildren;
  }
  protected _currentIdx: number;
}
