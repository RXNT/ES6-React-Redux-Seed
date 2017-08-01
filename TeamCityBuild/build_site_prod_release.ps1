write-host "Navigating to root of the powershell script"
cd $PSScriptRoot
write-host "Starting to build site for PROD-RELEASE environment" -foregroundcolor green
cd ../
write-host "Installing dependancies" -foregroundcolor green
#npm install
yarn install --force
write-host "Creating build" -foregroundcolor green
yarn prod-release-build-package
write-host "Build complete" -foregroundcolor green
