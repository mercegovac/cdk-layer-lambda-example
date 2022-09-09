import { Context } from 'aws-lambda';
import { S3Example } from 'layer-example';

export async function handler(event: any, context: Context) {
  console.log(event);
  console.log(context);

  const s3 = new S3Example();

  console.log(s3);

  console.log(s3.test());
}
