#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkLayerLambdaStack } from './stacks/cdkLayerLambdaStack';

const devEnv = {
  account: '146191261538',
  region: 'eu-west-1',
};

const app = new cdk.App();
new CdkLayerLambdaStack(app, 'CdkLayerLambdaStack', { env: devEnv });
