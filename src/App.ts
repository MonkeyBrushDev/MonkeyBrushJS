import { Group } from "./Scenegraph/Group";
import { Camera } from "./Scenegraph/Camera";
import { FetchCameras } from "./Visitor/FetchCameras";

export class App
{
  protected _cameras : Array<Camera> = new Array<Camera>( );
  constructor( )
  {
    this._scene = null;
  }
  public setSceneNode( s: Group )
  {
    this._scene = s;

    if ( this._scene !== null )
    {
      let fetchCameras = new FetchCameras( );
      this._scene.perform( fetchCameras );
      let self = this;
      fetchCameras.forEachCamera( ( c: Camera ) => {
        if ( Camera.getMainCamera( ) == null || c.isMainCamera( ) )
        {
          Camera.setMainCamera( c );
        }
        self._cameras.push( c );
      } );
      //this._scene.perform( new StartComponents( ) );
    }
  }
  public start( )
  {

  }
  public run( ) : number
  {
    this.start( );
    let fail = false;
    while ( !fail )
    {
      fail = !this.update( );
    }
    return 0;
  }
  public update( ) : boolean
  {
    console.log( "Engine will update" );
    console.log( "~~~~~~~~~~ BEGIN UPDATE ~~~~~~~~~~" );
    this._scene.perform( new UpdateWorldState( ) );

    let bqCollection = new Array<BatchQueue>( );

    for( let camera in this._cameras )
    {
      if ( camera !== null )
      {
        let bq = new BatchQueue( );
        let fg = new FetchGeometry( camera, bq );
        this._scene.perform( fg );
        bqCollection.push( bq );
      }
    }
    // \\ UPDATE STEP
    console.log( "~~~~~~~~~~~ END UPDATE ~~~~~~~~~~~" );

    // RENDER STEP
    // TODO
    console.log( "~~~~~~~~~~ BEGIN RENDER ~~~~~~~~~~" );
    this._renderer.beginRender( );
    this._renderer.clearBuffers( );
    console.log( "~~~~~~~~~~ RENDER SCENE ~~~~~~~~~~" );
    if ( bqCollection.length > 0 )
    {
      let mainQueue: BatchQueue = null;
      let self = this;
      bqCollection.forEach( ( bq: BatchQueue ) => {
        if ( bq.camera( ) !== Camera.getMainCamera( ) )
        {
          // Render queue with rq camera
          console.log( "Render outscreen (" + bq.camera( ).getName( ) + ")");
          self._renderer.render( bq, bq.camera( ).renderPass( ) );
        }
        else
        {
          mainQueue = bq;
        }
      } );
      if ( mainQueue !== null )
      {
        // Render main queue
        console.log( "render main queue (" + mainQueue.camera( ).getName( )
          + ")" );
        this._renderer.render( mainQueue, mainQueue.camera( ).renderPass( ) );
      }
    }
    console.log( "~~~~~~~~~~~ END RENDER ~~~~~~~~~~~" );
    this._renderer.endRender( );
    // \\ RENDER STEP
    console.log( "Engine did update" );
    return true;
  }
  protected _scene: Group = null;
}
