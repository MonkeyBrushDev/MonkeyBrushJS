import { Node } from "./Node";
import { Visitor } from "../Visitor/Visitor";

export class Camera extends Node
{
  constructor( fov: number, ar: number, near: number, far: number )
  {
    super( "Camera" );
  }
  public accept( v: Visitor )
  {
    v.visitCamera( this );
  }
  public isMainCamera( ): boolean
  {
    return this._isMainCamera;
  }
  public setIsMainCamera( v: boolean )
  {
    this._isMainCamera = v;
  }
  static getMainCamera( ): Camera
  {
    return this._mainCamera;
  }
  static setMainCamera( camera: Camera )
  {
    this._mainCamera = camera;
  }
  static _mainCamera: Camera = null;
  protected _isMainCamera: boolean = false;


  public computeCullingPlanes( )
  {
    console.log( "Computing near plane at _cullingPlanes[0]" );
    console.log( "Computing far plane at _cullingPlanes[1]" );
    console.log( "Computing top plane at _cullingPlanes[2]" );
    console.log( "Computing bottom plane at _cullingPlanes[3]" );
    console.log( "Computing left plane at _cullingPlanes[4]" );
    console.log( "Computing right plane at _cullingPlanes[5]" );
  }
  public setCullingEnabled( value: boolean ) { this._cullingEnabled = value; }
  public isCullingEnabled( ) : boolean { return this._cullingEnabled; }

  public culled( /*const BoundingVolume *v*/ ) : boolean
  {
    if( !this.isCullingEnabled( ) )
    {
      return false;
    }
    /*for( auto& plane: _cullingPlanes )
    {
      if ( plane->inside( v ) )
      {
        return true;
      }
    }*/
    return false;
  }
  protected _cullingEnabled : boolean = true;
}
