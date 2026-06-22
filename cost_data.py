import boto3

ce = boto3.client('ce', region_name='us-east-1')

response = ce.get_cost_and_usage(
    TimePeriod={
        'Start': '2026-06-01',
        'End': '2026-06-15'
    },
    Granularity='DAILY',
    Metrics=['UnblendedCost']
)

for result in response['ResultsByTime']:
    print(
        result['TimePeriod']['Start'],
        result['Total']['UnblendedCost']['Amount'],
        result['Total']['UnblendedCost']['Unit']
    )