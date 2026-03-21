CREATE TABLE IF NOT EXISTS otp_security (
  id UUID PRIMARY KEY,
  email VARCHAR(320) NOT NULL UNIQUE,
  failed_attempts INTEGER NOT NULL,
  locked_until TIMESTAMP,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_otp_security_email ON otp_security(email);
