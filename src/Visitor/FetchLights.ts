import { Visitor } from "./Visitor";
import { Light } from "../Scenegraph/Light"

export class FetchLights extends Visitor
{
  public reset( )
  {
    this._lights = [ ];
    super.reset( );
  }
  public visitLight( l: Light )
  {
    this._lights.push( l );
  }
  public forEachLight( cb: Function )
  {
    this._lights.forEach( ( l: Light ) => {
      cb( l );
    } );
    this._lights = [ ];
  }
  protected _lights: Array< Light > = new Array< Light >( );
}
