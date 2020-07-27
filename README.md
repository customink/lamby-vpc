# My CDK VPC

<a href="https://github.com/customink/lamby"><img src="https://user-images.githubusercontent.com/2381/59363668-89edeb80-8d03-11e9-9985-2ce14361b7e3.png" alt="Lamby: Simple Rails & AWS Lambda Integration using Rack." align="right" width="300" /></a>Very simple [CDK](https://aws.amazon.com/cdk/) TypeScript project to create a new VPC. Made for learning as part of the [Lamby with Database Connections](https://lamby.custominktech.com/docs/database_connections) guides. See deploy section for configuraiton optoins.

Use this project if you do not want to use your default AWS VPC or if for some reason you want to setup a new one.

## Bootstrap & Setup

All that is needed is Docker and your AWS account setup. This will install the Docker container and run `npm setup`.

```shell
$ ./bin/bootstrap
$ ./bin/setup
```

## Deploy

Creates a VPC with a CIDR of `172.16.0.0/16`. If needed you can change this in the code. Other common values include `10.0.0.0/16` or `192.168.0.0/16`.

If needed you can export or pass an `AWS_PROFILE` (defaults to "default") environment variable. This will automatically set the `CDK_DEFAULT_ACCOUNT` value. Likewise, you can pass or export `AWS_DEFAULT_REGION` (defaults to us-east-1) too.

```shell
$ ./bin/deploy
```
