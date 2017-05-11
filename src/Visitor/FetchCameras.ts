import { Visitor } from "./Visitor";
import { Camera } from "../Scenegraph/Camera";

export class FetchCameras extends Visitor
{
  public reset( )
  {
    this._cameras = [ ];
    super.reset( );
  }
  public visitCamera( c: Camera )
  {
    this._cameras.push( c );
  }
  public hasCameras( ): boolean
  {
    return this._cameras.length > 0;
  }
  public forEachCamera( cb: Function )
  {
    this._cameras.forEach( ( c: Camera ) => {
      cb( c );
    } );
    this._cameras = [ ];
  }
  protected _cameras: Array< Camera > = new Array< Camera >( );
}
