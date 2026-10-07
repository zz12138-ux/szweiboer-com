"use client";

import { FormEvent, useState } from "react";
import "./stats.css";

type TrafficRow = { sourceType: string; sourceLabel: string; visits: number; visitors: number; whatsappClicks: number };
type LandingRow = { landingPath: string; visits: number; visitors: number; whatsappClicks: number };

type Stats = {
  totals: { today?: number; last7Days?: number; last30Days?: number; allTime?: number };
  quality: { uniqueVisitors7Days?: number; effectiveClicks7Days?: number; uniqueVisitorsAllTime?: number; effectiveClicksAllTime?: number };
  byProduct: Array<{ productCode: string; clicks: number; uniqueVisitors: number; effectiveClicks: number }>;
  byEvent: Array<{ eventKey: string; pagePath: string; clicks: number }>;
  byDate: Array<{ date: string; clicks: number; uniqueVisitors: number; effectiveClicks: number }>;
  traffic?: {
    available: boolean;
    totals: { visits30Days: number; visitors30Days: number; aiVisits30Days: number; whatsappClicks30Days: number };
    bySource: TrafficRow[];
    byLandingPage: LandingRow[];
    byDate: Array<{ date: string; visits: number; visitors: number; aiVisits: number }>;
  };
};

const percentage = (value: number, total: number) => total > 0 ? `${((value / total) * 100).toFixed(1)}%` : "—";
const conversion = (clicks: number, visits: number) => visits > 0 ? `${((clicks / visits) * 100).toFixed(1)}%` : "—";

