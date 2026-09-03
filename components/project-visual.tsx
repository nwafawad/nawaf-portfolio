import type { ProjectVisualVariant } from '@/lib/projects';

export function ProjectVisual({
  variant,
  compact = false,
}: {
  variant: ProjectVisualVariant;
  compact?: boolean;
}) {
  return (
    <div
      className={`project-visual visual-${variant}${compact ? ' compact' : ''}`}
      aria-hidden="true"
    >
      {variant === 'recyx' && (
        <div className="recyx-ui">
          <span className="visual-label">RECYX / TRANSACTION FLOW</span>
          <div className="recyx-card recyx-card-main">
            <span>React.js storefront</span>
            <strong>Live</strong>
          </div>
          <div className="recyx-flow" aria-hidden="true">
            <span>Client</span>
            <i>→</i>
            <span>API</span>
            <i>→</i>
            <span>Data</span>
          </div>
          <div className="recyx-card">
            <span>FastAPI + SQLAlchemy</span>
            <strong>Tested</strong>
          </div>
        </div>
      )}
      {variant === 'momentum' && (
        <div className="momentum-ui">
          <span className="visual-label">MOMENTUM / MISSION WORKSPACE</span>
          <div className="momentum-head">
            <strong>04</strong>
            <span>AI-assisted workspace</span>
          </div>
          <div className="momentum-list">
            <div>
              <span>Mission context</span>
              <i />
            </div>
            <div>
              <span>Next action</span>
              <i />
            </div>
            <div>
              <span>Workspace state</span>
              <i />
            </div>
          </div>
        </div>
      )}
      {variant === 'elevanda' && (
        <div className="elevanda-ui">
          <span className="visual-label">ELEVANDA / API SYSTEMS</span>
          <div className="schema-grid">
            <div>
              <small>RECORDS</small>
              <strong>Relational schema</strong>
            </div>
            <i aria-hidden="true">↔</i>
            <div>
              <small>SERVICES</small>
              <strong>Secure REST API</strong>
            </div>
          </div>
          <div className="elevanda-footer">
            <span>Docker</span>
            <span>Git</span>
            <span>Documentation</span>
          </div>
        </div>
      )}
      {variant === 'asala' && (
        <div className="asala-ui">
          <span className="visual-label">ASALA HUB / OFFLINE SYNC</span>
          <div className="asala-status">
            <strong>Offline ready</strong>
            <span>15 chapters · &lt; 8 MB</span>
          </div>
          <div className="asala-queue">
            <div>
              <span>Lesson cache</span>
              <strong>Available</strong>
            </div>
            <div>
              <span>Quiz submission</span>
              <strong>Pending sync</strong>
            </div>
            <div>
              <span>Connection restored</span>
              <strong>Auto-flush</strong>
            </div>
          </div>
          <p>IndexedDB → sync queue → FastAPI</p>
        </div>
      )}
    </div>
  );
}
