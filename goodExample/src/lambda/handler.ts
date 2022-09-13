import { Context } from 'aws-lambda';
import { Bla, S3Example, S3Example1 } from 'layer-example';

export async function handler(event: any, context: Context) {
  console.log(event);
  console.log(context);

  const s3 = new S3Example();
  const s31 = new S3Example1();
  const bla = new Bla();

  console.log(s3.test());
  console.log(s31.test());
  console.log(bla.test());
}
