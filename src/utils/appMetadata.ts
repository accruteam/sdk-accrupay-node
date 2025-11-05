import sdkPackageJson from '../../package.json' assert { type: 'json' };

declare const Deno:
  | { version?: { deno?: string }; build?: { os?: string; arch?: string } }
  | undefined;
declare const Bun: { version?: string } | undefined;

export const getMandatoryMetadata = () => ({
  sdk: {
    name: sdkPackageJson?.name ?? '@accrupay/node',
    version: sdkPackageJson?.version ?? 'unknown',
  },
});

export const getTelemetryMetadata = () => {
  const now = new Date();
  const timezone = Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone;
  const base = {
    time: {
      utc: now?.toISOString() ?? 'unknown',
      timezone: timezone ?? 'unknown',
    },
  };

  try {
    const hasWindow = typeof window !== 'undefined';
    const hasProcess = typeof process !== 'undefined';
    const hasDeno = typeof Deno !== 'undefined';
    const hasBun = typeof Bun !== 'undefined';

    if (hasWindow) {
      const hasNavigator = typeof navigator !== 'undefined';
      return {
        ...base,
        runtime: {
          name: 'browser',
          version: hasNavigator ? navigator.userAgent : undefined,
        },
        platform: {
          platform: hasNavigator ? navigator.platform : undefined,
          userAgent: hasNavigator ? navigator.userAgent : undefined,
        },
      };
    }

    if (hasDeno) {
      return {
        ...base,
        runtime: {
          name: 'deno',
          version: Deno?.version?.deno,
        },
        platform: {
          platform: Deno?.build?.os,
          arch: Deno?.build?.arch,
        },
      };
    }

    if (hasBun) {
      return {
        ...base,
        runtime: {
          name: 'bun',
          version: Bun?.version,
        },
        platform: {
          platform: hasProcess ? process.platform : undefined,
          arch: hasProcess ? process.arch : undefined,
        },
      };
    }

    if (hasProcess) {
      return {
        ...base,
        runtime: {
          name: process.versions?.node ? 'node' : 'unknown',
          version: process.versions?.node,
          release: process.release?.name,
          lts: process.release?.lts,
        },
        platform: {
          platform: process.platform,
          arch: process.arch,
        },
      };
    }

    return { ...base, runtime: { name: 'unknown' } };
  } catch {
    return { ...base, runtime: { name: 'unknown' } };
  }
};

export const collectAppMetadata = (enableTelemetry = true) => {
  const mandatory = getMandatoryMetadata();
  let telemetry;

  try {
    telemetry = enableTelemetry ? getTelemetryMetadata() : undefined;
  } catch {
    telemetry = undefined;
  }

  return {
    ...mandatory,
    ...(telemetry && { telemetry }),
    timestamp: new Date().toISOString(),
  };
};
