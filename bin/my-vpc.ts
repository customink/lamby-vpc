#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { MyVpcStack } from "../lib/my-vpc-stack";

const app = new cdk.App();
new MyVpcStack(app, "MyVpcStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
