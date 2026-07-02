import { ConfigService } from '@nestjs/config';

const DEV_JWT_ACCESS_SECRET = 'beleqet-local-development-jwt-secret';

export function getJwtAccessSecret(config: ConfigService): string {
  const secret = config.get<string>('JWT_ACCESS_SECRET');
  if (secret) return secret;

  const nodeEnv = config.get<string>('NODE_ENV', 'development');
  if (nodeEnv !== 'production') return DEV_JWT_ACCESS_SECRET;

  throw new Error('JWT_ACCESS_SECRET is required in production');
}
