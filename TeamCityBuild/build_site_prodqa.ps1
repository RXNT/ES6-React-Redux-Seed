write-host "Navigating to root of the powershell script"
cd $PSScriptRoot
write-host "Starting to build site for PRODQA environment" -foregroundcolor green
cd ../
write-host "Installing dependancies" -foregroundcolor green
#npm install
yarn install --force
write-host "Creating build" -foregroundcolor green
yarn prodqa-build-package
write-host "Build complete" -foregroundcolor green
