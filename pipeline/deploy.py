import boto3
import time

CLUSTER = "gogreen_Cluster"
SERVICE = "gogreeen_svc"
REGION = "us-east-1"

def deploy():
    print("Connecting to ECS...")
    
    ecs = boto3.client("ecs", region_name=REGION)

    print("Triggering new deployment...")
    response = ecs.update_service(
        cluster=CLUSTER,
        service=SERVICE,
        forceNewDeployment=True
    )

    print("Deployment triggered successfully!")

    print("Waiting for service to stabilize...")
    waiter = ecs.get_waiter('services_stable')
    waiter.wait(
        cluster=CLUSTER,
        services=[SERVICE]
    )

    print("Service is stable. Deployment complete.")

if __name__ == "__main__":
    deploy()
