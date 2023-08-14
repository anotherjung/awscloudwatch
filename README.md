aws configure sso
- add name jung
aws s3 ls --profile jung

aws configure
- enter key
- enter secret
- get key and secret from IAM user

pnpm install @aws-sdk/client-s3
- add aws sdk

pnpm install @aws-sdk/client-cloudwatch
- add cloudwatch metrics
- node src/PutMetricDataCommand.js

pnpm install @aws-sdk/client-cloudwatch-events
- add cloudwatch events
- node src/PutEventsCommand.js

pnpm install @aws-sdk/client-cloudwatch-logs
- add cloudwatch logs
- node src/CreateLogGroupCommand.js