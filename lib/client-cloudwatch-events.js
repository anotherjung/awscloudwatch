/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */


import { CloudWatchLogsClient } from "@aws-sdk/client-cloudwatch";

export const client = new CloudWatchLogsClient({ region: "us-east-2" });