export default function WhatsAppStatsPage() {
  const [key, setKey] = useState("");
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function load(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/stats", { headers: { "x-stats-key": key } });
      if (!response.ok) throw new Error("Invalid password or unavailable statistics.");
      setStats((await response.json()) as Stats);
    } catch (err) {
      setStats(null);
      setError(err instanceof Error ? err.message : "Unable to load statistics.");
    } finally {
      setLoading(false);
    }
  }

  return <main className="statsPage">
    <section className="statsShell">
      <p className="statsEyebrow">WEIBOER · PRIVATE ANALYTICS</p>
      <h1>Traffic source & WhatsApp dashboard.</h1>
      <p className="statsIntro">Anonymous website visits, referral channels, landing pages and WhatsApp button clicks recorded by the Weiboer Cloudflare database. This measures site activity, not messages sent inside WhatsApp.</p>
      {!stats && <form className="statsLogin" onSubmit={load}><label htmlFor="stats-key">Dashboard password</label><input id="stats-key" type="password" value={key} onChange={(event) => setKey(event.target.value)} autoComplete="current-password" required /><button type="submit" disabled={loading}>{loading ? "Loading…" : "View statistics"}</button>{error && <p className="statsError">{error}</p>}</form>}
      {stats && <>
        <div className="statsCards"><div><span>Today</span><strong>{stats.totals.today ?? 0}</strong></div><div><span>Raw clicks · 7 days</span><strong>{stats.totals.last7Days ?? 0}</strong></div><div><span>Anonymous visitors · 7 days</span><strong>{stats.quality.uniqueVisitors7Days ?? 0}</strong></div><div><span>Effective clicks · 7 days</span><strong>{stats.quality.effectiveClicks7Days ?? 0}</strong></div></div>
        <p className="statsNote">Effective click = the first WhatsApp click from one anonymous browser for the same product in a 24-hour window. Historical clicks remain in raw totals; anonymous metrics begin after this update.</p>
        <section className="statsSectionHead"><p className="statsEyebrow">TRAFFIC ATTRIBUTION · LAST 30 DAYS</p><h2>Where visitors came from — and whether they clicked WhatsApp.</h2><p>Visits are anonymous sessions. AI traffic means an actual visit with an AI referrer or UTM source; citations without a click cannot be measured.</p></section>
        {stats.traffic?.available ? <>
          <div className="statsCards trafficCards"><div><span>Visits · 30 days</span><strong>{stats.traffic.totals.visits30Days}</strong></div><div><span>Visitors · 30 days</span><strong>{stats.traffic.totals.visitors30Days}</strong></div><div><span>AI referral visits</span><strong>{stats.traffic.totals.aiVisits30Days}</strong></div><div><span>WhatsApp clicks from visits</span><strong>{stats.traffic.totals.whatsappClicks30Days}</strong></div></div>
          <section className="statsPanel"><h2>Traffic sources</h2>{stats.traffic.bySource.length ? <div className="sourceList">{stats.traffic.bySource.map((row) => <div className="sourceRow" key={`${row.sourceType}-${row.sourceLabel}`}><div><strong>{row.sourceLabel}</strong><span>{row.sourceType}</span></div><div className="sourceMeter"><i style={{ width: percentage(row.visits, stats.traffic?.totals.visits30Days || 0) }} /></div><b>{row.visits}</b><small>{row.visitors} visitors · {row.whatsappClicks} WhatsApp · {conversion(row.whatsappClicks, row.visits)}</small></div>)}</div> : <p className="statsEmpty">No traffic-source sessions recorded yet.</p>}</section>
          <section className="statsPanel"><h2>Landing pages</h2>{stats.traffic.byLandingPage.length ? <table><thead><tr><th>Landing page</th><th>Visits</th><th>Visitors</th><th>WhatsApp</th><th>Conversion</th></tr></thead><tbody>{stats.traffic.byLandingPage.map((row) => <tr key={row.landingPath}><td>{row.landingPath}</td><td>{row.visits}</td><td>{row.visitors}</td><td>{row.whatsappClicks}</td><td>{conversion(row.whatsappClicks, row.visits)}</td></tr>)}</tbody></table> : <p className="statsEmpty">No landing-page sessions recorded yet.</p>}</section>
        </> : <section className="statsPanel statsUnavailable"><h2>Traffic-source reporting is not enabled yet.</h2><p>The dashboard will keep showing existing WhatsApp data. Apply the included D1 migration to begin collecting new anonymous visit-source data; historical visits cannot be reconstructed.</p></section>}
        <section className="statsPanel"><h2>Clicks by date · last 30 days</h2>{stats.byDate.length ? <table><thead><tr><th>Date</th><th>Raw clicks</th><th>Visitors</th><th>Effective clicks</th></tr></thead><tbody>{stats.byDate.map((row) => <tr key={row.date}><td>{row.date}</td><td>{row.clicks}</td><td>{row.uniqueVisitors}</td><td>{row.effectiveClicks}</td></tr>)}</tbody></table> : <p className="statsEmpty">No clicks recorded in the last 30 days.</p>}</section>
        <section className="statsPanel"><h2>Clicks by product</h2>{stats.byProduct.length ? <table><thead><tr><th>Product</th><th>Raw clicks</th><th>Visitors</th><th>Effective clicks</th></tr></thead><tbody>{stats.byProduct.map((row) => <tr key={row.productCode}><td>{row.productCode}</td><td>{row.clicks}</td><td>{row.uniqueVisitors}</td><td>{row.effectiveClicks}</td></tr>)}</tbody></table> : <p className="statsEmpty">No clicks recorded yet.</p>}</section>
        <section className="statsPanel"><h2>Clicks by entry point</h2>{stats.byEvent.length ? <table><thead><tr><th>Entry point</th><th>Page</th><th>Clicks</th></tr></thead><tbody>{stats.byEvent.map((row) => <tr key={`${row.eventKey}-${row.pagePath}`}><td>{row.eventKey}</td><td>{row.pagePath}</td><td>{row.clicks}</td></tr>)}</tbody></table> : <p className="statsEmpty">No clicks recorded yet.</p>}</section>
        <button className="statsRefresh" type="button" onClick={() => load({ preventDefault() {} } as FormEvent)}>Refresh</button>
      </>}
    </section>
  </main>;
}
