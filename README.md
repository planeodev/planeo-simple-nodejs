# planeo-simple-nodejs
This is a helm chart that runs a simple nodejs app on port `:8080`

## requirements
- a working `kubernetes` cluster
- a configured `kubectl` CLI
- a `helm` client installed on your machine

## usage
`helm install simple-nodejs ./charts/simple-nodejs --namespace simple-nodejs --create-namespace`

## license
See [LICENSE](https://github.com/planeodev/planeo-simple-nodejs/blob/master/LICENSE) for full details
