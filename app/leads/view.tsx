"use client";

import { FormEvent, useState } from "react";
import styles from "./leads.module.css";

type Status = "new" | "contacted" | "quoted" | "closed";
type Lead = {
  id: string; created_at: string; status: Status; source: string; name: string;
  company: string | null; email: string; country: string; interested_products: string;
  estimated_quantity: string; message: string;
};
type Click = { day: string; source_path: string; count: number };
const statuses: Status[] = ["new", "contacted", "quoted", "closed"];
const label: Record<Status, string> = { new: "新询盘", contacted: "已联系", quoted: "已报价", closed: "已结束" };

const shanghaiTime = (value: string) => {
  const date = new Date(value.includes("T") ? value : `${value.replace(" ", "T")}Z`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai", year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
  }).format(date);
};

export default function LeadsView() {
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [clicks, setClicks] = useState<Click[]>([]);
  const [clicksAvailable, setClicksAvailable] = useState(true);
  const [unlocked, setUnlocked] = useState(false);
  const [busy, setBusy] = useState(false);
  const [saving, setSaving] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [filter, setFilter] = useState<Status | "all">("all");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState<string[]>([]);

  async function load(event?: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    setBusy(true); setError(""); setNotice("");
    try {
      const response = await fetch("/api/leads", { headers: { Authorization: `Bearer ${password}` }, cache: "no-store" });
      const data = await response.json() as { error?: string; leads?: Lead[]; clicks?: Click[]; clicksAvailable?: boolean };
      if (!response.ok) throw new Error(data.error || "线索暂时无法读取。");
      setLeads(data.leads ?? []);
      setClicks(data.clicks ?? []);
      setClicksAvailable(data.clicksAvailable !== false);
      setUnlocked(true);
    } catch (reason) {
      setLeads([]); setClicks([]); setUnlocked(false);
      setError(reason instanceof Error ? reason.message : "线索暂时无法读取。");
    } finally { setBusy(false); }
  }

  async function changeStatus(lead: Lead, status: Status) {
    if (saving || status === lead.status) return;
    setSaving(lead.id); setError(""); setNotice("");
    try {
      const response = await fetch("/api/leads", {
        method: "PATCH", headers: { "Content-Type": "application/json", Authorization: `Bearer ${password}` },
        body: JSON.stringify({ id: lead.id, from: lead.status, status }), cache: "no-store",
      });
      const data = await response.json() as { error?: string; status?: Status };
      if (!response.ok || data.status !== status) throw new Error(data.error || "状态未保存，请刷新后重试。");
      setLeads((current) => current.map((item) => item.id === lead.id ? { ...item, status } : item));
      setNotice(`${lead.name}：状态已保存为“${label[status]}”。`);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "状态未保存。");
    } finally { setSaving(""); }
  }

  const filtered = leads.filter((lead) => {
    const matchesStatus = filter === "all" || lead.status === filter;
    const text = `${lead.name} ${lead.company ?? ""} ${lead.country} ${lead.email} ${lead.interested_products}`.toLowerCase();
    return matchesStatus && text.includes(query.trim().toLowerCase());
  });
  const clickTotal = clicks.reduce((sum, click) => sum + click.count, 0);

  return <main className={styles.shell} data-component="private-lead-desk">
    <header className={styles.header}>
      <div><span className={styles.eyebrow}>WEIBOER · PRIVATE OPERATIONS</span><h1>客户线索</h1><p>网站表单与 WhatsApp 点击分开记录，不把点击当作已发送消息。</p></div>
      {unlocked && <button type="button" className={styles.secondary} disabled={busy || !!saving} onClick={() => load()}>{busy ? "读取中…" : "刷新数据"}</button>}
    </header>
    <section className={styles.access} aria-label="访问验证">
      <form onSubmit={load} className={styles.accessForm}>
        <label htmlFor="leads-password">后台访问密码</label>
        <input id="leads-password" type="password" autoComplete="off" value={password} onChange={(event) => setPassword(event.target.value)} required />
        <button type="submit" disabled={busy || !!saving}>{busy ? "验证中…" : unlocked ? "重新验证" : "查看线索"}</button>
      </form>
      <p>仅授权人员可查看。密码只随请求提交，不保存在浏览器存储中。</p>
      {error && <p className={styles.error} role="alert">{error}</p>}
      {notice && <p className={styles.notice} role="status">{notice}</p>}
    </section>
    {unlocked && <>
      <section className={styles.summary} aria-label="当前读取范围">
        <div><span>近期表单记录</span><strong>{leads.length}</strong><small>最多显示最近 100 条，不代表历史总数</small></div>
        <div><span>其中新询盘</span><strong>{leads.filter((lead) => lead.status === "new").length}</strong><small>仅在本次读取的记录内</small></div>
        <div><span>WhatsApp 链接点击</span><strong>{clicksAvailable ? clickTotal : "—"}</strong><small>{clicksAvailable ? "最近返回的每日路径汇总；非真实聊天数" : "点击统计尚不可用"}</small></div>
      </section>
      <section className={styles.panel} aria-labelledby="leads-heading">
        <div className={styles.panelHead}><div><h2 id="leads-heading">网站表单线索</h2><p>仅显示真实保存的记录；国家来自请求头地理信息，仅作粗略参考。</p></div><span>{filtered.length} 条匹配</span></div>
        <div className={styles.filters}>
          <label>按状态筛选<select value={filter} onChange={(event) => setFilter(event.target.value as Status | "all")}><option value="all">全部状态</option>{statuses.map((status) => <option key={status} value={status}>{label[status]}</option>)}</select></label>
          <label>搜索客户或需求<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="姓名、公司、国家、邮箱、品类" /></label>
        </div>
        {leads.length === 0 ? <p className={styles.empty}>当前没有可显示的表单记录。</p> : filtered.length === 0 ? <p className={styles.empty}>没有符合筛选条件的记录。</p> : <div className={styles.cards}>{filtered.map((lead) => {
          const open = expanded.includes(lead.id);
          return <article key={lead.id} className={styles.card}>
            <div className={styles.cardMain}><div><span className={styles.date}>{shanghaiTime(lead.created_at)} · {lead.country || "未知地区"}</span><h3>{lead.name}{lead.company ? ` · ${lead.company}` : ""}</h3><p>{lead.interested_products}{lead.estimated_quantity ? ` · ${lead.estimated_quantity}` : ""}</p></div><span className={styles.badge}>{label[lead.status] ?? lead.status}</span></div>
            <div className={styles.cardMeta}><span>表单已提交</span><span>原始来源标签：{lead.source}</span><a href={`mailto:${encodeURIComponent(lead.email)}`}>{lead.email}</a></div>
            <div className={styles.cardActions}><button type="button" className={styles.secondary} aria-expanded={open} onClick={() => setExpanded((current) => open ? current.filter((id) => id !== lead.id) : [...current, lead.id])}>{open ? "收起需求" : "查看需求"}</button><label>跟进状态<select aria-label={`${lead.name} 的跟进状态`} value={lead.status} disabled={saving === lead.id} onChange={(event) => changeStatus(lead, event.target.value as Status)}>{statuses.map((status) => <option key={status} value={status}>{label[status]}</option>)}</select></label></div>
            {open && <div className={styles.detail}><dl><div><dt>意向产品</dt><dd>{lead.interested_products}</dd></div><div><dt>预估数量</dt><dd>{lead.estimated_quantity || "未提供"}</dd></div></dl><h4>客户留言</h4><p>{lead.message}</p></div>}
          </article>;
        })}</div>}
      </section>
      <section className={styles.panel} aria-labelledby="clicks-heading"><div className={styles.panelHead}><div><h2 id="clicks-heading">WhatsApp 点击记录</h2><p>按日期和来源页面汇总；无法知道客户是否在 WhatsApp 里发送了消息。</p></div></div>
        {!clicksAvailable ? <p className={styles.empty}>点击数据暂不可用；表单线索仍可查看。</p> : clicks.length === 0 ? <p className={styles.empty}>当前没有可显示的点击记录。</p> : <div className={styles.tableScroll}><table><thead><tr><th>日期（UTC）</th><th>来源页面</th><th>点击次数</th></tr></thead><tbody>{clicks.map((click) => <tr key={`${click.day}:${click.source_path}`}><td>{click.day}</td><td>{click.source_path}</td><td>{click.count}</td></tr>)}</tbody></table></div>}
      </section>
    </>}
  </main>;
}
