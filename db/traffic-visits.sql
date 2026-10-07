CREATE TABLE IF NOT EXISTS traffic_visits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  visitor_id TEXT NOT NULL,
  session_id TEXT NOT NULL,
  landing_path TEXT NOT NULL,
  referrer_host TEXT,
  source_type TEXT NOT NULL CHECK (source_type IN ('ai', 'search', 'social', 'referral', 'direct')),
  source_label TEXT NOT NULL,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(session_id)
);

CREATE INDEX IF NOT EXISTS idx_traffic_visits_created_at ON traffic_visits(created_at);
CREATE INDEX IF NOT EXISTS idx_traffic_visits_source ON traffic_visits(source_type, source_label);
CREATE INDEX IF NOT EXISTS idx_traffic_visits_landing_path ON traffic_visits(landing_path);
CREATE INDEX IF NOT EXISTS idx_traffic_visits_visitor_id ON traffic_visits(visitor_id);
