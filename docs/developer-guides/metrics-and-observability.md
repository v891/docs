import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Metrics and Observability
Orkes Conductor server publishes a rich set of metrics that can be used to monitor the applications that are using Conductor.
These metrics are available automatically in your deployment and can be pushed to a 3rd party system such as Datadog on request for dedicated clusters.

The following metrics are published by the server. You can use these metrics to configure alerts for your workflows and tasks.

| Name        | Purpose           | Tags  |
| ------------- |:-------------| -----|
| workflow_completed_seconds_count | Counter for failing workflows|workflowName, status|
| workflow_start_request_seconds_count | Counter for no. of workflows started | workflowName|
| workflow_completed_seconds | Timer for Workflow completion | workflowName, quantile, status |
| workflow_running | Gauge for no. of running workflows | workflowName |
| task_queue_wait | Time spent by a task in queue | taskType|
| task_completed_seconds | Time taken to execute a task | taskType, quantile, status |
| task_poll_request_seconds_count | Counter for number of times the task is being polled | taskType |
| task_queue_depth | Pending tasks queue depth | taskType |
| task_rate_limited | Current number of tasks being rate limited | taskType |
| task_concurrent_execution_limited | Current number of tasks being limited by concurrent execution limit | taskType |
| task_timeout_total | Counter for timed out tasks | taskType |