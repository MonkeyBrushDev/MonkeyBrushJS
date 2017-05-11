import { LambdaVisitor } from "./LambdaVisitor";

export class StartComponents extends LambdaVisitor
{
  constructor( )
  {
    super( ( n: Node ) => {
      n.startComponents( );
    } );
  }
}
