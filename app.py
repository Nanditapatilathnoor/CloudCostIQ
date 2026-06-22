import streamlit as st
import boto3

st.title("CloudCostIQ Dashboard")

ce = boto3.client('ce', region_name='us-east-1')

response = ce.get_cost_and_usage(
    TimePeriod={
        'Start': '2026-06-01',
        'End': '2026-06-15'
    },
    Granularity='DAILY',
    Metrics=['UnblendedCost']
)

dates = []
costs = []

for result in response['ResultsByTime']:
    dates.append(result['TimePeriod']['Start'])
    costs.append(float(result['Total']['UnblendedCost']['Amount']))

st.subheader("Daily AWS Cost")
st.line_chart(costs)

st.write("Dates:", dates)
st.write("Costs:", costs)