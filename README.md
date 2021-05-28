# je-shared-data

Shared data and types for Jora Employer. Use this shared data instead of duplicating the constants, enums or types in other repositories.

There is a Buildkite build configured to create an NPM release whenever there is a commit pushed to this master branch. (Remember to use the right commit format to trigger the package in NPM refer: https://jobseeker.atlassian.net/wiki/spaces/EMPLOYERDEV/pages/670761011/Publishing+package+to+NPM)

Remember to update the repository that make use of this shared data for the required version.

## Installation instructions
You can install this package using yarn:
`$ yarn add @seek/je-shared-data`

### Repositories that using this shared data
 * je-admin-console
 * je-admin-console
 * je-api-gateway
 * je-application-service
 * je-authentication-service
 * je-authentication-service
 * je-business-service
 * je-cognito-userpool
 * je-job-analysis-service
 * je-job-service
 * je-messaging-service
 * je-payment-service
 * je-serverless-template
 * je-ui (Update the UI last once all the services etc have successfully deployed to avoid errors)