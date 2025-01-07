# Expo Constants.deviceId Returns Null on Android

This repository demonstrates a bug where `Constants.deviceId` in the Expo SDK returns `null` or an empty string on Android devices, particularly after a fresh install or a clean build.  This can break features relying on unique device identification.

The `bug.js` file shows the problematic code, and `bugSolution.js` offers a potential workaround.

## Problem

The standard approach of using `Constants.deviceId` fails to consistently provide a reliable unique identifier on some Android devices.  This inconsistency leads to unpredictable application behavior.

## Solution

The proposed solution uses a combination of techniques to mitigate the issue:

1. **Asynchronous Retrieval:**  Attempting to access `Constants.deviceId` asynchronously allows for better handling of potential delays in initialization.
2. **Fallback Mechanism:**  Providing a fallback mechanism generates a unique identifier if `Constants.deviceId` remains `null` or empty. This ensures a device identifier always exists, albeit not a truly unique identifier from the Expo SDK.