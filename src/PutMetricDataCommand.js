import { PutMetricDataCommand } from "@aws-sdk/client-cloudwatch";
import { client } from "../lib/client-cloudwatch.js";

const run = async () => {
    // See https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricData.html#API_PutMetricData_RequestParameters
    // and https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html
    // for more information about the parameters in this command.
    const command = new PutMetricDataCommand({
      MetricData: [
        {
          MetricName: "PAGES_VISITED",
          Dimensions: [
            {
              Name: "UNIQUE_PAGES_1",
              Value: "URLS_1",
            },
          ],
          Unit: "None",
          Value: 1.0,
        },
      ],
      Namespace: "SITE/TRAFFIC",
    });
    console.log(1,command)  
    try {
      return await client.send(command);
    } catch (err) {
      console.error(err);
    }
  };
  
  export default run();
  // snippet-end:[javascript.v3.cloudwatch.actions.PutMetricData]