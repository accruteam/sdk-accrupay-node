import os from 'node:os';
import sdkPackageJson from '../../package.json' assert { type: 'json' };

export const getMandatoryMetadata = () => ({
  sdk: {
    name: sdkPackageJson.name,
    version: sdkPackageJson.version,
  },
});

export const getTelemetryMetadata = () => {
  const now = new Date();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return {
    runtime: {
      name: 'node',
      version: process.versions.node,
      release: process.release.name || undefined,
      lts: process.release.lts || undefined,
    },
    platform: {
      platform: process.platform,
      arch: process.arch,
      version: os.release(),
    },
    time: {
      utc: now.toISOString(),
      timezone,
    },
  };
};

export const collectAppMetadata = (enableTelemetry = true) => {
  const mandatory = getMandatoryMetadata();
  const telemetry = enableTelemetry ? getTelemetryMetadata() : undefined;

  return {
    ...mandatory,
    ...(telemetry && { telemetry }),
    timestamp: new Date().toISOString(),
  };
};
